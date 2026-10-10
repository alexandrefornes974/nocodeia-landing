# Cómo hacer que mi empresa aparezca en ChatGPT: guía pyme

Hacer que tu empresa aparezca en ChatGPT depende de que tu sitio web sea encontrado y leído por los robots de búsqueda que alimentan a la IA. El camino: permitir el robot de OpenAI, publicar páginas que respondan las dudas reales del cliente y mantener al día lo básico de Google. Nadie garantiza la cita, pero puedes aumentar tus probabilidades.

Imagina la escena. Un cliente abre ChatGPT y pregunta "¿cuál es el mejor taller mecánico cerca de mí?". La respuesta trae tres nombres, y ninguno es el tuyo. Atiendes bien y hasta tienes sitio web. Esta guía muestra lo que está a tu alcance, sin promesas mágicas.

## ¿Por qué tu empresa no aparece cuando el cliente le pregunta a ChatGPT?

Porque ChatGPT solo puede indicar tu sitio si encuentra y lee lo que hay en él. Según el [centro de ayuda de OpenAI](https://help.openai.com/en/articles/9237897-searching-the-web-with-chatgpt) (en inglés), en traducción libre, ChatGPT "puede buscar en la web automáticamente cuando tu pregunta se beneficia de información actual", y las respuestas con búsqueda "pueden incluir citas", es decir, enlaces a las fuentes.

Esa lectura la hacen los robots: programas que visitan sitios web y leen su contenido, como un lector automático. Si el robot no entra a tu sitio, o entra y no encuentra texto que responda la pregunta del cliente, tu empresa queda fuera de la lista. En nuestra evaluación, el problema suele estar en el sitio, y no en la calidad de tu servicio.

## ¿Cómo eligen ChatGPT y Google los sitios que entran en la respuesta?

Ninguna de las dos empresas publica la regla completa de selección; publican las condiciones para que el sitio pueda entrar. Antes de la tabla: robots.txt es el archivo del sitio que dice qué robots pueden entrar; indexar es que el buscador guarde la página en su catálogo, como el fichero de una biblioteca.

| Herramienta | Lo que dice la empresa dueña | Lo que significa para tu sitio |
|---|---|---|
| ChatGPT (OpenAI) | El robot OAI-SearchBot muestra sitios en los resultados de búsqueda de ChatGPT. Quien bloquea ese robot no aparece en las respuestas de búsqueda, y [OpenAI recomienda permitirlo en el robots.txt](https://developers.openai.com/api/docs/bots) (en inglés). | Revisa que tu sitio no bloquee ese robot. |
| ChatGPT (OpenAI) | La búsqueda de ChatGPT a veces usa otros proveedores de búsqueda y reescribe la pregunta en búsquedas más específicas. Microsoft aparece en la lista de esos proveedores. | En nuestra evaluación, estar bien registrado en los buscadores comunes también cuenta (Microsoft es dueña de Bing). |
| Google (Visión general creada por IA y Modo IA) | "No hay requisitos adicionales". La página "debe estar indexada y ser apta para mostrarse en la Búsqueda de Google con un resumen", y "No se garantiza la indexación ni la publicación", dice [Google Search Central](https://developers.google.com/search/docs/appearance/ai-features?hl=es-419). | El SEO de siempre es la puerta de entrada a la IA de Google. |

La Visión general creada por IA es el resumen que aparece arriba en la página de resultados de Google; el Modo IA es el modo de búsqueda de Google en el que la IA da una respuesta más completa, con enlaces a los sitios. SEO son los ajustes para que el sitio aparezca en Google.

## ¿Qué mostró un estudio con 1954 sitios muy visitados en Brasil?

Mostró que incluso los sitios grandes todavía están poco preparados para agentes de IA. El estudio State of Crawl 2027, publicado el 29 de septiembre de 2026 por [Conversion](https://www.conversion.com.br/blog/state-of-crawl) (en portugués), una agencia brasileña de SEO, midió qué tan preparados están esos sitios para los buscadores y para los agentes de IA. Un agente de IA es la IA que no solo responde, sino que intenta hacer tareas por el usuario, como comparar opciones y reservar. Según Conversion:

- Se analizaron 1954 dominios de gran audiencia en Brasil.
- El 84.2% alcanza el nivel técnico de SEO; solo el 0.5% alcanza el nivel para agentes de IA. Diferencia: 83.7 puntos porcentuales (84.2 menos 0.5).
- "Preparado" es el sitio con una nota igual o mayor a 70 en cada dimensión.
- La nota mediana (la del medio de la fila) es 81.8 en lo técnico y 25.0 en la preparación para agentes.
- 1645 sitios llegan a por lo menos 70 puntos en lo técnico; en la preparación para agentes, solo 10.
- llms.txt (archivo con un resumen del sitio para IAs, explicado más abajo) aparece en el 12.1% de los sitios; una política de IA declarada (aviso del sitio sobre cómo las IAs pueden usar el contenido), en el 18.8%; y texto legible sin JavaScript (el código que arma partes de la página en el navegador), en el 69.9%.

Tres cuidados con estos números. La muestra es de sitios de alto tráfico, elegidos por estimación de visitas de Semrush (herramienta de SEO) de julio de 2026, no de pequeñas empresas. El estudio mide señales técnicas que ayudan a agentes a navegar y actuar en el sitio, no si la empresa es citada en las respuestas de ChatGPT. Y la propia Conversion escribe, en traducción libre: "Esto no prueba que el 99.5% de los sitios sea invisible para la IA".

En nuestra evaluación, la lección para la pyme es alentadora: si incluso los sitios grandes todavía no se prepararon para agentes de IA, la pequeña empresa que haga bien lo básico no está atrasada.

## ¿Qué deja el sitio de tu empresa listo para que la IA lo lea?

Un sitio listo para la IA es, antes que nada, un sitio que el robot puede abrir y entender. Revisa:

1. **Robots.txt sin bloquear a OAI-SearchBot ni al robot de Google.** OpenAI recomienda permitir su robot, y Google pide revisar el robots.txt y el hosting.
2. **Sitio registrado en Google Search Console y en Bing Webmaster Tools.** Son paneles gratuitos para avisarle al buscador que el sitio existe y ver si las páginas fueron indexadas. Bing es recomendación nuestra, por la relación con Microsoft.
3. **Texto importante escrito en la página, no solo en imágenes.** Google recomienda "Asegurarse de que el contenido importante esté disponible en forma de texto", y el estudio considera legible sin JavaScript el sitio que entrega al menos el 80% de las palabras ya en el código que envía el servidor.
4. **Cada página con título y descripción.** Son dos de los criterios técnicos del estudio.
5. **Sitemap publicado.** Es el mapa con la lista de páginas del sitio, otro criterio del estudio.
6. **Páginas que respondan por escrito lo que pregunta el cliente:** qué haces, para quién, dónde atiendes, cómo contratarte y, cuando se pueda, un rango de precios. En nuestra evaluación, la IA solo puede citar lo que está escrito.
7. **llms.txt, si quieres.** Es un archivo de texto con un resumen del sitio para IAs. Es opcional: Google dice que "No es necesario que crees archivos nuevos legibles por máquinas, archivos de texto de IA ni marcas" para sus funciones de IA, y Conversion advierte que tener el archivo no garantiza que sistemas externos lo consulten.

¿Y los datos estructurados, etiquetas escondidas en el código que dicen "este es el nombre de la empresa, este es el servicio"? Google afirma: "Tampoco hay datos estructurados especiales de schema.org que debas agregar". Trátalos como buena práctica de SEO, no como requisito de la IA. En nuestra evaluación, no existe un archivo mágico.

## ¿Cómo preparó Nocodeia su propio sitio para Google y para la IA?

Aplicamos en nuestro sitio la misma lista. Lo que está en línea:

1. **Robots.txt abierto**, que permite todos los robots y señala el sitemap.
2. **Sitemap** con las páginas y los artículos.
3. **llms.txt** con servicios, fundador y proyectos entregados.
4. **Datos estructurados:** empresa, persona, sitio y preguntas frecuentes en la página de inicio; artículo, ruta de navegación y preguntas frecuentes en cada artículo.
5. **Páginas estáticas**, con el texto ya en el código, sin depender de JavaScript.
6. **Google Search Console y Bing Webmaster Tools** configurados el 3 de octubre de 2026, con el sitemap enviado.
7. **Blog semanal en portugués, inglés y español**, escrito con agentes de IA y aprobado por una persona antes de publicarse.

Todavía es pronto para medir cuántas citas trae esto; lo que hicimos fue quitar los obstáculos del camino del robot. Es el trabajo del servicio [Un sitio que Google y la IA recomiendan](/es/#servicos): renovación del sitio, SEO, GEO (ajustes para que el sitio sea leído y citado por IAs como ChatGPT y Gemini) y blog automatizado, en 2 a 4 semanas, más el blog mensual. Mira también los [proyectos que ya pasaron del papel a la realidad](/es/#projetos).

## ¿Se puede pagar para aparecer en ChatGPT?

Existen anuncios en ChatGPT, pero un anuncio no es lo mismo que ser citado en la respuesta. Según [Canaltech](https://canaltech.com.br/inteligencia-artificial/chatgpt-comeca-a-exibir-mais-anuncios-agora-no-gerador-de-imagens/) (en portugués), un sitio brasileño de noticias de tecnología, el 5 de octubre de 2026, en Brasil los anuncios convencionales pueden aparecer desde agosto para los planes gratuito y Go; los suscriptores de Plus, Pro, Business, Enterprise y Edu no reciben publicidad.

El anuncio va separado de la respuesta. Según OpenAI, citada por Canaltech, en traducción libre, "las respuestas generadas por ChatGPT funcionan de forma independiente del sistema de publicidad". El anuncio con imagen empieza a probarse en octubre en Estados Unidos, sin fecha para Brasil.

## ¿Qué no puede garantizar nadie sobre aparecer en ChatGPT?

Nadie controla la respuesta de la IA. Google escribe que "No se garantiza la indexación ni la publicación". OpenAI informa que, después de cambiar el robots.txt, sus sistemas pueden tardar unas 24 horas en ajustarse. Ese es el plazo para leer el archivo, no un plazo para aparecer en las respuestas.

En nuestra evaluación, desconfía de quien prometa "el primer lugar en ChatGPT". Se pueden quitar los obstáculos, publicar respuestas claras y darles seguimiento. Mira [cómo funciona el diagnóstico de 45 minutos](/es/#como). Si lo que te interesa es usar IA dentro de tu empresa, lee [IA para pymes: por dónde empezar](/es/blog/ia-para-pymes/).

## Preguntas frecuentes

### ¿Qué es el SEO para IA?

Son los ajustes para que el sitio sea leído y citado por IAs como ChatGPT y Gemini, también llamados GEO.

### ¿Cuál es la diferencia entre SEO y GEO?

El SEO se ocupa de que el sitio aparezca en Google; el GEO, de que el sitio sea citado en la respuesta de la IA. El GEO depende del SEO: Google afirma que "Las prácticas recomendadas de SEO siguen siendo relevantes" para sus funciones de IA.

### ¿De dónde saca ChatGPT la información?

De lo que aprendió en su entrenamiento y, cuando la pregunta pide información actual, de búsquedas en la web, que pueden traer enlaces a las fuentes. Según OpenAI, el robot GPTBot recopila contenido que puede usarse en el entrenamiento, y OAI-SearchBot sirve a la búsqueda.

### ¿ChatGPT tiene anuncios?

Sí. Según Canaltech, en Brasil desde agosto, en los planes gratuito y Go, separados de la respuesta.

### ¿Qué es llms.txt?

Es un archivo de texto con un resumen del sitio para IAs. Es opcional: Google no lo exige, y el 12.1% de los sitios del estudio de Conversion tiene uno.

## ¿Por dónde empezar?

En el diagnóstico gratis de 45 minutos, revisamos tu sitio contigo y te mostramos qué falta para que los robots lo lean y para que responda las preguntas de tus clientes. Sales con precio y plazo cerrados. [Agenda tu diagnóstico gratis](/es/#vaga).
