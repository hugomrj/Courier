
var id = 0;
var id = getParametroValor("id");    

window.onload = function() {
    
    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');       
    
    Funcionario_basicform_Json(id);      
    Funcionario_basicform();
 

    var funf_cedula = document.getElementById('funf_cedula');
    funf_cedula.focus();
    funf_cedula.select();

    
    
    var funce_aceptar = document.getElementById('funce_aceptar');
    funce_aceptar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            
            if (Funcionario_AgregarEditar_validacion())
            {                               
                
                var form = document.getElementById("funce_form");            
                var accion =  getRutaAbsoluta()+"/Funcionario/Controlador/Editar"; 
                var control = AjaxPeticionURL( accion, getDataForm(form) );                


                if (!(isNaN(control)))
                {                
                    funce_cancelar.click();
                }
                else
                {    
                    alerta_error(control);
                }                
            }  
        },
        false
    );        

    
    
    
    
    var funce_cancelar = document.getElementById('funce_cancelar');
    funce_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");                
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Registro.jspx?id="+ id ;                        
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


