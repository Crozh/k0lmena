@Carrito @All
Feature: Carrito lambdatest
  Scenario: Compra desde la pagina principal 
    Given el usuario esta logueado en la pagina principal en lambdatest
    When el usuario ingresa a la pagina del producto 
    And el usuario clickea en el boton 'Buy Now'
    And el usuario ingresa estos datos:  
     | nombre    | apellido   | direccion    | ciudad    | pais    | region    | 
     | <nombre>  | <apellido>  | <direccion>  | <ciudad>  | <pais>  | <region>  |
    And el usuario clickeo en el checkbox 'Terms & Conditions'
    And el usuario clickeo en el boton 'Continue'
    Then el usuario clickea en el boton 'Confirm Order'
    And el usuario deberia ver un mensaje de orden exitosa

  
  Examples: 
  | nombre | apellido | direccion     | ciudad     | pais      | region        | 
  | juanjo | palermo  | ayacucho 250 | rawson     | 10        |     159       |
    
@Carrito @All
  Scenario: Compra con campos vacios
    Given el usuario esta logueado en la pagina principal de lambdatest
    When el usuario ingresa a la pagina de un producto 
    And el usuario clickea el boton de 'Buy Now'
    And el usuario ingresa estos datos invalidos:  
     | nombre    | apellido   | direccion    | ciudad    | pais    | region    | 
     | <nombre>  | <apellido>  | <direccion>  | <ciudad>  | <pais>  | <region>  |
    And el usuario clickea en el boton Continue
    Then el usuario deberia ver el mensaje: 'First Name must be between 1 and 32 characters!'
    And el usuario deberia ver el mensaje: 'Last Name must be between 1 and 32 characters!'
    And el usuario deberia ver el mensaje de: 'Address 1 must be between 3 and 128 characters!'
    And el usuario deberia ver el mensaje de: 'City must be between 2 and 128 characters!'
    And el usuario debera ver el mensaje de: 'Warning: You must agree to the Terms & Conditions!'

    Examples: 
    | nombre | apellido | direccion     | ciudad     | pais      | region        | 
    |        |          |               |            |           |               |