El área de Operaciones de una consultora multinacional de tecnología, parte de un grupo con más de 20 mil empleados, seguía sus OKR en una planilla rehecha desde cero cada mes, y cualquier persona veía y editaba todo. Nocodeia creó una plataforma propia de OKR: la estructura de metas se arma una vez por ciclo, cada persona registra el avance de lo suyo y la dirección ve dónde actuar. El nombre del cliente se reserva a pedido suyo.

<div class="numeros">
<div><strong>210+</strong><span>colaboradores con metas claras y escritas</span></div>
<div><strong>Cero</strong><span>planillas rehechas cada mes: la estructura queda guardada</span></div>
<div><strong>4 vistas</strong><span>colaborador, gestor, líder de área y dirección, cada uno ve solo lo suyo</span></div>
<div><strong>1 versión</strong><span>oficial de los números, en lugar de planillas paralelas</span></div>
</div>

## ¿Cuál era el problema?

El área había crecido, pero la gestión de metas seguía igual que cuando era pequeña:

- **Retrabajo todos los meses.** La planilla de OKR se rehacía desde cero cada mes, aunque los objetivos y las metas no cambiaran. No había historial de avance.
- **Todos veían y editaban todo.** No había control por área, equipo o persona, ni forma de saber quién cambió qué.
- **Varias versiones de la verdad.** Circulaban copias de la planilla, y cada líder llegaba a la reunión con sus propios números.
- **Responsabilidad diluida.** No había registro de que la persona conocía y aceptaba su propia meta. Cuando algo se atrasaba, nadie sabía decir dónde había fallado.
- **Sumar gente nueva costaba.** Ubicar a un empleado en la estructura dependía de la memoria de quien cuidaba la planilla.
- **Tiempo perdido en reportes.** Los líderes pasaban horas pidiendo el estado por correo y armando informes.

La regla práctica del mercado es que una planilla de OKR empieza a fallar por encima de unas 20 personas. Esta área tenía más de 200.

## ¿Por qué no usar una herramienta lista?

Reestructurar el SharePoint de la empresa requería permisos de administrador y pasar por la fila del equipo de TI. Una herramienta de OKR por suscripción requería un presupuesto todavía no aprobado. El área quería empezar sin depender de otro equipo, así que Nocodeia hizo una aplicación propia, con base de datos e inicio de sesión, preparada para migrar después a la nube de la propia empresa sin rehacer las pantallas.

## ¿Cómo funciona la plataforma?

La estructura de objetivos se arma una vez por ciclo. Después, el trabajo de cada mes es solo el check-in.

<div class="fluxo" aria-label="Cómo funciona el ciclo de OKR">
<span>La dirección define los objetivos del ciclo</span><b aria-hidden="true">→</b>
<span>El gestor crea las metas del equipo</span><b aria-hidden="true">→</b>
<span>La persona acepta o propone un cambio</span><b aria-hidden="true">→</b>
<span class="destaque">Check-in mensual</span><b aria-hidden="true">→</b>
<span>El panel muestra dónde actuar</span>
</div>

1. **Objetivos en cascada:** empresa, área y equipo, con el objetivo superior visible en cada nivel.
2. **Check-in mensual** en pocos clics: valor actual y comentario. Nada se sobrescribe, y cada mes queda en el historial.
3. **Estado automático:** el sistema compara el avance con el tiempo transcurrido del ciclo y marca la meta como en curso, en riesgo, atrasada o cumplida.
4. **Aceptación de la meta:** la persona confirma "leí y estoy de acuerdo con esta meta para el ciclo". El registro guarda la versión exacta aceptada y no se puede borrar, ni siquiera un administrador.
5. **Metas de doble vía:** el colaborador puede proponer un cambio o una meta adicional, y el gestor aprueba o rechaza con justificación. Nadie aprueba su propia propuesta.
6. **Ciclo nuevo en un clic,** copiando la estructura del anterior.

