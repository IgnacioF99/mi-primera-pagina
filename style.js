function showAlert() {
    alert("!Hola, esta es una alerta desde javascript");
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

 //Agregar un oyente de eventos al formulario para manejar el evento “submit”:
//En este ejemplo se utiliza “event.preventDefault()” para evitar que el formulario se
//envíe de la manera predeterminada, lo que permite realizar la validación antes de
//enviar los datos.
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

//Sumar una función de validación que verifique los criterios deseados:
//Aquí la función “validateEmail()” indica que el mail contenga un “@” y un “.” para
//ser válido
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  