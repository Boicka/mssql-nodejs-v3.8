$(function(){
    $('#getUser').on('click', function(){
        $.ajax({
            url: '/api/usuarios/',
            type: 'GET',
            dataType: 'json',
            success: function(user) {
                user.forEach(e => console.log(e));
                let tbody = $('tbody');
                tbody.html('');
                user.forEach(element => {
                    tbody.append(`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>${element.apellido}</td>
                        <td>${element.clave}</td>
                    </tr>
                    `);
                });
            },
            error: function(xhr, status) {
                console.log(xhr);
            },
            complete: function(xhr, status){
                console.log('Se realizo la petición');
            }
        })
    });

    $('#btnReadAll').on('click', function() {
        $.ajax({
            url: '/api/usuarios/',
            type: 'GET',
            dataType: 'json',
            success: function(user) {
                let tbody = $('tbody');
                tbody.html('');
                user.forEach(element => {
                    tbody.append(`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.nombre}</td>
                        <td>${element.apellido}</td>
                        <td>${element.clave}</td>
                    </tr>
                    `);
                })
            },
            error: function(xhr, status) {
                console.log(xhr);
            },
            complete: function(chr, status){
                console.log('Se realizo la petición');
            }
        })
    });

    // Buscar por id
    $('#btnRead').on('click', function() {
        let valor = $('#id').val();
        $.ajax({
            url: '/api/usuarios/' + valor,
            type: 'GET',
            data: {
                id: valor
            },
            dataType: 'json',
            success: function(user) {
                let tbody = $('tbody');
                tbody.html('');
                user.forEach(user => {
                    tbody.append(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.nombre}</td>
                        <td>${user.apellido}</td>
                        <td>${user.clave}</td>
                    </tr>
                    `);
                })
            },
            error: function(xhr, status) {
                console.log(xhr, status, 'aqui');
            },
            complete: function(chr, status){
                console.log('Se realizo la petición');
            }
        })
    });
    
    $('#btnEliminar').on('click', function() {
        let valor = $('#idElm').val();
        $.ajax({
            url: '/api/usuarios/' + valor,
            type: 'DELETE',
            data: {
                id: valor
            },
            dataType: 'json',
            success: function(mensaje) {
                console.log(mensaje);
             },
            error: function(xhr, status) {
                console.log(xhr);
            },
            complete: function(xhr, status){
                console.log('Se realizo la petición');
            }
        })
    });

    $('#btnGuardar').on('click', function(e) {
        e.preventDefault();
        const name = $('#nombre').val();
        const lname = $('#apellidos').val();
        const key = $('#clave').val();
        const pass = $('#password').val();
        const datos ={name,lname,key,pass};
        console.log(datos);
        const datajson = JSON.stringify(datos);
        console.log(datajson);
        $.ajax({
            url: '/api/usuarios/',
            type: 'POST',
            data: JSON.stringify(datos),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(user) {
                console.log(user);
             },
            error: function(obj) {
                console.log(obj);
            }
        })
    });

    // Buscar el id para actualizar
    $('#btnUpdate').on('click', function() {
        let valor = $('#id').val();
        $.ajax({
            url: '/api/usuarios/' + valor,
            type: 'GET',
            data: {
                id: valor
            },
            dataType: 'json',
            success: function(user) {
                console.log(user);
                $('#nombre').val(user.name);
                $('#apellidos').val(user.lname);
                $('#clave').val(user.key);
                $('#password').val(user.name);
            },
            error: function(xhr, status) {
                console.log(xhr, status);
            },
            complete: function(xhr, status){
                alert('Se realizo la petición');
            }
        })
        $('#btnGuardarActualizar').on('click', function(e) {
            // e.preventDefault();
            // const name = $('#nombre').val();
            // const lname = $('#apellidos').val();
            // const key = $('#clave').val();
            const pass = $('#password').val();
            console.log(pass);
            const datos ={key: pass};
            // const datajson = JSON.stringify(datos);
            // console.log(datajson);
            $.ajax({
                url: '/api/usuarios/',
                type: 'PUT',
                data: JSON.stringify(datos),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(user) {
                    console.log(user);
                 },
                error: function(obj) {
                    console.log(obj);
                }
            })
        });
    });
    
})