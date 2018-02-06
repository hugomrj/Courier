var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
        
        
    Gestion_basicform_disabled();        
        
    Gestion_basicform_Json(id);   
    
    Gestion_basicform();
    


    
    var gesr_agregar = document.getElementById('gesr_agregar');
    gesr_agregar.addEventListener('click',
        function()
        {
            window.location=  getRutaAbsoluta()+ "/Aplicacion/Gestion/Agregar.jspx";
        },
        false
    );        


    var gesr_editar = document.getElementById('gesr_editar');
    gesr_editar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Editar.jspx?id="+id;
        },
        false
    );        




    var gesr_borrar = document.getElementById('gesr_borrar');
    gesr_borrar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Borrar.jspx?id="+id;
        },
        false
    );        
    
    
    var gesr_listar = document.getElementById('gesr_listar');
    gesr_listar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Gestion/Lista.jspx";
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


