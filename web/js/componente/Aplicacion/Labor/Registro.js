var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
        
        
    Labor_basicform_disabled();        
        
    Labor_basicform_Json(id);    
    Labor_basicform();
    


    
    var labr_agregar = document.getElementById('labr_agregar');
    labr_agregar.addEventListener('click',
        function()
        {
            window.location=  getRutaAbsoluta()+ "/Aplicacion/Labor/Agregar.jspx";
        },
        false
    );        


    var labr_editar = document.getElementById('labr_editar');
    labr_editar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Editar.jspx?id="+id;
        },
        false
    );        




    var labr_borrar = document.getElementById('labr_borrar');
    labr_borrar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Borrar.jspx?id="+id;
        },
        false
    );        
    
    
    var labr_listar = document.getElementById('labr_listar');
    labr_listar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Lista.jspx";
        },
        false
    );        






};

window.onresize = function() {    
    var nodeList = document.querySelectorAll('.fondo_oscuro');
    for (var i = 0; i < nodeList.length; ++i) {
        document.getElementById(nodeList[i].id).style.height = document.body.scrollHeight;        
    }
}


