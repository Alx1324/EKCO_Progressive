function postToGoogle() {
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    var field3 = $("#telField").val();

    if (field1 == "") {
        alert('Por favor ingrese su nombre');
        document.getElementById("nameField").focus();
        return false;
    }
    if (field2 == "") {
        alert('Por favor ingrese un email válido');
        document.getElementById("emailField").focus();
        return false;
    }
    if (field3 == "" || field3.length > 10 || field3.length < 8) {
        alert('Por favor ingrese su teléfono');
        document.getElementById("telField").focus();
        return false;
    }




    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd9HrTmyFgcWI_ONqquXQ282oHAm7bXBEhO7MYP_ah-DqGQcw/formResponse?",
        data: { "entry.1859304656": field1, "entry.78817541": field2, "entry.746077822": field3 },
        type: "POST",
        dataType: "xml",
        success: function (d) {
        },
        error: function (x, y, z) {

            $('#success-msg').show();
            $('#form').hide();
            //setTimeout(function () {
            //window.location.href = "/";
            //}, 3000);

        }
    });
    return false;
}