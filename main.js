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
        document.getElementById("eEmail1").textContent = "Email no aceptado";
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
    else if (false) { //nivel2

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
        document.getElementById("eCheck").textContent = "Acepta las bases";
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
    var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    argu = re.test(email);
    return argu;
}