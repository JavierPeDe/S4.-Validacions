const form = document.getElementById("formId");

function validacion() {

    var error = 0;


    var inputEmail1 = document.forms["form"]["inputEmail1"];
    var inputEmail2 = document.forms["form"]["inputEmail2"];
    var inputPassword1 = document.forms["form"]["inputPassword1"];
    var inputPassword2 = document.forms["form"]["inputPassword2"];
    var inputAddress = document.forms["form"]["inputAddress"];
    var inputCity = document.forms["form"]["inputCity"];
    var inputZip = document.forms["form"]["inputZip"];
    var gridCheck = document.forms["form"]["gridCheck"];
    form.classList.remove("is-invalid");
    if (inputEmail1.value == "") {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("eEmail1").textContent = "Campo obligatorio";
        error++;
    }
    else if (!(validarEmail(inputEmail1.value))) {
        inputEmail1.classList.add("is-invalid");
        document.getElementById("eEmail1").textContent = "Este email no existe";
        error++;
    }

    if (inputEmail2.value == "") {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("eEmail2").textContent = "Campo obligatorio";
        error++;
    }
    else if (inputEmail2.value !== inputEmail1.value) {
        inputEmail2.classList.add("is-invalid");
        document.getElementById("eEmail2").textContent = "Email no coincide";
        error++;
    }

    if (inputPassword1.value == "") {
        inputPassword1.classList.add("is-invalid");
        document.getElementById("ePass1").textContent = "Campo obligatorio";
        error++;
    }
    else if (!(validarPassword(inputPassword1.value))) { //nivel2
        inputPassword1.classList.add("is-invalid");
        document.getElementById("ePass1").textContent = "Contraseña no valida: Minimo una mayuscula, un numero y 8 caracteres";
        error++;
    }
    if (inputPassword1.value !== inputPassword2.value) {
        inputPassword2.classList.add("is-invalid");
        document.getElementById("ePass2").textContent = "Contraseñas no coinciden";
        error++;
    }

    if (inputAddress.value == "") {
        inputAddress.classList.add("is-invalid");
        document.getElementById("eAddress").textContent = "Campo obligatorio";
        error++;
    }

    if (inputCity.value == "") {
        inputCity.classList.add("is-invalid");
        document.getElementById("eCity").textContent = "Campo obligatorio";
        error++;
    }
    if (inputZip.value == "") {
        inputZip.classList.add("is-invalid");
        document.getElementById("eZip").textContent = "Campo obligatorio";
        error++;
    }
    //Codigo postal español 5 digitos y esta comprendido entre el 01000 y 52999
    else if (inputZip.value.length != 5 || parseInt(inputZip.value) < 1000 || parseInt(inputZip.value) > 52999) {
        inputZip.classList.add("is-invalid");
        document.getElementById("eZip").textContent = "Codigo postal no valido";
        error++;
    }
    
    if (!gridCheck.checked) {
        gridCheck.classList.add("is-invalid");
        document.getElementById("eCheck").textContent = "Es obligatorio aceptar las condiciones";
        error++;
    }

    return (error == 0);
}
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);


function validarEmail(email) {
    //Estandard Official: RFC 5322:
    let argu;
    var re_email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    return re_email.test(email);
}
//Nivel 2 Funcion para validar contraseñas 
// Mínim una majúscula
// Mínim un número
// Mínim 8 caràcters
function validarPassword(pass){
    let re_pass= /^(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\S{8,}/ 
    return re_pass.test(pass);
}
