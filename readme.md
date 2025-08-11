## Analisis final:

### ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?

La diferencia entre funciones constructoras con prototype y class en JavaScript es más de sintaxis y legibilidad que de funcionamiento, porque internamente class sigue usando prototipos por detras.

**Ventajas de funciones constructoras con protoytpe:**

-Es compatible con versiones antiguas de JavaScript. 
-Útiles para entender cómo funciona el modelo de objetos en JS.
-Control total sobre cómo funciona la herencia, qué prototipo se usa, y cómo se conectan las cadenas de prototipos.

**Desventajas de funciones constructoras con prototype:**

-Sintaxis más larga y menos intuitiva para principiantes.
-Herencia entre varias funciones constructoras es más tediosa de implementar.
-Es más fácil cometer errores si no se utiliza new.

**Ventajas de Class:**

-Sintaxis más limpia, clara y cercana a lenguajes como Java, C# o Python.
-Más intuitivo para quienes utilizaron POO clasico.
-Facilita la lectura y mantenimiento.

**Desventajas de Class:**

-No funciona en entornos muy antiguos sin transpilar.
-Menos control directo sobre el prototipo si se hace algo muy de bajo nivel.
-Sigue siendo prototype por detras, lo que puede confundir.

### ¿Cuáles son las ventajas de usar getters y setters?

**1.Encapsulación**
Permiten proteger los datos internos de un objeto para que no puedan ser modificados directamente. Esto ayuda a mantener la integridad de la información.
**2. Validaciones y control de datos**
Posibilitan agregar reglas y restricciones cuando se modifica un valor, evitando datos incorrectos o no deseados.
**3. Interfaz más simple y clara**
Se accede a las propiedades como si fueran variables normales, lo que hace que el código sea más legible y fácil de usar.
**4.Flexibilidad para cambios futuros**
Si en un futuro se requiere agregar lógica al acceder o modificar una propiedad, se puede hacer sin necesidad de cambiar el código que ya la utiliza.
**5. Mejora del mantenimiento del código**
Centralizan la lógica de acceso y modificación de datos, lo que facilita encontrar y corregir errores.

### ¿Qué problemas pueden surgir al modificar prototipos nativos como String?

**1.Conflictos con otras librerías o código existente**
Si otra librería define un método con el mismo nombre, la implementación podría sobrescribirla o ser sobrescrita, causando errores difíciles de depurar.
**2.Riesgo con futuras versiones del lenguaje**
Un nuevo método estándar en JavaScript con el mismo nombre podría generar conflictos y comportamientos impredecibles.
**3.Impacto en el rendimiento**
Algunos motores de JavaScript optimizan peor los objetos cuyos prototipos han sido modificados.
**4.Mantenimiento más difícil**
Otros desarrolladores pueden confundirse al ver métodos personalizados en objetos nativos, ya que no son parte de la API estándar.

### Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

-Asignar directamente al prototype: agregas métodos uno por uno, con control total y sin riesgo alto de sobrescribir.
-Usar Object.assign: copias varios métodos de golpe desde otro objeto, es más rápido pero puede sobrescribir métodos ya existentes y es menos explícito.
