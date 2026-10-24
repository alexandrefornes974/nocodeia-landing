# Crear página web con IA: ¿Google y ChatGPT la leerán?

Crear una página web con IA es usar un constructor, como Wix, Hostinger o Lovable, que arma las páginas a partir de una descripción. El sitio puede quedar bonito e invisible: si el texto solo aparece después de que el JavaScript corre en el navegador, Google necesita un paso extra y los robots de IA pueden no leerlo.

Describiste tu empresa, el constructor armó las páginas y el sitio quedó con cara de profesional. Pero el cliente busca en Google, le pregunta a ChatGPT, y tu empresa no aparece. Muchas veces el motivo está en lo que recibe el robot al visitar la página: un texto que se arma después, en el navegador, o un texto escrito dentro de una imagen.

## ¿Se puede crear la página web de tu empresa con IA y aparecer en Google?

Sí, siempre que el texto llegue listo en el código que envía el servidor. El constructor resuelve el diseño rápido. La pregunta que casi nadie hace es si el robot puede leer lo que está escrito.

Robot, aquí, es el programa que Google y las empresas de IA usan para visitar sitios y leer su contenido, como un lector automático. El código de la página es el archivo que el servidor envía cuando alguien abre la dirección del sitio.

Si el nombre de tus servicios, tu ciudad y tu teléfono están escritos en ese archivo, el robot los lee en la primera visita. Si no están, la lectura depende de pasos extra, y algunos robots no dan esos pasos.

## ¿Por qué un sitio bonito puede ser invisible para Google y para ChatGPT?

Por dos motivos: el texto lo arma JavaScript en el navegador, o el texto solo existe dentro de una imagen.

- **Texto armado por JavaScript.** JavaScript es el lenguaje que hace que partes de la página aparezcan y cambien en el navegador. En algunos sitios, el servidor envía una página casi vacía y un programa que escribe el texto después, en la computadora o el celular del visitante. Esto es común en apps hechas con React, una herramienta popular para crear apps.
- **Texto dentro de una imagen.** Un banner con tus servicios, el precio o la dirección "dibujados" en el arte. Para el robot, eso es una foto.

Google maneja JavaScript, pero en más pasos. La [documentación de Google sobre JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=es) explica que procesa las páginas con JavaScript en 3 fases: rastreo, renderizado e indexación (guardar la página en el catálogo de Google). Leer el texto directo del código "es útil para procesar sitios web clásicos o páginas que se renderizan en el servidor"; cuando el texto lo arma el programa, "Google tiene que ejecutar JavaScript". Renderizar es correr el programa para armar la página.

