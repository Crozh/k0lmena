# Registro 2

@Registro @All
Feature: Registro lambdatest
Scenario Outline: Verificar el funcionamiento del Registro
    Given el usuario esta en la pagina de lambdatest
    When el usuario clickea en el boton de 'Register'
    And el usuario ingresa los datos validos: 
    | nombre   | apellido   | mail   | telefono   | contraseña   | contraseña2   | 
    | <nombre> | <apellido> | <mail> | <telefono> | <contraseña> | <contraseña2> |
    And el usuario clickea en el checkbox de 'Privacy Policy'
    And el usuario clickea en el boton de 'Continue'
    Then el usuario deberia ver un mensaje de registro exitoso
    And el usuaria clickea en el logout

    Examples:
      | nombre    | apellido  | mail           | telefono   | contraseña | contraseña2  |
      | penne      | rigatti    | azuzzwv23@gmail.com | 1168687848 | pepe123    | pepe123   |
      | penelope | patty | piwwxxxec332@gmail.com | 1166668888 | pipo123 | pipo123 |


# Registro 2

@Registro @All

Scenario Outline: Verificar los campos incorrectos del Registro
    Given el usuario esta en la pagina lambdatest
    When el usuario clickea el boton de 'Register'
    And el usuario ingresa los datos invalidos: 
    | nombre   | apellido   | mail   | telefono   | contraseña   | contraseña2   | 
    | <nombre> | <apellido> | <mail> | <telefono> | <contraseña> | <contraseña2> |
    And el usuario clickea en el checkbox 'Privacy Policy'
    And el usuario clickea en el boton 'Continue'
    Then el usuario deberia ver el mensaje de: 'First Name must be between 1 and 32 characters!'
    And el usuario deberia ver el mensaje de: 'Last Name must be between 1 and 32 characters!'
    And el usuario deberia ver el mensaje de: 'E-Mail Address does not appear to be valid!'
    And el usuario deberia ver el mensaje de: 'Telephone must be between 3 and 32 characters!'
    And el usuario deberia ver el mensaje de: 'Password must be between 4 and 20 characters!'


    Examples:
      | nombre    | apellido  | mail           | telefono   | contraseña | contraseña2  |          
      |           |           |                |            |            |              |
                       