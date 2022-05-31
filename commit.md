## Commits & Branches

Al crear branches utiliza la misma lógica para nombrarla: `feature/user_creation`,  `fix/currency_with_decimal`,  `chore/lint_ci`,  `refactor/auth_routing`.

Usar la variación de Angular, recordar que tanto features como refactories deben preceder de un test.

- `feature(api/player route): add endpoint GET /players/:id` Nueva funcionalidad.
- `refactor(client/dashboard): date logic for product expirations` Mejoramos el código sin agregar funcionalidad.
- `fix(api/users controller): return 404 on inexistent user`
- `test(api/math): add missing test for division by zero` Agregando un test.
- Se recomienda no cambiar el commit del merge

# PR y feature

Se trabaja en feature branch, con PR hacia el branch principal.

De esta manera para poder agrupar varios commits en un cambio significativo. Este PR tiene que ser relativamente chivo, idealmente concreto para su sección y enfocado en 1 cosa.

- Debe contener descripción breve de lo que se hizo.
- Incluir capturas de los cambios en la UI.
- Se menciona el ticket que se está haciendo y si cierra o avanza.
- Puede incluir cosas a tener en cuenta y limitaciones.