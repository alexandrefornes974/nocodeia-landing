/*!
 * Aviso de cookies Nocodeia v1 — monta o aviso (Silktide Consent Manager, licença MIT)
 * com textos em português e repassa a escolha do visitante ao Google e à Meta.
 * Depende do trecho inicial (snippet-head.html), que precisa estar no topo do <head>.
 */
(function (w, d) {
  var cfg = w.NOCODEIA_AVISO || {};
  var me = d.currentScript && d.currentScript.src;
  var base = me ? me.replace(/[^/]*$/, '') : '';

  var css = d.createElement('link');
  css.rel = 'stylesheet';
  css.href = base + 'silktide-consent-manager.css';
  d.head.appendChild(css);

  var cor = cfg.cor || '#0047FF';
  var estilo = d.createElement('style');
  estilo.textContent =
    '#stcm-wrapper{--fontFamily:' + (cfg.fonte || 'inherit') + ';--primaryColor:' + cor +
    ';--backgroundColor:#ffffff;--textColor:' + (cfg.corTexto || '#1a1a1a') +
    ';--iconColor:#ffffff;--iconBackgroundColor:' + cor + '}' +
    '#stcm-wrapper .stcm-button-primary{color:#fff}';
  d.head.appendChild(estilo);

  // A escolha chega por tipo (um callback por categoria); junta tudo e envia uma vez s\u00f3.
  var escolha = { a: null, m: null }, agendado = false;
  function marcar(tipo, aceito) {
    escolha[tipo] = aceito;
    if (agendado) return;
    agendado = true;
    setTimeout(function () {
      agendado = false;
      if (w.ncConsent) w.ncConsent.atualizar(!!escolha.a, !!escolha.m);
    }, 0);
  }

  // Textos padr\u00e3o (loja, portugu\u00eas). Cada site pode trocar qualquer um em NOCODEIA_AVISO.textos;
  // NOCODEIA_AVISO.semMarketing = true esconde a categoria Marketing (site sem pixel de an\u00fancio).
  var t = {
    essenciaisRotulo: 'Essenciais',
    essenciais: 'Necess\u00e1rios para o site funcionar: carrinho, login e seguran\u00e7a. N\u00e3o podem ser desligados.',
    estatisticasRotulo: 'Estat\u00edsticas',
    estatisticas: 'Contam visitas e mostram quais p\u00e1ginas e produtos interessam mais, para melhorarmos a loja. Os dados s\u00e3o agregados.',
    marketingRotulo: 'Marketing',
    marketing: 'Permitem mostrar an\u00fancios no Google, Facebook e Instagram de acordo com o que voc\u00ea viu aqui.',
    aviso: 'Usamos cookies para o site funcionar, entender como ele \u00e9 usado e mostrar an\u00fancios relevantes. Voc\u00ea escolhe o que permitir.',
    politica: 'Pol\u00edtica de privacidade',
    aceitar: 'Aceitar todos',
    recusar: 'Recusar n\u00e3o essenciais',
    escolher: 'Escolher',
    escolherAria: 'Escolher quais cookies permitir',
    preferenciasTitulo: 'Suas prefer\u00eancias de cookies',
    preferencias: 'Ligue ou desligue cada tipo. Voc\u00ea pode mudar de ideia a qualquer momento pelo \u00edcone no canto da tela.',
    salvar: 'Salvar e fechar',
    credito: 'Aviso de cookies por Silktide'
  };
  var outros = cfg.textos || {};
  for (var k in outros) if (Object.prototype.hasOwnProperty.call(outros, k)) t[k] = outros[k];

  var politica = cfg.politica
    ? ' <a href="' + cfg.politica + '">' + t.politica + '</a>'
    : '';

  function iniciar() {
    if (!w.silktideConsentManager || !w.silktideConsentManager.init) return;
    var tipos = [
      {
        id: 'essential',
        label: t.essenciaisRotulo,
        description: '<p>' + t.essenciais + '</p>',
        required: true
      },
      {
        id: 'analytics',
        label: t.estatisticasRotulo,
        description: '<p>' + t.estatisticas + '</p>',
        onAccept: function () { marcar('a', true); },
        onReject: function () { marcar('a', false); }
      }
    ];
    if (!cfg.semMarketing) tipos.push({
      id: 'marketing',
      label: t.marketingRotulo,
      description: '<p>' + t.marketing + '</p>',
      onAccept: function () { marcar('m', true); },
      onReject: function () { marcar('m', false); }
    });
    w.silktideConsentManager.init({
      namespace: cfg.namespace || 'site',
      consentTypes: tipos,
      text: {
        prompt: {
          description: '<p>' + t.aviso + politica + '</p>',
          acceptAllButtonText: t.aceitar,
          rejectNonEssentialButtonText: t.recusar,
          preferencesButtonText: t.escolher,
          preferencesButtonAccessibleLabel: t.escolherAria
        },
        preferences: {
          title: t.preferenciasTitulo,
          description: '<p>' + t.preferencias + '</p>',
          saveButtonText: t.salvar,
          creditLinkText: t.credito
        }
      },
      prompt: { position: cfg.posicao || 'bottomLeft' },
      icon: { position: 'bottomLeft' },
      backdrop: { show: false }
    });
  }

  var js = d.createElement('script');
  js.src = base + 'silktide-consent-manager.js';
  js.charset = 'utf-8';
  js.onload = function () {
    if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
  };
  d.head.appendChild(js);
})(window, document);
