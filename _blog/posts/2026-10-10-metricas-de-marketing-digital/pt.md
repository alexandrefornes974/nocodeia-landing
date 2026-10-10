# Sua empresa usa métricas de marketing digital no site?

Métricas de marketing digital são os números que mostram se o dinheiro investido em site, redes sociais e anúncios volta como cliente. Muita empresa quer retorno, mas não mede o que volta. Para uma pequena empresa, poucos números bastam: quantas pessoas viram a marca no Google, quantas visitaram o site, quantas chamaram e de onde vieram.

Você paga o site, patrocina post no Instagram, talvez anuncie no Google. No fim do mês, alguém pergunta: "quantos clientes isso trouxe?". Se a resposta é "acho que alguns", este guia é para você. Ele mostra quais números olhar, como a ferramenta gratuita do Google descobre de onde vem cada cliente e, com a mesma honestidade, o que fica de fora da conta.

## Por que as empresas querem retorno, mas não medem o que volta?

Porque cobrar retorno é fácil; montar a medição dá trabalho e fica para depois. O relatório de tendências 2025 da [LocaliQ](https://localiq.com/blog/small-business-marketing-trends-report/), empresa de marketing, ouviu mais de 730 donos de pequenas empresas e profissionais de marketing, 74% deles nos Estados Unidos ou no Canadá. Não é um retrato do Brasil, mas mostra a contradição com clareza.

Em tradução livre: o retorno sobre o investimento foi a principal métrica, com 60% dizendo que ela é "muito importante". Ao mesmo tempo, "quase metade (47%)" usa ferramentas de análise de site, como o Google Analytics. Na nossa leitura, o retorno é a métrica mais valorizada, e menos da metade usa a ferramenta que ajuda a medi-lo no site.

No Brasil, o sinal vai na mesma direção, em outra pesquisa. O [Indicador de Maturidade Digital 2025, do Sebrae e da ABDI](https://sebraepr.com.br/impulsiona/pequenos-negocios-avancam-em-maturidade-digital-em-2025/), avaliou mais de 7 mil micro e pequenas empresas entre maio e junho de 2025. O indicador, numa escala de 0 a 80 pontos, subiu de 35 para 37. Segundo o Sebrae, "a inovação colaborativa e o uso de dados ainda são os principais desafios".

Na nossa avaliação, quem não mede não sabe qual canal dá retorno. E acaba cortando o que funcionava ou insistindo no que não traz ninguém.

## Por que tudo precisa apontar para o site da sua empresa?

Porque o site é o lugar onde dá para seguir o caminho do cliente do começo ao fim. A regra que usamos na Nocodeia é esta: tudo converge para o site, porque é lá que conseguimos medir o caminho completo do cliente. O que acontece nas redes e nas IAs medimos em cada plataforma e juntamos num painel só.

Na prática, o post do Instagram, o perfil do LinkedIn e a página do Facebook levam a pessoa para o site. Lá ela lê, compara e clica no WhatsApp ou envia o formulário. Quase todo passo desse caminho pode ser contado.

Muitas empresas fazem o contrário. Segundo a pesquisa [TIC Empresas 2024, do Cetic.br](https://cetic.br/media/docs/publicacoes/2/20250512121759/tic_empresas_2024_resumo_executivo.pdf), 53% das empresas brasileiras com mais de dez pessoas ocupadas tinham site em 2024, proporção que era de 54% em 2019. Para essas empresas, as redes sociais são a principal forma de presença online. A coleta foi feita entre março e novembro de 2024.

Na nossa avaliação, perfil em rede social é terreno alugado: a plataforma decide o que você vê dos seus próprios números. O site é o terreno próprio.

## Quais métricas de marketing digital uma pequena empresa deve acompanhar?

Cinco números por mês resolvem a maior parte das decisões de uma pequena empresa. É o relatório que usamos no método da Nocodeia, com no máximo cinco linhas:

| Número | O que ele responde | Onde ver |
|---|---|---|
| Impressões no Google | Quantas vezes o site apareceu na busca | Google Search Console |
| Visitas | Quantas pessoas entraram no site | GA4 |
| Contatos ou vendas | Quantas clicaram no WhatsApp, enviaram o formulário ou compraram | GA4 (eventos principais) |
| De onde vieram | Google, Instagram, IA, link direto | GA4 (canais) |
| Uma recomendação | O que fazer no mês seguinte | Quem analisa os números |

Dois termos da tabela. Google Search Console é um painel gratuito do Google que mostra, entre outras coisas, quantas vezes o seu site apareceu nos resultados da pesquisa. GA4 (Google Analytics 4) é a ferramenta gratuita do Google que conta as visitas do site e o que as pessoas fazem nele.

Repare no que ficou de fora: curtidas e seguidores. São as chamadas métricas de vaidade, números que agradam o ego mas não pagam a conta. Elas só entram no relatório quando levam alguém ao contato.

## Como o GA4 descobre de onde veio cada cliente?

Com três peças: a etiqueta no link, o registro das ações e a separação por canal. A separação o GA4 faz sozinho, pelo endereço de onde a pessoa veio; a etiqueta e o registro das ações deixam essa conta mais precisa e mostram quem virou contato.

1. **Etiqueta no link (UTM).** UTM é um pedaço de texto colado no fim do link que diz de onde a visita veio. Segundo a ajuda do Google Analytics sobre URLs de campanha, quando alguém clica no link etiquetado, os dados da etiqueta "são enviados ao Google Analytics" e aparecem no relatório de aquisição de tráfego. O Google pede para usar sempre três etiquetas: origem (utm_source), mídia (utm_medium) e campanha (utm_campaign).

   Na prática, o link da bio do Instagram vira algo como `seusite.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=bio`.
2. **Registro das ações (eventos).** Evento é cada ação que o GA4 registra, como clicar no botão do WhatsApp ou enviar o formulário. A ação que vale dinheiro para você é marcada como evento principal, o que muita gente chama de conversão. É esse número que responde "quantos clientes o site trouxe".
3. **Separação por canal.** O GA4 agrupa as visitas em canais, como pesquisa orgânica, redes sociais e direto. Segundo a [ajuda do Google Analytics sobre grupos de canais](https://support.google.com/analytics/answer/9756891?hl=pt-BR), existe um canal chamado "Assistente de IA", para quem chega de fontes como ChatGPT, Gemini, Deepseek, Copilot ou Grok. Quem chega pelas Visões gerais criadas por IA e pelo Modo IA do Google (as respostas geradas por IA dentro da busca do Google) entra em "Pesquisa orgânica".

## O que costuma dar errado quando a empresa configura sozinha?

Dá para começar sozinho: Search Console e Google Analytics são gratuitos. Instalar é a parte fácil; configurar para o número ser confiável é outra história.

Se a ferramenta é instalada sem o ajuste de consentimento, ela grava cookies antes de o visitante responder ao aviso, o que, na nossa avaliação, pode esbarrar na LGPD. A mesma ferramenta instalada duas vezes pode contar as visitas em dobro. E, como o próprio Google avisa, um link etiquetado como "Meta" e outro como "meta" viram duas origens diferentes no relatório.

Nada disso dá erro na tela: o painel continua mostrando números, só que errados. Passamos por vários desses pontos ao configurar o próprio site da Nocodeia: até o computador da equipe bloqueava o Google Analytics, e os testes feitos dali mostravam zero visitas. Na nossa avaliação, decidir com dados errados é pior do que ficar sem dados.

## O que é o método MTAM da Nocodeia?

MTAM é o método da Nocodeia para medir o marketing de uma pequena empresa em quatro etapas que se repetem todo mês. Cada letra é uma etapa:

| Etapa | O que fazemos | Pergunta que responde |
|---|---|---|
| **M**edir o ponto de partida | Levantamos o "mês zero": quantos veem, visitam e chamam hoje | Onde estamos? |
| **T**rocar as etiquetas | Colocamos UTM nos links das redes, transformamos WhatsApp e formulário em eventos e conferimos o canal de IA no GA4 | De onde vem cada contato? |
| **A**brir portas | Fazemos as redes, o Google e as IAs apontarem para o site, com SEO (ajustes para aparecer no Google) e GEO (ajustes para ser lido e citado por IAs) | Por onde mais gente pode chegar? |
| **M**ensurar e decidir | Entregamos o relatório mensal de cinco números e uma recomendação: que tipo de post fazer, o que ajustar no SEO ou no GEO | O que fazer no próximo mês? |

Depois da última etapa, o ciclo volta para o começo: o resultado do mês vira o novo ponto de partida. Para a parte de ser citado pelas IAs, veja o guia [como fazer minha empresa aparecer no ChatGPT](/blog/como-fazer-minha-empresa-aparecer-no-chatgpt/).

Duas regras práticas acompanham o método. Seguimos um checklist de analytics em cada site, para não esquecer nenhuma etiqueta. E as contas do GA4 e do Search Console ficam no Google do cliente, não no nosso: se um dia você trocar de fornecedor, o histórico continua seu. A recomendação do mês sai da análise dos números; a ferramenta que vai agilizar essa parte ainda está em construção.

## Como a Nocodeia mede o próprio site?

Com as mesmas peças que recomendamos. Desde 09/10/2026, o site da Nocodeia passou a medir visitas e contatos do formulário com o GA4, um aviso de cookies e um evento de lead (o registro de cada pessoa que pede contato). O Google Search Console e o Bing Webmaster Tools, painel equivalente do buscador da Microsoft, estão configurados desde 03/10/2026.

Ainda é cedo para mostrar resultado, e preferimos não inventar. Nos testes de 09/10/2026, quando o visitante aceitava os cookies, o envio do formulário aparecia no GA4 junto com o canal de onde ele veio.

## O que nenhuma ferramenta mede?

Os números mostram tendência, não a conta exata de cada cliente. Os pontos cegos:

- **Quem recusa cookies.** Cookie é um arquivinho que o site guarda no navegador para reconhecer a visita. Segundo a [ajuda do Google Analytics sobre o modo de consentimento](https://support.google.com/analytics/answer/9976101?hl=pt-BR), depende de como o aviso de cookies foi instalado. Num jeito, o site manda ao Google só um sinal mínimo, sem cookie, e o GA4 preenche as lacunas com estimativas. No outro, a ferramenta fica bloqueada e "nenhum dado é coletado".
- **Link repassado no WhatsApp.** Para o Google, "Direto" é quem chega "por um link salvo ou o URL". Na nossa avaliação, link copiado e enviado numa conversa costuma cair aí, porque chega sem etiqueta.
- **Quem vê a marca numa resposta de IA e não clica.** Sem clique, não há visita, e nada aparece no site.
- **Alcance nas redes.** Quantas pessoas viram o post ficam nos painéis do Instagram, do Facebook e do LinkedIn, não no GA4.
- **Venda fechada no WhatsApp.** O site registra o clique no botão; a venda acontece na conversa, fora dele.
- **Bloqueadores.** Bloqueadores de anúncio podem impedir parte da contagem, como aconteceu no computador da nossa equipe.

Por isso juntamos os números de cada plataforma num painel só e olhamos a direção da curva, mês a mês.

## Perguntas frequentes

### Google Analytics é gratuito?

Sim. O Google diz, na página do Analytics, que oferece as ferramentas sem custo para entender o caminho do cliente. Existe uma versão paga, o Analytics 360, pensada para grandes empresas.

### Como saber quantas pessoas visitam meu site?

Instale o GA4 no site e veja o relatório de visitas. Para saber quantas viraram contato, marque o clique no WhatsApp e o envio do formulário como eventos principais.

### O que são métricas de vaidade?

São números que agradam mas não mostram venda, como curtidas e seguidores. Só valem quando você consegue ligar esses números a contatos ou vendas.

### O que é UTM?

É uma etiqueta colada no fim do link que diz ao GA4 de onde a visita veio, como "instagram" ou "e-mail". O Google recomenda usar sempre origem, mídia e campanha.

## Por onde começar?

Comece pelo mês zero: saber quantas pessoas veem, visitam e chamam a sua empresa hoje. Se quiser números confiáveis desde o primeiro mês, sem descobrir os erros depois, a Nocodeia pode ajudar. No [diagnóstico de 45 minutos](/#como), olhamos isso com você e mostramos o que falta para o site contar de onde vem cada contato. É o trabalho do serviço [Site que o Google e a IA recomendam](/#servicos), com relatório mensal. [Marque seu diagnóstico grátis](/#vaga).
