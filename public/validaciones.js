// Funciones para validar el formulario
function validaForm(){
  // Campos de texto
  if($("#nombre").val() == ""){
      Swal.fire('El campo Nombre no puede estar vacío.');
      $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
      return false;
  }
  if($("#apellidos").val() == ""){
    Swal.fire('El campo Apellidos no puede estar vacío.');
      $("#apellidos").focus();
      return false;
  }
  if($("#clave").val() == ""){
    Swal.fire('El campo Clave no puede estar vacío.');
      $("#clave").focus();
      return false;
  }
  if($("#password").val() == ""){
    Swal.fire('El campo Password no puede estar vacío.');
      $("#password").focus();
      return false;
  }
  return true; // Si todo está correcto
}

$(function() {
    $("#btnGuardar").on('click', function() { 
        // Constantes para el DOM
         const nombre    = $('#nombre').val();
         const apellidos = $('#apellidos').val();
         const clave     = $('#clave').val();
         const password  = $('#password').val();
        //e.preventDefault();
        console.log({
            nombre: nombre,
            apellidos: apellidos,
            clave: clave,
            password: password
        });
        if(validaForm()){ 
              Swal.fire({
                title: '¿Toda la información es correcta?',
                text: "¡No podrás revertir ese cambio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, guardar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Guardado',
                    'Registro guardado correctamente.',
                    'success'
                  )
                  $.ajax({
                    method: "POST",
                    url: "http:localhost:8080/api/usuarios",
                    data: JSON.stringify({ 
                        "name": nombre,
                        "lname": apellidos,
                        "key": clave,
                        "pass": password }),
                    contentType: "application/json"
                  });
                //   $.ajax("/api/usuarios",{json_string:JSON.stringify({
                //     nombre: nombre,
                //     apellidos: apellidos,
                //     clave: clave,
                //     password: password
                // })});
                }
              })
        }
    });    
});


// $('#btnGuardar').on('click', function(){
//   Swal.fire({
//     title: '¿Toda la información es correcta?',
//     text: "¡No podrás revertir ese cambio!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si, guardar',
//     cancelButtonText: 'Cancelar'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Guardado',
//         'Registro guardado correctamente.',
//         'success'
//       )
//     }
//   })
// });

// $('#btnGuardarActualizar').on('click', function(){
//   Swal.fire({
//     title: '¿Toda la información es correcta?',
//     text: "¡No podrás revertir ese cambio!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si, guardar',
//     cancelButtonText: 'Cancelar'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Guardado',
//         'Registro guardado correctamente.',
//         'success'
//       )
//     }
//   })
// });

// $('#btnEliminar').on('click', function(){
//   const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false
//   })
  
//   swalWithBootstrapButtons.fire({
//     title: '¿Estas seguro?',
//     text: "¡No podrás revertir ese cambio!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Si, eliminar',
//     cancelButtonText: 'No, cancelar',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire(
//         'Eliminado',
//         'El registro ha sido eliminado.',
//         'success'
//       )
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelado',
//         'No se guardo ningun cambio.',
//         'error'
//       )
//     }
//   })
// });