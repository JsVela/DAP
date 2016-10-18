$(function(){
  $(':input').keyup(habilitarBtns);
  $('#clean').click(cleanForm);
  $('#send').click(validateForm);
});

function habilitarBtns(){
    $('#send').removeClass('disabled');
    $('#clean').removeClass('disabled');
}

function cleanForm(){
    $(':input').val('');
    $('#send').addClass('disabled');
    $('#clean').addClass('disabled');
}

function deshabilitarBtns(){
    if(validateForm()){
        $(':input').val('');
        $('#send').addClass('disabled');
        $('#clean').addClass('disabled');
    }
}
function validateForm(){
     var nombre = $('#nombre').val().trim();
     var mensaje = $('#textarea1').val().trim();
     var email = $('#email').val().trim();
     var telefono = $('#tel').val().trim();
     if(nombre === '' || mensaje === '' || email === '' || telefono === ''){
         alert('Falta llenar todos los espacios');
         return false;
     }else {
         alert('Name: ' +nombre+ '\n Message: '+mensaje+ '\n Email:' +email+ '\n Telephone: '+ telefono+ '\n\n Submiteo exitoso');
         $(':input').val('');
         $('#clean').addClass('disabled');
         $('#clean').addClass('disabled');
         return true;
     }

}
