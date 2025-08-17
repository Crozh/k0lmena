@Registro @All
Feature: Registro lambdatest
Scenario Outline: Registro completo 
    Given el usuario esta en la pagina de lambdatest
    When el usuario clickea en el boton de 'Register'
    And el usuario ingresa los datos validos: 
    | nombre   | apellido   | mail   | telefono   | contraseña   | contraseña2   | 
    | <nombre> | <apellido> | <mail> | <telefono> | <contraseña> | <contraseña2> |
    And el usuario clickea en el checkbox de 'Privacy Policy'
    And el usuario clickea en el boton de 'Continue'
    Then el usuario deberia ver un mensaje de registro exitoso
    And el usuaria clickea en el logout

# La página que elegí no tiene una forma de borrar las cuentas así que no pude hacer que sea reutilizable los mails que puse, aunque era mi intención 

    Examples:
      | nombre    | apellido   | mail             | telefono   | contraseña | contraseña2  |
      | pan       |   tostado  | paxnnxn7myb@gmail.com | 1168687848 | pepe123    | pepe123      |
      | fernet    | coca       | mxxtetx4v@gmail.com | 1166668888 | pipo123    | pipo123      |



@Registro @All

Scenario Outline: Registro con campos vacios 
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
                       