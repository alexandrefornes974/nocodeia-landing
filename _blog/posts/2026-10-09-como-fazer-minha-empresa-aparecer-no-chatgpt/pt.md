# Como fazer minha empresa aparecer no ChatGPT: guia para PME

Fazer sua empresa aparecer no ChatGPT depende de o site ser encontrado e lido pelos robôs de busca que alimentam a IA. O caminho: liberar o robô da OpenAI, publicar páginas que respondem às dúvidas reais do cliente e manter o básico do Google em dia. Ninguém garante a citação, mas dá para aumentar as chances.

Imagine a cena. Um cliente abre o ChatGPT e pergunta "qual a melhor oficina mecânica no meu bairro?". A resposta traz três nomes, e nenhum é o seu. Você atende bem e até tem site. Este guia mostra o que está ao seu alcance sem promessa mágica.

## Por que a sua empresa não aparece quando o cliente pergunta ao ChatGPT?

Porque o ChatGPT só consegue indicar o seu site se encontrar e ler o que está nele. Segundo a [central de ajuda da OpenAI](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt), em tradução livre, o ChatGPT "pode pesquisar na web automaticamente quando a sua pergunta se beneficia de informação atual", e as respostas com pesquisa "podem incluir citações", ou seja, links para as fontes.

Quem faz essa leitura são os robôs: programas que visitam sites e leem o conteúdo, como um leitor automático. Se o robô não entra no seu site, ou entra e não acha texto que responda à pergunta do cliente, a sua empresa fica fora da lista. Na nossa avaliação, o problema costuma estar no site, e não na qualidade do seu serviço.

## Como o ChatGPT e o Google escolhem os sites que entram na resposta?

Nenhuma das duas empresas publica a regra completa de escolha; elas publicam as condições para o site poder entrar. Antes da tabela: robots.txt é o arquivo do site que diz quais robôs podem entrar; indexar é o buscador guardar a página no catálogo dele, como o fichário de uma biblioteca.