<figure class="tela"><img src="/assets/okr-dashboard.webp" alt="Panel de la empresa con metas atrasadas, en riesgo, check-ins pendientes y disciplina del proceso" width="1600" height="760" loading="lazy"><figcaption>Panel: la dirección lo abre y ya ve dónde actuar, con metas atrasadas, en riesgo, sin responsable y la disciplina de check-in.</figcaption></figure>

## ¿Quién ve qué?

Cada rol tiene su vista, y lo garantiza la base de datos, no solo la pantalla: cada consulta devuelve únicamente lo que la persona tiene permiso de ver.

- **Colaborador:** sus propias metas, lo que falta aceptar y el check-in del mes.
- **Gestor:** todo el equipo, con responsable, avance, estado y cuántos días lleva pendiente cada aceptación.
- **Líder de área:** los equipos y gestores del área, uno al lado del otro.
- **Dirección:** toda la empresa, bajando de área a equipo, gestor y persona.

<figure class="tela"><img src="/assets/okr-painel.webp" alt="Panel personal de la plataforma de OKR con metas, estado y pendientes del mes" width="1600" height="760" loading="lazy"><figcaption>Mi panel: cada persona ve sus metas, el estado y lo que falta hacer en el mes.</figcaption></figure>

Pruebas automáticas verifican, rol por rol, que un equipo no lea ni modifique datos de otro. La base de datos tiene respaldo diario, con restauración probada.

## ¿Cuáles fueron los resultados?

- **Fin del retrabajo:** la estructura se arma una vez por ciclo; el mes siguiente, solo el check-in.
- **Una única versión de la verdad** en las reuniones de dirección, en lugar de planillas que compiten entre sí.
- **Responsabilidad clara:** cada meta tiene responsable, aceptación registrada e historial mes a mes.
- **Estado sin pedirlo por correo:** el panel muestra avance y atrasos sin que nadie arme un informe.
- **Gente nueva en minutos:** registro y vínculo al equipo, con los permisos aplicados solos.
- **Salidas sin perder historial:** las metas se cierran en la fecha, y todo queda guardado en "archivadas".

<figure class="tela"><img src="/assets/okr-ciclos.webp" alt="Pantalla de ciclos trimestrales con borradores y copia de estructura" width="1600" height="760" loading="lazy"><figcaption>Ciclos: el trimestre nuevo nace como borrador y copia la estructura del anterior.</figcaption></figure>

La plataforma se hizo con React y TypeScript, Supabase (PostgreSQL, inicio de sesión y reglas de acceso por fila), Vercel y GitHub Actions, que ejecuta las pruebas y el respaldo diario. También funciona en el celular.

## Preguntas frecuentes

### ¿Vale la pena cambiar la planilla de OKR por un sistema?

Cuando el área supera unas 20 personas, sí: la planilla empieza a generar copias paralelas, retrabajo y falta de control de acceso. En este caso, el área tenía más de 200 personas y rehacía la planilla cada mes.

### ¿Sistema de OKR a medida o herramienta lista?

La herramienta lista resuelve rápido cuando hay presupuesto y el proceso cabe en ella. El sistema a medida vale la pena cuando la empresa necesita reglas propias, como aceptación formal de metas, vistas por rol y datos dentro de su propia infraestructura.

### ¿Cuánto tiempo lleva armar una plataforma de OKR?

Depende de la cantidad de roles, de las reglas de aprobación y de las integraciones. El plazo y el precio salen cerrados después del diagnóstico gratis. Los sistemas internos como este suelen llevar de 1 a 3 meses.

## ¿Tu gestión de metas todavía vive en una planilla?

En el diagnóstico gratis de 45 minutos, revisamos cómo tu empresa sigue sus metas hoy y te decimos con franqueza si vale la pena tener un sistema propio. Conoce nuestros [sistemas internos a medida](/es/#servicos) y [agenda tu diagnóstico gratis](/es/#vaga).