Con los robots de IA, la situación es peor. Un [estudio de Vercel con MERJ](https://vercel.com/blog/the-rise-of-the-ai-crawler), publicado en diciembre de 2024, concluyó que los principales robots de IA no renderizaban JavaScript, entre ellos los de ChatGPT, Claude y Perplexity. Los de ChatGPT y Claude descargaban los archivos de JavaScript, pero no los ejecutaban.

Las excepciones citadas fueron Gemini, que usa la infraestructura del robot de Google, y el robot de Apple (AppleBot). Los robots cambian, así que toma esto como una foto de esa fecha.

| Cómo llega el texto | Google | Robots de IA (estudio de dic. 2024) | Qué hacer |
|---|---|---|---|
| Listo en el código (sitio estático o armado en el servidor) | Encuentra el texto en el código que envía el servidor | Pueden leerlo: el texto ya está en el código | Mantenerlo así |
| Armado en el navegador por JavaScript | Solo ve el texto después de ejecutar el JavaScript en el renderizado | Los principales no ejecutaban el JavaScript | Pasar a entregar la página lista |
| Dentro de una imagen | Pide el contenido importante en forma de texto | Sin fuente que confirme la lectura | Reescribirlo como texto |

## ¿Un sitio estático es peor para Google?

No, es al revés: el sitio estático es el más fácil de leer. Estático quiere decir que el servidor entrega la página ya lista, con el texto escrito en el código, igual para todos los visitantes. El robot la abre y la lee, sin paso extra.

La confusión viene del nombre, que suena a "quieto" o "antiguo". Lo que estorba es el sitio que solo escribe el texto en el navegador. El propio Google dice, en la misma documentación, que "sigue siendo una buena opción renderizar el contenido previamente o en el servidor", porque "no todos los robots pueden ejecutar JavaScript". El sitio de Nocodeia, por ejemplo, usa páginas estáticas, con el texto ya en el código.

## ¿Cómo entregan Wix, Hostinger y Lovable las páginas de tu sitio?

Los tres dicen que los sitios nuevos salen con la página armada en el servidor, pero la fecha en que se creó tu sitio importa. Esto es lo que afirma cada empresa:

| Constructor | Lo que afirma la empresa | Salvedad |
|---|---|---|
| Wix | En el [blog de Wix](https://www.wix.com/blog/is-wix-seo-friendly), los sitios usan renderizado en el servidor y el robot de IA recibe el contenido completo en la primera visita | Es texto de marketing de la propia Wix (publicado el 21/09/2026, actualizado el 18/10/2026); no lo encontramos en su centro de ayuda |
| Hostinger (AI Builder) | En la [nota de producto del 28/09/2026](https://www.hostinger.com/blog/product-updates-week-39-2026/), los sitios creados a partir del 21/09/2026 usan renderizado en el servidor | La nota no habla de los sitios creados antes de esa fecha |
| Lovable | En las [preguntas frecuentes oficiales de Lovable](https://docs.lovable.dev/introduction/faq), las apps creadas desde el 13/05/2026 (22/06/2026 en el plan Enterprise) se renderizan en el servidor; las antiguas se renderizan en el navegador, y Lovable entrega copias listas de las páginas publicadas a buscadores verificados, robots de vista previa de redes sociales y robots de IA | En el proyecto antiguo, el código fuente que ves puede venir casi vacío, aunque los robots reciban la copia lista |

¿Y las otras herramientas, como Canva o HostGator? No las revisamos. Cambian rápido: en vez de confiar en la publicidad, haz la prueba de abajo. Sirve para cualquier constructor.

## ¿Cómo probar en 5 minutos si Google y la IA pueden leer tu sitio?

Abre el código de la página y busca una frase que aparece en pantalla. Paso a paso, en la computadora:

1. Abre una página de tu sitio en Chrome, haz clic derecho en un espacio vacío y elige "Ver el código fuente de la página" (o presiona Ctrl+U).
2. Presiona Ctrl+F y busca una frase que aparece en pantalla, como el nombre de un servicio. ¿La encontraste? El texto va listo en el código. ¿No la encontraste, o solo ves líneas de programa y casi nada de texto? El texto se arma en el navegador.
3. Repite con la dirección, el teléfono y los precios. Si no aparecen, vuelve a la página e intenta seleccionar ese texto con el mouse. Si no se puede seleccionar, está dentro de una imagen.
4. Para ver lo que ve Google, usa la herramienta de inspección de URLs de Google Search Console, la herramienta gratuita de Google para dueños de sitios. Haz clic en "Probar URL publicada" y después en "Ver página probada". Te muestra el código que recibió Google y una captura de la página armada.

Cómo leer el resultado: el paso 2 muestra lo que recibe un robot que no ejecuta JavaScript, que era el caso de los robots de IA en el estudio citado arriba. El paso 4 muestra lo que ve Google después de armar la página. Si Google ve el texto y el código fuente no lo tiene, Google puede indexar la página, pero los robots de IA pueden quedarse sin el contenido. Es la misma prueba que hacemos en el sitio de Nocodeia.

Una excepción: en un proyecto antiguo de Lovable, el código fuente puede venir casi vacío y, aun así, Lovable dice entregar una copia lista a los robots; en ese caso, usa el paso 4 y la pestaña de SEO de la propia Lovable.

## ¿Qué hacer si tu sitio no pasa la prueba?

Resuelve primero la causa que señaló la prueba. Según el caso:

- **Lovable en proyecto antiguo (React + Vite):** revisa si el proyecto se puede actualizar a la estructura nueva, que renderiza en el servidor, como describe Lovable, y repite la prueba. Hoy Lovable dice entregar copias listas a los robots; con la página armada en el servidor, el texto va en el código para cualquier visitante, sin depender de eso. Lovable también menciona la pestaña "SEO & AI search", gratuita en todos los planes, que revisa títulos, indexación, sitemap y robots.txt.
- **Hostinger con sitio creado antes del 21/09/2026:** pregunta al soporte si tu sitio ya usa renderizado en el servidor.
- **Texto en imagen:** reescribe como texto de verdad los servicios, la dirección, el teléfono, el horario y los precios. La imagen queda de apoyo.
- **Robots bloqueados o sitio fuera de Google:** el paso a paso de robots.txt y Search Console está en la guía sobre [cómo hacer que tu empresa aparezca en ChatGPT](/es/blog/como-hacer-que-mi-empresa-aparezca-en-chatgpt/).
- **Constructor que no deja entregar el texto listo:** rehaz las páginas principales (inicio, servicios y contacto) con el texto listo en el código. Es el tipo de trabajo de nuestro servicio [Un sitio que Google y la IA recomiendan](/es/#servicos).

## ¿Cuándo basta el constructor con IA y cuándo conviene llamar a alguien?

El constructor basta para empezar si el sitio pasó la prueba, tiene textos que responden las dudas del cliente y está en Search Console. Conviene pedir ayuda cuando el sitio no pasa la prueba, cuando la empresa depende de que la encuentren (servicio local o venta a otras empresas) o cuando quieres blog y medición.

Para la medición, mira cómo [medir de dónde vienen los clientes que llegan por el sitio](/es/blog/metricas-de-marketing-digital-para-pymes/). En nuestra opinión, el error más caro es descubrir meses después que el sitio nunca fue leído. Un sitio bonito que nadie encuentra no factura.

## Preguntas frecuentes

### ¿Se puede crear una página web con IA gratis?

Hay constructores con plan gratuito. Revisa en la página oficial qué incluye el plan antes de decidir. La prueba del código fuente sirve para cualquier plan.

### ¿Por qué mi página web no aparece en Google?

Tres causas comunes: el sitio todavía no está indexado, el texto se arma en el navegador o está en una imagen, o el robots.txt (el archivo que dice qué robots pueden entrar al sitio) bloquea al robot. Empieza por la herramienta de inspección de URLs de Search Console, que muestra si la página está en Google.

### Mi página de Wix no aparece en Google: ¿qué hago?

Registra el sitio en Google Search Console y usa la inspección de URLs en la página que no aparece. Revisa también que servicios, dirección y teléfono estén escritos como texto, fuera de imágenes. Según Wix, sus sitios ya salen con la página armada en el servidor: empieza por la indexación y el texto.

### ¿Lovable es bueno para crear páginas web?

Es una herramienta rápida para armar sitios y apps. Según las preguntas frecuentes de Lovable, los proyectos nuevos se renderizan en el servidor y, en los antiguos, entrega copias listas de las páginas a los buscadores verificados y a los robots de IA. Si tu proyecto es antiguo, revisa si se puede actualizar a la estructura nueva.

### ¿Cómo hacer que mi página web aparezca en Google gratis?

Registra el sitio en Google Search Console, que es gratuito, envía el sitemap (la lista de páginas del sitio) y revisa que el texto esté en el código de la página. Aun así, el propio Google advierte, en su página sobre las funciones de IA en la Búsqueda: "No se garantiza la indexación ni la publicación".

## ¿Por dónde empezar?

Haz la prueba de 5 minutos hoy, en la página de inicio y en la de servicios. Si el texto no aparece en el código, o si no quieres encargarte de esto solo, mira [cómo funciona el diagnóstico de 45 minutos](/es/#como) y [agenda tu diagnóstico gratis](/es/#vaga): revisamos tu sitio contigo y sales con precio y plazo cerrados para resolverlo.