| Ferramenta | O que a empresa dona diz | O que isso significa para o seu site |
|---|---|---|
| ChatGPT (OpenAI) | O robô OAI-SearchBot mostra sites nos resultados de busca do ChatGPT. Quem bloqueia esse robô não aparece nas respostas de busca, e a [OpenAI recomenda liberá-lo no robots.txt](https://developers.openai.com/api/docs/bots). | Confira se o seu site não bloqueia esse robô. |
| ChatGPT (OpenAI) | A busca do ChatGPT às vezes usa outros provedores de busca e reescreve a pergunta em buscas mais específicas. A Microsoft aparece na lista desses provedores. | Na nossa avaliação, estar bem cadastrado nos buscadores comuns também conta (a Microsoft é dona do Bing). |
| Google (Visões gerais criadas por IA e Modo IA) | "Não há requisitos adicionais". A página precisa estar indexada e qualificada para aparecer com trecho na Pesquisa, e "A indexação e a veiculação não são garantidas", diz o [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features?hl=pt-br). | O SEO de sempre é a porta de entrada da IA do Google. |

Visão geral criada por IA é o resumo que aparece no topo da página do Google; Modo IA é o modo de busca do Google em que a IA dá uma resposta mais completa, com links para os sites. SEO são os ajustes para o site aparecer no Google.

## O que um estudo com 1.954 sites muito acessados no Brasil mostrou?

Mostrou que até sites grandes ainda estão pouco preparados para agentes de IA. O estudo State of Crawl 2027, publicado em 29/09/2026 pela [Conversion](https://www.conversion.com.br/blog/state-of-crawl), agência de SEO, mediu o preparo dos sites para buscadores e para agentes de IA. Agente de IA é a IA que não só responde, mas tenta fazer tarefas pelo usuário, como comparar opções e reservar. Segundo a Conversion:

- Foram analisados 1.954 domínios de grande audiência no Brasil.
- 84,2% atingem o patamar técnico de SEO; só 0,5% atingem o patamar para agentes de IA. Diferença: 83,7 pontos percentuais (84,2 menos 0,5).
- "Preparado" é o site com nota igual ou maior que 70 em cada dimensão.
- A nota mediana (a do meio da fila) é 81,8 no técnico e 25,0 no preparo para agentes.
- 1.645 sites chegam a pelo menos 70 pontos no técnico; no preparo para agentes, só 10.
- llms.txt (arquivo de resumo do site para IAs, explicado abaixo) aparece em 12,1% dos sites; política de IA declarada (aviso do site sobre como IAs podem usar o conteúdo) em 18,8%; e texto legível sem JavaScript (o código que monta partes da página no navegador) em 69,9%.

Três cuidados ao ler esses números. A amostra é de sites de alto tráfego, escolhidos por estimativa de visitas da Semrush (ferramenta de SEO) de julho de 2026, e não de pequenas empresas. O estudo mede sinais técnicos que ajudam agentes a navegar e agir no site, não se a empresa é citada nas respostas do ChatGPT. E a própria Conversion escreve: "Isso não prova que 99,5% dos sites sejam invisíveis à IA".

Na nossa avaliação, a lição para a PME é animadora: se até os sites grandes ainda não se prepararam para agentes de IA, a pequena empresa que fizer o básico bem feito não está atrasada.

## O que deixa o site da sua empresa pronto para ser lido pela IA?

Um site pronto para a IA é, antes de tudo, um site que o robô consegue abrir e entender. Confira:

1. **Robots.txt sem bloquear o OAI-SearchBot nem o robô do Google.** A OpenAI recomenda liberar o robô dela, e o Google pede para conferir o robots.txt e a hospedagem.
2. **Site cadastrado no Google Search Console e no Bing Webmaster Tools.** São painéis gratuitos para avisar o buscador que o site existe e ver se as páginas foram indexadas. O Bing é recomendação nossa, pela ligação com a Microsoft.
3. **Texto importante escrito na página, não só em imagem.** O Google recomenda "Disponibilizar conteúdo importante em forma de texto", e o estudo chama de "legível sem JavaScript" o site que entrega ao menos 80% das palavras já no código enviado pelo servidor.
4. **Cada página com título e descrição.** São dois dos critérios técnicos do estudo.
5. **Sitemap publicado.** É o mapa com a lista de páginas do site, outro critério do estudo.
6. **Páginas que respondem em texto o que o cliente pergunta:** o que você faz, para quem, onde atende, como contratar e, quando der, faixa de preço. Na nossa avaliação, a IA só pode citar o que está escrito.
7. **llms.txt, se quiser.** É um arquivo de texto com um resumo do site para IAs. É opcional: o Google diz que "Não é necessário criar novos arquivos legíveis por máquina, arquivos de texto de IA ou marcação" para os recursos de IA dele, e a Conversion avisa que a presença do arquivo "não garante" que sistemas externos o consultem.

E os dados estruturados, etiquetas escondidas no código que dizem "isto é o nome da empresa, isto é o serviço"? O Google afirma que "não é obrigatório adicionar dados estruturados especiais". Trate como boa prática de SEO, não como requisito da IA. Na nossa avaliação, não existe arquivo mágico.

## Como a Nocodeia preparou o próprio site para o Google e para a IA?

Aplicamos no nosso site o mesmo checklist. O que está no ar:

1. **Robots.txt aberto**, que libera todos os robôs e aponta o sitemap.
2. **Sitemap** com as páginas e os posts.
3. **llms.txt** com serviços, fundador e projetos entregues.
4. **Dados estruturados:** empresa, pessoa, site e perguntas frequentes na página inicial; artigo, trilha de navegação e perguntas frequentes em cada post.
5. **Páginas estáticas**, com o texto já no código, sem depender de JavaScript.
6. **Google Search Console e Bing Webmaster Tools** configurados em 03/10/2026, com o sitemap enviado.
7. **Blog semanal em português, inglês e espanhol**, escrito com agentes de IA e aprovado por uma pessoa antes de ir ao ar.

Ainda é cedo para medir quantas citações isso traz; o que fizemos foi tirar os obstáculos do caminho do robô. É o trabalho do serviço [Site que o Google e a IA recomendam](/#servicos): reformulação do site, SEO, GEO (ajustes para o site ser lido e citado por IAs como ChatGPT e Gemini) e blog automatizado, em 2 a 4 semanas, mais o blog mensal. Veja também os [projetos que já saíram do papel](/#projetos).

## Dá para pagar para aparecer no ChatGPT?

Existe anúncio no ChatGPT, mas anúncio não é ser citado na resposta. Segundo o [Canaltech](https://canaltech.com.br/inteligencia-artificial/chatgpt-comeca-a-exibir-mais-anuncios-agora-no-gerador-de-imagens/), em 05/10/2026, anúncios convencionais podem aparecer no Brasil desde agosto para os planos gratuito e Go; assinantes de Plus, Pro, Business, Enterprise e Edu não recebem publicidade.

O anúncio fica separado da resposta. Segundo a OpenAI, citada pelo Canaltech, "as respostas geradas pelo ChatGPT funcionam de forma independente do sistema de publicidade". O anúncio com imagem começa a ser testado em outubro nos Estados Unidos, sem data para o Brasil.

## O que ninguém pode garantir sobre aparecer no ChatGPT?

Ninguém controla a resposta da IA. O Google escreve que "A indexação e a veiculação não são garantidas". A OpenAI informa que, depois de mudar o robots.txt, os sistemas dela podem levar cerca de 24 horas para se ajustar. Esse é o prazo de leitura do arquivo, não um prazo para aparecer nas respostas.

Na nossa avaliação, desconfie de quem promete "primeiro lugar no ChatGPT". Dá para tirar os obstáculos, publicar respostas claras e acompanhar. Veja [como funciona o diagnóstico de 45 minutos](/#como). Se o seu interesse é usar IA dentro da empresa, leia [IA para pequenas empresas: por onde começar](/blog/ia-para-pequenas-empresas/).

## Perguntas frequentes

### O que é SEO para IA?

São os ajustes para o site ser lido e citado por IAs como ChatGPT e Gemini, também chamados de GEO.

### Qual a diferença entre SEO e GEO?

SEO cuida de o site aparecer no Google; GEO cuida de o site ser citado na resposta da IA. O GEO depende do SEO: o Google afirma que "As práticas recomendadas de SEO continuam sendo relevantes" para os recursos de IA dele.

### De onde o ChatGPT tira as informações?

Do que aprendeu no treinamento e, quando a pergunta pede informação atual, de pesquisa na web, que pode trazer links para as fontes. Segundo a OpenAI, o robô GPTBot coleta conteúdo que pode ser usado no treinamento, e o OAI-SearchBot serve à busca.

### O ChatGPT tem anúncio?

Tem. Segundo o Canaltech, no Brasil desde agosto, nos planos gratuito e Go, separados da resposta.

### O que é llms.txt?

É um arquivo de texto com um resumo do site para IAs. É opcional: o Google não exige, e 12,1% dos sites do estudo da Conversion têm um.

## Por onde começar?

No diagnóstico gratuito de 45 minutos, a gente olha o seu site com você e mostra o que falta para os robôs lerem e para ele responder às perguntas dos seus clientes. Você sai com preço e prazo fechados. [Marque seu diagnóstico grátis](/#vaga).
