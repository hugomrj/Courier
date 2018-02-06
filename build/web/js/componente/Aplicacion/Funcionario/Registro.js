

var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
        
    Funcionario_basicform_Json(id);            
    Funcionario_basicform_disabled();
    
    
    
    var funcr_agregar = document.getElementById('funcr_agregar');
    funcr_agregar.addEventListener('click',
        function()
        {
            window.location= getRutaAbsoluta()+"/Aplicacion/Funcionario/Agregar.jspx";
        },
        false
    );        


    var funcr_editar = document.getElementById('funcr_editar');
    funcr_editar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Editar.jspx?id="+id;
        },
        false
    );        


    var funcr_borrar = document.getElementById('funcr_borrar');
    funcr_borrar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Borrar.jspx?id="+id;
        },
        false
    );        
    
    
    var funcr_listar = document.getElementById('funcr_listar');
    funcr_listar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Lista.jspx";
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


