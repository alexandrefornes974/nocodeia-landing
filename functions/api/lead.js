// Cloudflare Pages Function: POST /api/lead
// Recebe o e-mail do formulário "Quero minha vaga" e entrega ao formulário público do Proacta CRM,
// de servidor para servidor (o Proacta não aceita chamada direta do navegador, de propósito).
//
// Variáveis no projeto Pages "nocodeia" (Settings > Variables and Secrets):
//   PROACTA_FORM_SLUG  (obrigatória) slug do formulário da Nocodeia no Proacta
//   PROACTA_URL        (opcional)    padrão: https://app.proacta.ia.br/api/formularios/receber
//
// Só devolve 200 quando o Proacta confirmou. Qualquer outro caso devolve erro, e o site então
// NÃO dispara generate_lead e mostra o link do WhatsApp.

const ORIGENS = ['https://nocodeiaww.com', 'https://www.nocodeiaww.com'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function resposta(corpo, status) {
  return new Response(JSON.stringify(corpo), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function onRequestPost({ request, env }) {
  const origem = request.headers.get('Origin');
  if (origem && !ORIGENS.includes(origem) && !/^https:\/\/[a-z0-9-]+\.nocodeia\.pages\.dev$/.test(origem)) {
    return resposta({ erro: 'ORIGEM_INVALIDA' }, 403);
  }
  if (!(request.headers.get('Content-Type') || '').toLowerCase().startsWith('application/json')) {
    return resposta({ erro: 'CORPO_INVALIDO' }, 400);
  }
  const bruto = await request.text();
  if (bruto.length > 4096) return resposta({ erro: 'CORPO_GRANDE_DEMAIS' }, 413);
  let c;
  try { c = JSON.parse(bruto); } catch (e) { return resposta({ erro: 'CORPO_INVALIDO' }, 400); }

  // Campo-armadilha: robô preenche, gente não. Responde como se tivesse dado certo.
  if (c && c.website_url) return resposta({ ok: true });

  const email = String((c && c.email) || '').trim().toLowerCase();
  if (!EMAIL.test(email) || email.length > 254) return resposta({ erro: 'EMAIL_INVALIDO' }, 400);

  if (!env.PROACTA_FORM_SLUG) return resposta({ erro: 'NAO_CONFIGURADO' }, 503);
  const url = env.PROACTA_URL || 'https://app.proacta.ia.br/api/formularios/receber';

  const utm = (c && typeof c.utm === 'object' && c.utm) || {};
  const origemLead = { tipo: 'hospedado', referrer: String(c.referrer || '').slice(0, 200) };
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
    if (utm[k]) origemLead[k] = String(utm[k]).slice(0, 200);
  });

  let r;
  try {
    r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'nocodeia-site/1.0' },
      body: JSON.stringify({
        slug: env.PROACTA_FORM_SLUG,
        respostas: { email: email },
        consent: true, // o aviso de privacidade fica ao lado do botão
        origem: origemLead,
      }),
      signal: AbortSignal.timeout(8000),
    });
  } catch (e) {
    return resposta({ erro: 'PROACTA_FORA_DO_AR' }, 502);
  }
  if (!r.ok) {
    let codigo = 'FALHOU';
    try { codigo = (await r.json()).erro || codigo; } catch (e) {}
    return resposta({ erro: codigo }, 502);
  }
  return resposta({ ok: true });
}

export function onRequest() {
  return resposta({ erro: 'METODO_NAO_PERMITIDO' }, 405);
}
