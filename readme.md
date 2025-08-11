# Análisis final

## ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`?

La diferencia principal entre funciones constructoras con `prototype` y `class` en JavaScript es mayormente de sintaxis y legibilidad, ya que internamente `class` sigue usando prototipos por detrás.

**Ventajas de funciones constructoras con `prototype`:**

- Compatible con versiones antiguas de JavaScript.  
- Útiles para entender cómo funciona el modelo de objetos en JS.  
- Ofrecen control total sobre la herencia, qué prototipo se usa y cómo se conectan las cadenas de prototipos.

**Desventajas de funciones constructoras con `prototype`:**

- Sintaxis más larga y menos intuitiva para principiantes.  
- Herencia más tediosa de implementar cuando hay varias funciones constructoras.  
- Fácil cometer errores si se olvida usar `new`.

**Ventajas de `class`:**

- Sintaxis más limpia, clara y cercana a lenguajes como Java, C# o Python.  
- Más intuitivo para quienes vienen de POO clásica.  
- Facilita la lectura y mantenimiento del código.

**Desventajas de `class`:**

- No funciona en entornos muy antiguos sin transpilar.  
- Menos control directo sobre el prototipo para operaciones muy avanzadas.  
- Sigue siendo prototipo por detrás, lo que puede generar confusión.

---

## ¿Cuáles son las ventajas de usar getters y setters?

1. **Encapsulación**  
Protegen los datos internos de un objeto para evitar modificaciones directas, manteniendo la integridad de la información.

2. **Validaciones y control de datos**  
Permiten agregar reglas al modificar valores, evitando datos incorrectos o inválidos.

3. **Interfaz más simple y clara**  
Se accede a las propiedades como variables normales, haciendo el código más legible y fácil de usar.

4. **Flexibilidad para cambios futuros**  
Facilitan agregar lógica adicional sin modificar el código que ya usa esas propiedades.

5. **Mejora del mantenimiento del código**  
Centralizan la lógica de acceso y modificación, simplificando la detección y corrección de errores.
---

## ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?

1. **Conflictos con otras librerías o código existente**  
Si otra librería define un método con el mismo nombre, puede sobrescribir tu implementación o viceversa, generando errores difíciles de depurar.

2. **Riesgo con futuras versiones del lenguaje**  
Nuevos métodos estándar con nombres iguales pueden causar conflictos y comportamientos inesperados.

3. **Impacto en el rendimiento**  
Algunos motores de JavaScript optimizan peor los objetos con prototipos modificados dinámicamente.

4. **Mantenimiento más difícil**  
Otros desarrolladores pueden confundirse al encontrar métodos personalizados en objetos nativos, pues no forman parte de la API estándar.

---

## Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al `prototype` de una función constructora o usar `Object.assign`?

- **Asignar directamente al `prototype`:**  
Se agregan métodos uno por uno, con control total y menor riesgo de sobrescribir métodos existentes.

- **Usar `Object.assign`:**  
Permite copiar varios métodos de golpe desde otro objeto; es más rápido pero puede sobrescribir métodos existentes y resulta menos explícito.
