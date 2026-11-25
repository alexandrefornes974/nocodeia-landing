/* Calculadora de mensagens do WhatsApp (API oficial) - Nocodeia.
   Um único arquivo usado pelas páginas /calculadora-whatsapp/, /en/whatsapp-cost-calculator/ e
   /es/calculadora-whatsapp/ e pelo bloco dentro do post. O idioma vem do atributo lang mais próximo
   do bloco (pt, en ou es; português se não reconhecer).
   Sem biblioteca, sem backend, sem coletar dados: tudo roda no navegador.
   Como usar numa página: <div class="nc-calc" data-nc-calc> com campos [data-campo="..."],
   mensagens de erro [data-erro="..."], resultado [data-resultado] e resumo para leitor de tela [data-resumo].
   Também roda em Node (module.exports), para os testes e para o gerador das páginas. */
(function (global) {
  'use strict';

  // Tarifas da Meta para o Brasil, em reais. Vigência: 01/10/2026. Conferidas em 20/11/2026.
  // Fonte: https://developers.facebook.com/docs/whatsapp/pricing (seção "Rate cards and volume tiers").
  // Para atualizar: troque os valores abaixo. Unidade: 1/10.000 de real (R$ 0,3217 = 3217; R$ 0,035 = 350).
  var TARIFAS = {
    marketing: 3217,         // R$ 0,3217
    utilidade: 350,          // R$ 0,035
    autenticacao: 350,       // R$ 0,035
    atendimento: 350,        // R$ 0,035, a partir da 1.001ª mensagem do mês, por número
    franquiaPorNumero: 1000, // mensagens de atendimento sem cobrança por mês, por número
    unidadesPorReal: 10000
  };
  var LIMITES = { conversas: 10000000, mensagens: 1000, marketing: 10000000, utilidade: 10000000, autenticacao: 10000000, numeros: 1000 };
  var CAMPOS = ['conversas', 'mensagens', 'marketing', 'utilidade', 'autenticacao', 'numeros'];

  // Textos e formato de número de cada idioma. O valor é sempre em reais (tarifa do Brasil).
  var TEXTOS = {
    pt: {
      milhar: '.', decimal: ',',
      nomes: { conversas: 'conversas', mensagens: 'mensagens por conversa', marketing: 'mensagens de marketing', utilidade: 'mensagens de utilidade', autenticacao: 'mensagens de autenticação', numeros: 'telefones' },
      soInteiros: 'Digite só números inteiros, sem vírgula, sinal ou letras.',
      limite: function (n, nome) { return 'O limite é ' + n + ' ' + nome + '. Digite um valor menor.'; },
      atendMes: 'Mensagens de atendimento no mês', conversas: ' conversas × ', mensagens: ' mensagens',
      franquia: 'Dentro da franquia (não cobradas)', porNumero: ' por número × ', numero: ' número', numeros: ' números',
      cobradas: 'Mensagens de atendimento cobradas', custo: 'Custo de atendimento',
      marketing: 'Marketing', utilidade: 'Utilidade', autenticacao: 'Autenticação',
      totalMes: 'Total por mês na API oficial', totalAno: 'Total por ano (× 12): ', resumoAno: 'Total por ano: ',
      chat: 'No chat do site, a tarifa de mensagem do WhatsApp é <strong>R$ 0,00</strong> (o modelo de IA e a hospedagem existem nos dois canais).',
      corrija: 'Corrija os campos marcados para ver o cálculo.'
    },
    en: {
      milhar: ',', decimal: '.',
      nomes: { conversas: 'conversations', mensagens: 'messages per conversation', marketing: 'marketing messages', utilidade: 'utility messages', autenticacao: 'authentication messages', numeros: 'phone numbers' },
      soInteiros: 'Enter whole numbers only, with no decimals, signs or letters.',
      limite: function (n, nome) { return 'The limit is ' + n + ' ' + nome + '. Enter a smaller number.'; },
      atendMes: 'Service messages this month', conversas: ' conversations × ', mensagens: ' messages',
      franquia: 'Within the free tier (not charged)', porNumero: ' per number × ', numero: ' number', numeros: ' numbers',
      cobradas: 'Charged service messages', custo: 'Service cost',
      marketing: 'Marketing', utilidade: 'Utility', autenticacao: 'Authentication',
      totalMes: 'Monthly total on the official API', totalAno: 'Yearly total (× 12): ', resumoAno: 'Yearly total: ',
      chat: 'On your website chat, the WhatsApp message fee is <strong>R$ 0.00</strong> (the AI model and hosting cost the same on both channels).',
      corrija: 'Fix the highlighted fields to see the result.'
    },
    es: {
      milhar: '.', decimal: ',',
      nomes: { conversas: 'conversaciones', mensagens: 'mensajes por conversación', marketing: 'mensajes de marketing', utilidade: 'mensajes de utilidad', autenticacao: 'mensajes de autenticación', numeros: 'números de teléfono' },
      soInteiros: 'Escribe solo números enteros, sin comas, signos ni letras.',
      limite: function (n, nome) { return 'El límite es ' + n + ' ' + nome + '. Escribe un valor menor.'; },
      atendMes: 'Mensajes de atención del mes', conversas: ' conversaciones × ', mensagens: ' mensajes',
      franquia: 'Dentro de la franquicia (sin cobro)', porNumero: ' por número × ', numero: ' número', numeros: ' números',
      cobradas: 'Mensajes de atención cobrados', custo: 'Costo de atención',
      marketing: 'Marketing', utilidade: 'Utilidad', autenticacao: 'Autenticación',
      totalMes: 'Total por mes en la API oficial', totalAno: 'Total por año (× 12): ', resumoAno: 'Total por año: ',
      chat: 'En el chat del sitio, la tarifa de mensaje de WhatsApp es <strong>R$ 0,00</strong> (el modelo de IA y el hosting existen en los dos canales).',
      corrija: 'Corrige los campos marcados para ver el cálculo.'
    }
  };
  function T(l) { return TEXTOS[l] || TEXTOS.pt; }

  function inteiro(n, l) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, T(l).milhar); }
  function reais(centavos, l) {
    var c = String(centavos % 100); if (c.length < 2) c = '0' + c;
    return 'R$ ' + inteiro(Math.floor(centavos / 100), l) + T(l).decimal + c;
  }
  function tarifa(t, l) { // "R$ 0,3217" a partir da unidade 1/10.000
    var s = String(t); while (s.length < 5) s = '0' + s;
    var inteira = s.slice(0, s.length - 4), frac = s.slice(-4).replace(/0+$/, '');
    while (frac.length < 3) frac += '0';
    return 'R$ ' + inteira + T(l).decimal + frac;
  }
  // Lê um campo: vazio vale 0; só inteiros >= 0 (aceita separador de milhar do idioma, como 3.000 ou 3,000).
  function lerCampo(texto, campo, l) {
    var s = String(texto == null ? '' : texto).trim();
    if (s === '') return { valor: 0 };
    var sep = T(l).milhar === '.' ? '\\.' : ',';
    if (new RegExp('^\\d{1,3}(' + sep + '\\d{3})+$').test(s)) s = s.replace(new RegExp(sep, 'g'), '');
    if (!/^\d+$/.test(s)) return { erro: T(l).soInteiros };
    var v = Number(s);
    if (v > LIMITES[campo]) return { erro: T(l).limite(inteiro(LIMITES[campo], l), T(l).nomes[campo]) };
    return { valor: v };
  }
  // Arredonda 1/10.000 de real para centavos (metade para cima), só com inteiros.
  function emCentavos(unidades) { return Math.floor((unidades + 50) / 100); }
  function calcular(e) {
    var atendimentoMsgs = e.conversas * e.mensagens;
    var franquia = Math.min(atendimentoMsgs, TARIFAS.franquiaPorNumero * e.numeros);
    var cobradas = atendimentoMsgs - franquia;
    var r = {
      entradas: e, atendimentoMsgs: atendimentoMsgs, franquia: franquia, cobradas: cobradas,
      atendimento: emCentavos(cobradas * TARIFAS.atendimento),
      marketing: emCentavos(e.marketing * TARIFAS.marketing),
      utilidade: emCentavos(e.utilidade * TARIFAS.utilidade),
      autenticacao: emCentavos(e.autenticacao * TARIFAS.autenticacao)
    };
    r.total = r.atendimento + r.marketing + r.utilidade + r.autenticacao;
    r.anual = r.total * 12;
    return r;
  }
  function linha(rot, detalhe, valor) {
    return '<div class="nc-calc__linha"><dt>' + rot + (detalhe ? '<small>' + detalhe + '</small>' : '') + '</dt><dd>' + valor + '</dd></div>';
  }
  function renderResultado(r, l) {
    var e = r.entradas, t = T(l), n = function (x) { return inteiro(x, l); };
    return '<dl class="nc-calc__linhas">' +
      linha(t.atendMes, n(e.conversas) + t.conversas + n(e.mensagens) + t.mensagens, n(r.atendimentoMsgs)) +
      linha(t.franquia, n(TARIFAS.franquiaPorNumero) + t.porNumero + n(e.numeros) + (e.numeros === 1 ? t.numero : t.numeros), n(r.franquia)) +
      linha(t.cobradas, '', n(r.cobradas)) +
      linha(t.custo, n(r.cobradas) + ' × ' + tarifa(TARIFAS.atendimento, l), reais(r.atendimento, l)) +
      linha(t.marketing, n(e.marketing) + ' × ' + tarifa(TARIFAS.marketing, l), reais(r.marketing, l)) +
      linha(t.utilidade, n(e.utilidade) + ' × ' + tarifa(TARIFAS.utilidade, l), reais(r.utilidade, l)) +
      linha(t.autenticacao, n(e.autenticacao) + ' × ' + tarifa(TARIFAS.autenticacao, l), reais(r.autenticacao, l)) +
      '</dl>' +
      '<div class="nc-calc__total"><p class="nc-calc__total-rot">' + t.totalMes + '</p><p class="nc-calc__total-valor">' + reais(r.total, l) + '</p>' +
      '<p class="nc-calc__total-ano">' + t.totalAno + '<span>' + reais(r.anual, l) + '</span></p></div>' +
      '<p class="nc-calc__chat">' + t.chat + '</p>';
  }
  function resumo(r, l) {
    return T(l).totalMes + ': ' + reais(r.total, l) + '. ' + T(l).resumoAno + reais(r.anual, l) + '.';
  }
  // Resultado do exemplo do post (usado para pré-renderizar o HTML e nos testes).
  var EXEMPLO = { conversas: 3000, mensagens: 6, marketing: 2000, utilidade: 0, autenticacao: 0, numeros: 1 };

  var API = { TARIFAS: TARIFAS, LIMITES: LIMITES, CAMPOS: CAMPOS, EXEMPLO: EXEMPLO, TEXTOS: TEXTOS, inteiro: inteiro, reais: reais, tarifa: tarifa, lerCampo: lerCampo, emCentavos: emCentavos, calcular: calcular, renderResultado: renderResultado, resumo: resumo };

  // ----- Ligação com a página (só no navegador) -----
  function idiomaDe(raiz) {
    var el = raiz.closest ? raiz.closest('[lang]') : null;
    var l = String((el || document.documentElement).getAttribute('lang') || 'pt').slice(0, 2).toLowerCase();
    return TEXTOS[l] ? l : 'pt';
  }
  function iniciar(raiz) {
    var campo = {}, erro = {}, l = idiomaDe(raiz);
    for (var i = 0; i < CAMPOS.length; i++) {
      campo[CAMPOS[i]] = raiz.querySelector('[data-campo="' + CAMPOS[i] + '"]');
      erro[CAMPOS[i]] = raiz.querySelector('[data-erro="' + CAMPOS[i] + '"]');
      if (!campo[CAMPOS[i]]) return;
    }
    var saida = raiz.querySelector('[data-resultado]');
    var falado = raiz.querySelector('[data-resumo]'); // região aria-live, fora da tela
    if (!saida) return;
    var temporizador = null, textoFalado = '';
    function atualizar() {
      var valores = {}, temErro = false;
      CAMPOS.forEach(function (c) {
        var lido = lerCampo(campo[c].value, c, l);
        if (lido.erro) { temErro = true; campo[c].setAttribute('aria-invalid', 'true'); if (erro[c]) erro[c].textContent = lido.erro; }
        else { campo[c].removeAttribute('aria-invalid'); if (erro[c]) erro[c].textContent = ''; valores[c] = lido.valor; }
      });
      if (temErro) {
        saida.innerHTML = '<p class="nc-calc__erro-geral">' + T(l).corrija + '</p>';
        textoFalado = T(l).corrija;
      } else {
        var r = calcular(valores);
        saida.innerHTML = renderResultado(r, l);
        textoFalado = resumo(r, l);
      }
    }
    // O resultado visual muda a cada tecla; o leitor de tela recebe um resumo só depois de ~400 ms sem digitar.
    function falar() { clearTimeout(temporizador); if (falado) falado.textContent = textoFalado; }
    function aoDigitar() { atualizar(); clearTimeout(temporizador); temporizador = setTimeout(falar, 400); }
    CAMPOS.forEach(function (c) {
      campo[c].addEventListener('input', aoDigitar);
      campo[c].addEventListener('change', function () { atualizar(); falar(); }); // Enter ou sair do campo
      campo[c].addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { atualizar(); falar(); } });
    });
    atualizar();
  }
  function iniciarTodas() {
    var raizes = document.querySelectorAll('[data-nc-calc]');
    for (var i = 0; i < raizes.length; i++) iniciar(raizes[i]);
  }

  if (typeof module !== 'undefined' && module.exports) { module.exports = API; return; }
  global.NocodeiaCalc = API;
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciarTodas);
    else iniciarTodas();
  }
})(typeof window !== 'undefined' ? window : this);
