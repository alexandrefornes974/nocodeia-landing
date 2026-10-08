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

  var politica = cfg.politica
    ? ' <a href="' + cfg.politica + '">Pol\u00edtica de privacidade</a>'
    : '';

  function iniciar() {
    if (!w.silktideConsentManager || !w.silktideConsentManager.init) return;
    w.silktideConsentManager.init({
      namespace: cfg.namespace || 'site',
      consentTypes: [
        {
          id: 'essential',
          label: 'Essenciais',
          description: '<p>Necess\u00e1rios para o site funcionar: carrinho, login e seguran\u00e7a. N\u00e3o podem ser desligados.</p>',
          required: true
        },
        {
          id: 'analytics',
          label: 'Estat\u00edsticas',
          description: '<p>Contam visitas e mostram quais p\u00e1ginas e produtos interessam mais, para melhorarmos a loja. Os dados s\u00e3o agregados.</p>',
          onAccept: function () { marcar('a', true); },
          onReject: function () { marcar('a', false); }
        },
        {
          id: 'marketing',
          label: 'Marketing',
          description: '<p>Permitem mostrar an\u00fancios no Google, Facebook e Instagram de acordo com o que voc\u00ea viu aqui.</p>',
          onAccept: function () { marcar('m', true); },
          onReject: function () { marcar('m', false); }
        }
      ],
      text: {
        prompt: {
          description: '<p>Usamos cookies para o site funcionar, entender como ele \u00e9 usado e mostrar an\u00fancios relevantes. Voc\u00ea escolhe o que permitir.' + politica + '</p>',
          acceptAllButtonText: 'Aceitar todos',
          rejectNonEssentialButtonText: 'Recusar n\u00e3o essenciais',
          preferencesButtonText: 'Escolher',
          preferencesButtonAccessibleLabel: 'Escolher quais cookies permitir'
        },
        preferences: {
          title: 'Suas prefer\u00eancias de cookies',
          description: '<p>Ligue ou desligue cada tipo. Voc\u00ea pode mudar de ideia a qualquer momento pelo \u00edcone no canto da tela.</p>',
          saveButtonText: 'Salvar e fechar',
          creditLinkText: 'Aviso de cookies por Silktide'
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
