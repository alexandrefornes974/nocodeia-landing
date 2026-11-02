# Comercio agéntico: qué lee la IA en el catálogo de tu tienda

El comercio agéntico es la compra hecha con ayuda de un agente de IA, que investiga, compara y, en algunos casos, cierra el pedido por el cliente. Para elegir, el agente consulta los datos de la tienda: producto, precio, inventario, envío y condiciones de venta. Si no entiende la oferta, difícilmente la elige.

Un agente de IA es un asistente que ejecuta tareas, no solo responde. Preparar el Black Friday (27 de noviembre) solo con un banner y un cupón deja algo fuera. Quien le pide a ChatGPT "un vestido midi azul de menos de US$ 200" recibe una comparación armada con datos, y un título vago o un inventario desactualizado estorban.

## ¿Qué es el comercio agéntico y qué ya funciona en Brasil?

El comercio agéntico es que el cliente le entregue la compra, o una parte de ella, a un programa que actúa por él. Según un [reportaje del diario brasileño O Tempo](https://www.otempo.com.br/economia/2026/10/29/agentes-de-ia-vao-fazer-compras-por-voce-o-que-ja-funciona-no-brasil) (en portugués), del 29 de octubre de 2026, el agente de compras funciona en cuatro etapas:

1. El cliente describe lo que quiere, con presupuesto, marca preferida y plazo.
2. El sistema recorre catálogos, revisa el inventario, compara precios y encuentra cupones.
3. Filtra las opciones y presenta la mejor.
4. Completa los datos de entrega, aplica el pago autorizado y concluye el pedido.

La autonomía cambia según la compra: en artículos recurrentes, como comida para mascotas, el agente puede actuar con más independencia; en compras caras o de gusto personal, como ropa, la mayoría de los sistemas pide confirmación antes de pagar.

En Brasil, según O Tempo, Visa y el banco brasileño Banco do Brasil concluyeron en marzo de 2026 una compra en nombre del consumidor, descrita como la primera de ese tipo en el país en un entorno de producción controlado. En septiembre, Amazon anunció Alexa para Compras en beta. ChatGPT y Gemini ayudan a investigar y comparar, pero no tienen acceso al checkout (el paso de pago) de las tiendas ni pagan por el usuario.

El [informe de PYMNTS Intelligence con Visa Acceptance Solutions](https://www.visaacceptance.com/content/dam/documents/campaign/shopping-index/2026-global-digital-shopping-index-agentic-edition.pdf) (en inglés), de julio de 2026, encuestó a 5.241 consumidores de Estados Unidos, Brasil y Emiratos Árabes Unidos, en conjunto. Entre los compradores en línea, el 48% usó IA para investigar su compra más reciente: el 30% usó ChatGPT u otra herramienta de OpenAI, y el 19%, Gemini.

En la práctica, hoy el agente investiga y compara más de lo que paga. En nuestra opinión, la tienda que queda fuera de la comparación pierde al cliente antes del clic.

## ¿Qué lee el agente de IA en el catálogo de tu tienda?

El agente lee los datos de cada producto, del nombre a la política de cambios. La [especificación de catálogo de OpenAI](https://developers.openai.com/commerce/specs/file-upload/products), el formato con el que las tiendas asociadas envían productos a ChatGPT, da el panorama: nueve campos obligatorios, como título, descripción, marca, imagen, disponibilidad y precio; el envío, las devoluciones, el código de barras y las reseñas son opcionales.

| Dato | Buen ejemplo (ilustrativo) |
|---|---|
| Nombre con la variante | "Vestido midi azul marino, M" |
| Descripción factual | "Viscosa, 110 cm, con forro" |
| Precio y promoción | "Antes US$ 229,90, ahora US$ 189,90" |
| Inventario | "S, M y L; XL agotado" |
| Envío y plazo | "3 días hábiles a Ciudad de México" |
| Cambios y devoluciones | Enlace a la página de cambios |
| Marca y código de barras | GTIN en cada variante |

El GTIN es el número que aparece debajo del código de barras. El SKU es el código interno de cada variante. El [artículo de E-Commerce Brasil sobre comercio agéntico](https://www.ecommercebrasil.com.br/artigos/comercio-agentico-como-se-adaptar-quando-o-cliente-e-a-ia) (en portugués) lo resume: el comercio minorista necesita "estructurar catálogos, SKU, precios, inventario, envíos y condiciones comerciales".

Una salvedad: OpenAI advierte que ese envío "currently targets the US" (por ahora apunta a Estados Unidos). La lista muestra lo que pide un agente; no quiere decir que una tienda fuera de Estados Unidos ya pueda enviar su catálogo.

## ¿Por qué un catálogo desordenado puede dejar atrás a tu tienda?

Porque el agente compara datos, no vitrinas. En E-Commerce Brasil, Marcella Calfi, gerente de marketing de Zoop, escribe que las "descripciones ambiguas, la información incompleta y los catálogos desactualizados" pueden reducir la visibilidad de la tienda en las compras hechas por agentes.

En el informe de PYMNTS, entre 1.185 comerciantes de los tres países encuestados en marzo de 2026, solo el 15% tenía datos estructurados listos para agentes de IA, y el 23% lograba separar el tráfico que llega desde la IA del tráfico humano.

Los datos estructurados son etiquetas en el código de la página que le dicen al robot "esto es el precio, esto es el inventario".

Ejemplo ilustrativo (tienda ficticia):

- **Antes:** "¡Vestido azul precioso, míralo!"
- **Después:** "Vestido midi azul marino, viscosa, tallas S a XL, busto de 88 a 104 cm, US$ 189,90, entrega en 3 días hábiles a Ciudad de México."

En nuestra opinión, ahí está la oportunidad de la tienda pequeña, ya que la mayoría de los comerciantes encuestados todavía no tenía esos datos listos. El informe habla de una "clear opportunity" (oportunidad clara) para quien se adelante.

## ¿Cómo revisar lo que ve el agente en la página del producto?

Mira la página del producto como la miraría un robot:

1. **Código fuente.** Abre en Chrome un producto que se venda bien, presiona Ctrl+U y, en el código, Ctrl+F para buscar el precio, una talla y "en stock". Es la [prueba del código fuente del artículo sobre crear una página web con IA](/es/blog/crear-pagina-web-con-ia/), que hacemos en el sitio de Nocodeia. ¿No lo encontraste? El dato puede estar armado en el navegador o solo en la imagen.
2. **Prueba de resultados enriquecidos.** Pega la dirección en esta herramienta gratuita de Google y mira si reconoce el precio y la disponibilidad. La [documentación de Google sobre datos estructurados de producto](https://developers.google.com/search/docs/appearance/structured-data/product?hl=es) separa los fragmentos de producto (páginas donde no se puede comprar) y las fichas de tienda (páginas de compra).
3. **Merchant Center.** Revisa que el precio y el inventario coincidan con los de Google Merchant Center, el panel donde la tienda registra sus productos para Google Shopping. Según Google, si das datos estructurados en la página y un feed (el archivo con la lista de productos) en Merchant Center, "maximizarás las posibilidades de que tus resultados se muestren".
4. **Pregúntale a la IA.** Pídele a ChatGPT "un vestido midi azul de menos de US$ 200 con entrega en Ciudad de México" y mira si tu tienda aparece. Es una foto, no una medición: la respuesta cambia de una persona a otra.

## ¿Qué arreglar en el catálogo antes del Black Friday?

Empieza por los más vendidos, en este orden:

1. **Título con la variante:** color, talla o modelo.
2. **Descripción factual:** medidas, material y para quién sirve.
3. **El mismo precio en la página, en el feed y en el checkout.** En la especificación de OpenAI, un precio promocional mayor o igual al precio normal, o en otra moneda, no se usa.
4. **Inventario actualizado,** con lo agotado marcado como agotado. Como referencia, la [guía de inicio de OpenAI](https://developers.openai.com/commerce/guides/get-started) recomienda a las tiendas asociadas enviar el catálogo completo al menos una vez al día.
5. **Envío y plazo visibles en la página,** no solo en el carrito.
6. **Política de cambios en una página propia,** con enlace desde el producto. E-Commerce Brasil recomienda simplificar "cancelaciones, cambios, devoluciones y reembolsos".
7. **Marca y código de barras** en cada variante.
8. **Datos estructurados de producto** en la página.

Estas mismas correcciones ayudan a Google y al cliente que compra desde el celular. Si no quieres hacerlo solo, es el trabajo de nuestro servicio [Un sitio que Google y la IA recomiendan](/es/#servicos), que para tiendas en línea incluye datos estructurados de producto y la configuración de Google Merchant Center.

## ¿Cómo es un agente que consulta el catálogo por dentro?

Es un agente que solo responde bien lo que está registrado. Amora, que Nocodeia creó para Amore Totale, una tienda en línea de lencería y productos sensuales, busca productos en el catálogo, detalla tallas, colores y descripción, calcula el envío al código postal y llama a una persona cuando hace falta.

Ella lleva al cliente hasta el producto en el sitio web, donde ocurre la compra. En los primeros meses, resolvió el 80% de las conversaciones sin humano, según la medición de Nocodeia. Mira [cómo Amora atiende a los clientes de Amore Totale](/es/casos/amore-totale/).

En el montaje, hubo que revisar y completar los datos del catálogo, como tallas, colores y envío, para que Amora respondiera bien. En nuestra opinión, lo mismo vale para el agente de una plataforma de compras.

## ¿Vale la pena correr para vender dentro de ChatGPT ahora?

En nuestra opinión, todavía no es la prioridad de una tienda fuera de Estados Unidos. La [guía de inicio de OpenAI](https://developers.openai.com/commerce/guides/get-started) dice que el envío de catálogos está "currently available to approved partners" (solo para socios aprobados). La especificación agrega que "Eligibility does not guarantee display": estar habilitado para la búsqueda no garantiza aparecer.

La prioridad es un catálogo legible en el sitio y en Google, que ya le sirve al cliente de hoy. Desconfía de quien promete meter tu tienda dentro de ChatGPT; si se puede pagar para aparecer, lo respondemos en la guía sobre [cómo hacer que tu empresa aparezca en ChatGPT](/es/blog/como-hacer-que-mi-empresa-aparezca-en-chatgpt/).

## Preguntas frecuentes

### ¿Qué significa comercio agéntico?

Es la compra hecha con ayuda de un agente de IA, que investiga, compara y puede cerrar el pedido. Según O Tempo, la diferencia con el chatbot común es la autonomía: el agente decide dentro de los límites que definió el cliente.

### ¿Qué es el comercio agéntico de Visa?

Es la plataforma Visa Intelligent Commerce, usada con Banco do Brasil en marzo de 2026 en una compra en nombre del consumidor, que O Tempo describe como la primera de ese tipo en el país, en un entorno controlado. En octubre de 2025, según el reportaje, Visa lanzó el Trusted Agent Protocol, que ayuda a la tienda a distinguir a los agentes legítimos de los robots maliciosos.

### ¿Se puede comprar con ChatGPT?

Según O Tempo, en Brasil ChatGPT ayuda a investigar y comparar modelos, pero no tiene acceso al checkout de las tiendas ni paga por el usuario. En la práctica, el cliente cierra el pedido en la tienda.

### ¿Cómo funciona la investigación de compras de ChatGPT?

Según O Tempo, quien usa ChatGPT para investigar una compra describe lo que quiere, define un rango de precio y pide comparaciones entre modelos. La tienda entra en la comparación con los datos que publica.

### Google Merchant Center: ¿para qué sirve?

Es el panel de Google donde la tienda sube su catálogo mediante un feed, incluso para las fichas gratuitas. Según Google, el feed y los datos estructurados en la página, juntos, aumentan al máximo las posibilidades de que los productos se muestren en la Búsqueda.

## ¿Por dónde empezar?

Haz hoy las cuatro revisiones en los productos más vendidos. Si quieres ayuda, [agenda tu diagnóstico gratis](/es/#vaga) de 45 minutos: revisamos contigo una página de producto de tu tienda, y sales con precio y plazo cerrados.
