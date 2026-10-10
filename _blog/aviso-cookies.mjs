// Aviso de cookies Nocodeia (kit em /kit/aviso-cookies/v1/, versão oficial em
// OneDrive/Agencia Automatizada/motor/analytics/aviso-cookies). Tem que ser o PRIMEIRO item do <head>.
// Também é inserido nas páginas fixas (index PT/EN/ES e privacidade) por este mesmo texto.
import { readFileSync } from 'node:fs';

const TEXTOS = {
  pt: {
    essenciais: 'Necessários para o site funcionar e para lembrar a sua escolha de cookies. Não podem ser desligados.',
    estatisticas: 'Contam visitas, mostram quais páginas interessam mais e medem a velocidade e os erros do site, para melhorarmos o site.',
    aviso: 'Usamos cookies para o site funcionar e, se você permitir, para entender como ele é usado e medir anúncios.',
    marketing: 'Permitem medir e personalizar anúncios no Meta (Instagram/Facebook) e no LinkedIn.',
  },
  en: {
    essenciaisRotulo: 'Essential',
    essenciais: 'Needed for the site to work and to remember your cookie choice. They cannot be turned off.',
    estatisticasRotulo: 'Statistics',
    estatisticas: 'Count visits, show which pages interest people most and measure the site speed and errors, so we can improve the site.',
    aviso: 'We use cookies to make the site work and, if you allow it, to understand how it is used and measure ads.',
    marketing: 'Allow us to measure and personalize ads on Meta (Instagram/Facebook) and LinkedIn.',
    politica: 'Privacy policy',
    aceitar: 'Accept all',
    recusar: 'Reject non-essential',
    escolher: 'Choose',
    escolherAria: 'Choose which cookies to allow',
    preferenciasTitulo: 'Your cookie preferences',
    preferencias: 'Turn each type on or off. You can change your mind at any time using the icon in the corner of the screen.',
    salvar: 'Save and close',
    credito: 'Cookie banner by Silktide',
  },
  es: {
    essenciaisRotulo: 'Esenciales',
    essenciais: 'Necesarias para que el sitio funcione y para recordar tu elección de cookies. No se pueden desactivar.',
    estatisticasRotulo: 'Estadísticas',
    estatisticas: 'Cuentan visitas, muestran qué páginas interesan más y miden la velocidad y los errores del sitio, para mejorarlo.',
    aviso: 'Usamos cookies para que el sitio funcione y, si lo permites, para entender cómo se usa y medir anuncios.',
    marketing: 'Permiten medir y personalizar anuncios en Meta (Instagram/Facebook) y LinkedIn.',
    politica: 'Política de privacidad',
    aceitar: 'Aceptar todas',
    recusar: 'Rechazar no esenciales',
    escolher: 'Elegir',
    escolherAria: 'Elegir qué cookies permitir',
    preferenciasTitulo: 'Tus preferencias de cookies',
    preferencias: 'Activa o desactiva cada tipo. Puedes cambiar de opinión en cualquier momento con el icono en la esquina de la pantalla.',
    salvar: 'Guardar y cerrar',
    credito: 'Aviso de cookies por Silktide',
  },
};

const POLITICA = { pt: '/privacidade/#site', en: '/en/privacy/#site', es: '/es/privacidad/#site' };

// Parte fixa do snippet oficial (consentimento padrão do Google antes de qualquer tag).
const SNIPPET = readFileSync(new URL('../kit/aviso-cookies/v1/snippet-head.html', import.meta.url), 'utf8');

export function avisoCookies(l) {
  const cfg = { namespace: 'nocodeia', politica: POLITICA[l], cor: '#0047FF', corTexto: '#1a1a1a', fonte: 'inherit', semMarketing: false, textos: TEXTOS[l] };
  const ini = SNIPPET.indexOf('window.NOCODEIA_AVISO = {');
  const fim = SNIPPET.indexOf('};', ini) + 2;
  return SNIPPET.slice(0, ini) + 'window.NOCODEIA_AVISO = ' + JSON.stringify(cfg) + ';' + SNIPPET.slice(fim).replace('https://nocodeiaww.com/kit/', '/kit/').trimEnd();
}
