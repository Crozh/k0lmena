@Login @Smoke @Carrito @All
Feature: Login lambdatest
  Scenario: Verificar el funcionamiento del login
    Given el usuario esta en lambdatest
    When el usuario clickea en el boton de 'Login'
    And el usuario ingresa el mail
    And el usuario ingresa la contraseña
    And el usuario clickea en el segundo boton de 'Login'
    Then el usuario deberia ser redireccionado a la seccion de 'My Account'

