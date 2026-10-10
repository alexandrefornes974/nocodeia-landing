# ¿Tu empresa usa métricas de marketing digital en su sitio?

Las métricas de marketing digital son los números que muestran si el dinero invertido en el sitio web, las redes y los anuncios vuelve como clientes. Muchas empresas quieren retorno, pero no lo miden. Para una pequeña empresa bastan pocos números: cuántas personas vieron la marca en Google, cuántas visitaron el sitio, cuántas escribieron y de dónde llegaron.

Pagas el sitio, promocionas publicaciones en Instagram, tal vez pones anuncios en Google. A fin de mes, alguien pregunta: "¿cuántos clientes trajo esto?". Si la respuesta es "creo que algunos", esta guía es para ti. Muestra qué números mirar, cómo la herramienta gratuita de Google descubre de dónde viene cada cliente y, con la misma honestidad, qué queda fuera de la cuenta.

## ¿Por qué las empresas quieren retorno, pero no miden lo que vuelve?

Porque exigir retorno es fácil; armar la medición da trabajo y se deja para después. El informe de tendencias 2025 de [LocaliQ](https://localiq.com/blog/small-business-marketing-trends-report/) (en inglés), empresa de marketing, encuestó a más de 730 dueños de pequeñas empresas y profesionales de marketing, el 74% de ellos en Estados Unidos o Canadá. No es un retrato de América Latina, pero muestra la contradicción con claridad.

En traducción libre: el retorno de la inversión fue la principal métrica, con un 60% que dice que es "muy importante". Al mismo tiempo, "casi la mitad (47%)" usa herramientas de análisis web, como Google Analytics. En nuestra lectura, el retorno es la métrica más valorada, y menos de la mitad usa la herramienta que ayuda a medirlo en el sitio.

En Brasil, donde está Nocodeia, otra encuesta apunta en la misma dirección. El [Indicador de Madurez Digital 2025, de Sebrae y ABDI](https://sebraepr.com.br/impulsiona/pequenos-negocios-avancam-em-maturidade-digital-em-2025/) (en portugués), dos organizaciones brasileñas de apoyo a las pequeñas empresas y a la industria, evaluó a más de 7 mil micro y pequeñas empresas brasileñas entre mayo y junio de 2025.

El indicador, en una escala de 0 a 80 puntos, subió de 35 a 37. Según Sebrae, "la innovación colaborativa y el uso de datos siguen siendo los principales desafíos" (traducción libre).

En nuestra evaluación, quien no mide no sabe qué canal da retorno. Y termina cortando lo que funcionaba o insistiendo en lo que no trae a nadie.

## ¿Por qué todo tiene que apuntar al sitio web de tu empresa?

Porque el sitio es el lugar donde se puede seguir el camino del cliente de principio a fin. La regla que usamos en Nocodeia es esta: todo converge en el sitio, porque ahí podemos medir el camino completo del cliente. Lo que pasa en las redes y en las IAs lo medimos en cada plataforma y lo juntamos en un solo panel.

En la práctica, la publicación de Instagram, el perfil de LinkedIn y la página de Facebook llevan a la persona al sitio. Ahí lee, compara y hace clic en WhatsApp o envía el formulario. Casi cada paso de ese camino se puede contar.

Muchas empresas hacen lo contrario. Según la encuesta [TIC Empresas 2024, de Cetic.br](https://cetic.br/media/docs/publicacoes/2/20250512121759/tic_empresas_2024_resumo_executivo.pdf) (en portugués), centro brasileño de estudios sobre el uso de internet, el 53% de las empresas brasileñas con más de diez personas ocupadas tenía sitio web en 2024, proporción que era del 54% en 2019. Para esas empresas, las redes sociales son la principal forma de presencia en línea. La recolección se hizo entre marzo y noviembre de 2024.

En nuestra evaluación, el perfil en una red social es terreno alquilado: la plataforma decide qué ves de tus propios números. El sitio es terreno propio.

## ¿Qué métricas de marketing digital debe seguir una pequeña empresa?

Cinco números al mes resuelven la mayor parte de las decisiones de una pequeña empresa. Es el informe que usamos en el método de Nocodeia, con cinco líneas como máximo:

| Número | Qué responde | Dónde verlo |
|---|---|---|
| Impresiones en Google | Cuántas veces apareció el sitio en la búsqueda | Google Search Console |
| Visitas | Cuántas personas entraron al sitio | GA4 |
| Contactos o ventas | Cuántas hicieron clic en WhatsApp, enviaron el formulario o compraron | GA4 (eventos clave) |
| De dónde llegaron | Google, Instagram, IA, enlace directo | GA4 (canales) |
| Una recomendación | Qué hacer el mes siguiente | Quien analiza los números |

Dos términos de la tabla. Google Search Console es un panel gratuito de Google que muestra, entre otras cosas, cuántas veces tu sitio apareció en los resultados de búsqueda. GA4 (Google Analytics 4) es la herramienta gratuita de Google que cuenta las visitas del sitio y lo que la gente hace en él.

Fíjate en lo que quedó fuera: los "me gusta" y los seguidores. Son las llamadas métricas de vanidad, números que alegran el ego pero no pagan las cuentas. Solo entran al informe cuando llevan a alguien al contacto.

## ¿Cómo descubre GA4 de dónde vino cada cliente?

Con tres piezas: la etiqueta en el enlace, el registro de las acciones y la separación por canal. La separación la hace GA4 solo, según la dirección de donde vino la persona; la etiqueta y el registro de las acciones hacen esa cuenta más precisa y muestran quién se volvió contacto.

1. **Etiqueta en el enlace (UTM).** UTM es un fragmento de texto pegado al final del enlace que dice de dónde vino la visita. Según la ayuda de Google Analytics sobre URLs de campaña, cuando alguien hace clic en el enlace etiquetado, "los parámetros de URL se envían a Analytics" y los valores aparecen en el informe de Adquisición de tráfico. Google pide usar siempre tres etiquetas: fuente (utm_source), medio (utm_medium) y campaña (utm_campaign).

   En la práctica, el enlace de la biografía de Instagram queda como `tusitio.com/?utm_source=instagram&utm_medium=social&utm_campaign=bio`.
2. **Registro de las acciones (eventos).** Un evento es cada acción que GA4 registra, como hacer clic en el botón de WhatsApp o enviar el formulario. La acción que vale dinero para ti se marca como evento clave, lo que mucha gente llama conversión. Ese número responde "cuántos clientes trajo el sitio".
3. **Separación por canal.** GA4 agrupa las visitas en canales, como búsqueda orgánica, redes sociales y directo. Según la [ayuda de Google Analytics sobre grupos de canales](https://support.google.com/analytics/answer/9756891?hl=es-419), existe un canal llamado "Asistente de IA", para quien llega desde fuentes como ChatGPT, Gemini, Deepseek, Copilot o Grok. Quien llega por la Visión general creada por IA y el Modo IA de Google (las respuestas generadas por IA dentro de la búsqueda de Google) entra en "Búsqueda orgánica".

## ¿Qué suele salir mal cuando la empresa lo configura sola?

Se puede empezar solo: Search Console y Google Analytics son gratuitos. Instalar es la parte fácil; configurar para que el número sea confiable es otra historia.

Si la herramienta se instala sin el ajuste de consentimiento, guarda cookies antes de que el visitante responda al aviso. En Brasil, en nuestra evaluación, eso puede chocar con la LGPD, la ley brasileña de protección de datos personales. La misma herramienta instalada dos veces puede contar las visitas por duplicado. Y, como advierte el propio Google, un enlace etiquetado como "Meta" y otro como "meta" se vuelven dos fuentes distintas en el informe.

Nada de esto muestra un error en pantalla: el panel sigue mostrando números, solo que equivocados. Pasamos por varios de estos puntos al configurar el propio sitio de Nocodeia: hasta la computadora del equipo bloqueaba Google Analytics, y las pruebas hechas desde ahí mostraban cero visitas. En nuestra evaluación, decidir con datos equivocados es peor que quedarse sin datos.

## ¿Qué es el método MTAM de Nocodeia?

MTAM es el método de Nocodeia para medir el marketing de una pequeña empresa en cuatro etapas que se repiten cada mes. Cada letra es una etapa:

| Etapa | Qué hacemos | Pregunta que responde |
|---|---|---|
| **M**edir el punto de partida | Levantamos el "mes cero": cuántos ven, visitan y escriben hoy | ¿Dónde estamos? |
| **T**razar el origen | Ponemos UTM en los enlaces de las redes, convertimos WhatsApp y el formulario en eventos y revisamos el canal de IA en GA4 | ¿De dónde viene cada contacto? |
| **A**brir puertas | Hacemos que las redes, Google y las IAs apunten al sitio, con SEO (ajustes para aparecer en Google) y GEO (ajustes para que las IAs lean y citen el sitio) | ¿Por dónde puede llegar más gente? |
| **M**edir resultados y decidir | Entregamos el informe mensual de cinco números y una recomendación: qué tipo de publicación hacer, qué ajustar en el SEO o en el GEO | ¿Qué hacer el próximo mes? |

Después de la última etapa, el ciclo vuelve al principio: el resultado del mes se convierte en el nuevo punto de partida. Para la parte de ser citado por las IAs, mira la guía [cómo hacer que mi empresa aparezca en ChatGPT](/es/blog/como-hacer-que-mi-empresa-aparezca-en-chatgpt/).

Dos reglas prácticas acompañan el método. Seguimos una lista de verificación de analítica en cada sitio, para no olvidar ninguna etiqueta. Y las cuentas de GA4 y de Search Console quedan en la cuenta de Google del cliente, no en la nuestra: si algún día cambias de proveedor, el historial sigue siendo tuyo. La recomendación del mes sale del análisis de los números; la herramienta que va a agilizar esa parte todavía está en construcción.

## ¿Cómo mide Nocodeia su propio sitio?

Con las mismas piezas que recomendamos. El 9 de octubre de 2026, el sitio de Nocodeia empezó a medir visitas y contactos del formulario con GA4, un aviso de cookies y un evento de lead (el registro de cada persona que pide contacto). Google Search Console y Bing Webmaster Tools, el panel equivalente del buscador de Microsoft, están configurados desde el 3 de octubre de 2026.

Todavía es pronto para mostrar resultados, y preferimos no inventar. En las pruebas del 9 de octubre de 2026, cuando el visitante aceptaba las cookies, el envío del formulario aparecía en GA4 junto con el canal de donde llegó.

## ¿Qué no mide ninguna herramienta?

Los números muestran una tendencia, no la cuenta exacta de cada cliente. Los puntos ciegos:

- **Quien rechaza las cookies.** Una cookie es un archivo pequeño que el sitio guarda en el navegador para reconocer la visita. Según la [ayuda de Google Analytics sobre el modo de consentimiento](https://support.google.com/analytics/answer/9976101?hl=es-419), depende de cómo se instaló el aviso de cookies. En una forma, el sitio le manda a Google solo una señal mínima, sin cookie, y GA4 llena los huecos con estimaciones. En la otra, la herramienta queda bloqueada y "no se recopilan datos".
- **Enlace reenviado por WhatsApp.** Para Google, "Directo" es quien llega "a través de un vínculo guardado o si ingresan tu URL". En nuestra evaluación, un enlace copiado y enviado en una conversación suele caer ahí, porque llega sin etiqueta.
- **Quien ve la marca en una respuesta de IA y no hace clic.** Sin clic no hay visita, y nada aparece en el sitio.
- **Alcance en las redes.** Cuántas personas vieron la publicación queda en los paneles de Instagram, Facebook y LinkedIn, no en GA4.
- **Venta cerrada por WhatsApp.** El sitio registra el clic en el botón; la venta ocurre en la conversación, fuera de él.
- **Bloqueadores.** Los bloqueadores de anuncios pueden impedir parte del conteo, como pasó en la computadora de nuestro equipo.

Por eso juntamos los números de cada plataforma en un solo panel y miramos la dirección de la curva, mes a mes.

## Preguntas frecuentes

### ¿Google Analytics es gratis?

Sí. Google dice, en la página de Analytics, que ofrece las herramientas sin costo para entender el recorrido del cliente. Existe una versión de pago, Analytics 360, pensada para grandes empresas.

### ¿Cómo saber cuántas personas visitan mi sitio web?

Instala GA4 en el sitio y mira el informe de visitas. Para saber cuántas se volvieron contacto, marca el clic en WhatsApp y el envío del formulario como eventos clave.

### ¿Qué son las métricas de vanidad?

Son números que agradan pero no muestran ventas, como los "me gusta" y los seguidores. Solo valen cuando puedes relacionarlos con contactos o ventas.

### ¿Qué es UTM?

Es una etiqueta pegada al final del enlace que le dice a GA4 de dónde vino la visita, como "instagram" o "email". Google recomienda usar siempre fuente, medio y campaña.

## ¿Por dónde empezar?

Empieza por el mes cero: saber cuántas personas ven, visitan y le escriben a tu empresa hoy. Si quieres números confiables desde el primer mes, sin descubrir los errores después, Nocodeia te puede ayudar. En el [diagnóstico de 45 minutos](/es/#como), revisamos esto contigo y te mostramos qué falta para que el sitio cuente de dónde viene cada contacto. Es el trabajo del servicio [Un sitio que Google y la IA recomiendan](/es/#servicos), con informe mensual. [Agenda tu diagnóstico gratis](/es/#vaga).
