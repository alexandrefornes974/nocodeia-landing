/* Calculadora de mensagens do WhatsApp (API oficial) - Nocodeia.
   Um único arquivo usado pela página /calculadora-whatsapp/ e pelo bloco dentro do post.
   Sem biblioteca, sem backend, sem coletar dados: tudo roda no navegador.
   Como usar numa página: <div class="nc-calc" data-nc-calc> com campos [data-campo="..."],
   mensagens de erro [data-erro="..."], resultado [data-resultado] e resumo para leitor de tela [data-resumo].
   Também roda em Node (module.exports), para os testes automáticos. */
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
  var NOMES = { conversas: 'conversas', mensagens: 'mensagens por conversa', marketing: 'mensagens de marketing', utilidade: 'mensagens de utilidade', autenticacao: 'mensagens de autenticação', numeros: 'telefones' };
  var CAMPOS = ['conversas', 'mensagens', 'marketing', 'utilidade', 'autenticacao', 'numeros'];

  function inteiro(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function reais(centavos) {
    var c = String(centavos % 100); if (c.length < 2) c = '0' + c;
    return 'R$ ' + inteiro(Math.floor(centavos / 100)) + ',' + c;
  }
  function tarifa(t) { // "R$ 0,3217" a partir da unidade 1/10.000
    var s = String(t); while (s.length < 5) s = '0' + s;
    var inteira = s.slice(0, s.length - 4), frac = s.slice(-4).replace(/0+$/, '');
    while (frac.length < 3) frac += '0';
    return 'R$ ' + inteira + ',' + frac;
  }
  // Lê um campo: vazio vale 0; só inteiros >= 0 (aceita pontos de milhar, como 3.000).
  function lerCampo(texto, campo) {
    var s = String(texto == null ? '' : texto).trim();
    if (s === '') return { valor: 0 };
    if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    if (!/^\d+$/.test(s)) return { erro: 'Digite só números inteiros, sem vírgula, sinal ou letras.' };
    var v = Number(s);
    if (v > LIMITES[campo]) return { erro: 'O limite é ' + inteiro(LIMITES[campo]) + ' ' + NOMES[campo] + '. Digite um valor menor.' };
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
  function renderResultado(r) {
    var e = r.entradas;
    return '<dl class="nc-calc__linhas">' +
      linha('Mensagens de atendimento no mês', inteiro(e.conversas) + ' conversas × ' + inteiro(e.mensagens) + ' mensagens', inteiro(r.atendimentoMsgs)) +
      linha('Dentro da franquia (não cobradas)', inteiro(TARIFAS.franquiaPorNumero) + ' por número × ' + inteiro(e.numeros) + (e.numeros === 1 ? ' número' : ' números'), inteiro(r.franquia)) +
      linha('Mensagens de atendimento cobradas', '', inteiro(r.cobradas)) +
      linha('Custo de atendimento', inteiro(r.cobradas) + ' × ' + tarifa(TARIFAS.atendimento), reais(r.atendimento)) +
      linha('Marketing', inteiro(e.marketing) + ' × ' + tarifa(TARIFAS.marketing), reais(r.marketing)) +
      linha('Utilidade', inteiro(e.utilidade) + ' × ' + tarifa(TARIFAS.utilidade), reais(r.utilidade)) +
      linha('Autenticação', inteiro(e.autenticacao) + ' × ' + tarifa(TARIFAS.autenticacao), reais(r.autenticacao)) +
      '</dl>' +
      '<div class="nc-calc__total"><p class="nc-calc__total-rot">Total por mês na API oficial</p><p class="nc-calc__total-valor">' + reais(r.total) + '</p>' +
      '<p class="nc-calc__total-ano">Total por ano (× 12): <span>' + reais(r.anual) + '</span></p></div>' +
      '<p class="nc-calc__chat">No chat do site, a tarifa de mensagem do WhatsApp é <strong>R$ 0,00</strong> (o modelo de IA e a hospedagem existem nos dois canais).</p>';
  }
  function resumo(r) {
    return 'Total por mês na API oficial: ' + reais(r.total) + '. Total por ano: ' + reais(r.anual) + '.';
  }
  // Resultado do exemplo do post (usado para pré-renderizar o HTML e nos testes).
  var EXEMPLO = { conversas: 3000, mensagens: 6, marketing: 2000, utilidade: 0, autenticacao: 0, numeros: 1 };

  var API = { TARIFAS: TARIFAS, LIMITES: LIMITES, CAMPOS: CAMPOS, EXEMPLO: EXEMPLO, inteiro: inteiro, reais: reais, tarifa: tarifa, lerCampo: lerCampo, emCentavos: emCentavos, calcular: calcular, renderResultado: renderResultado, resumo: resumo };

  // ----- Ligação com a página (só no navegador) -----
  function iniciar(raiz) {
    var campo = {}, erro = {};
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
        var lido = lerCampo(campo[c].value, c);
        if (lido.erro) { temErro = true; campo[c].setAttribute('aria-invalid', 'true'); if (erro[c]) erro[c].textContent = lido.erro; }
        else { campo[c].removeAttribute('aria-invalid'); if (erro[c]) erro[c].textContent = ''; valores[c] = lido.valor; }
      });
      if (temErro) {
        saida.innerHTML = '<p class="nc-calc__erro-geral">Corrija os campos marcados para ver o cálculo.</p>';
        textoFalado = 'Corrija os campos marcados para ver o cálculo.';
      } else {
        var r = calcular(valores);
        saida.innerHTML = renderResultado(r);
        textoFalado = resumo(r);
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
