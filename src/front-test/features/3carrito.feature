@Carrito @All
Feature: Carrito lambdatest
  Scenario: Verificar el funcionamiento del carrito
    Given el usuario esta logueado a lambdatest
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
  | juanjo | paloma   | monterrey 777 | rawson     | 10        |     159       |
    
@Carrito @All
  Scenario: Verificar el funcionamiento del carrito
    Given el usuario esta logueado a lambdatest
    When el usuario ingresa a la pagina del producto 
    And el usuario clickea en el boton 'Buy Now'
    And el usuario ingresa estos datos:  
     | nombre    | apellido   | direccion    | ciudad    | pais    | region    | 
     | <nombre>  | <apellido>  | <direccion>  | <ciudad>  | <pais>  | <region>  |
    And el usuario clickeo en el checkbox 'Terms & Conditions'
    And el usuario clickeo en el boton 'Continue'
    Then el usuario clickea en el boton 'Confirm Order'
    And el usuario deberia ver un mensaje de orden exitosa