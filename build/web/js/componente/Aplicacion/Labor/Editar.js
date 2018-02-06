
var id = 0;
var id = getParametroValor("id");    

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
    
    Labor_basicform_Json(id);    
    Labor_basicform();


    document.getElementById('labf_labor').disabled = true;

    var labf_descripcion = document.getElementById('labf_descripcion');
    labf_descripcion.focus();
    labf_descripcion.select();
        
        
        
    var labe_aceptar = document.getElementById('labe_aceptar');
    labe_aceptar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            
            if (Labor_AgregarEditar_validacion())
            {
                var form = document.getElementById("labe_form");                            
                var accion =  getRutaAbsoluta()+"/Labor/Controlador/Editar"; 
                
                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                

                if (!(isNaN(control)))
                {   
                   //alert("es numero");                        
                    window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Registro.jspx?id="+control.toString().trim();                    
                }
                else
                {    
                    alerta_error(control);
                }
                                
            }        
            
        },
        false
    );        

    
    
    
    
    
    
    
    var labe_cancelar = document.getElementById('labe_cancelar');
    labe_cancelar.addEventListener('click',
        function()
        {
            var id = getParametroValor("id");    
            window.location = getRutaAbsoluta()+"/Aplicacion/Labor/Registro.jspx?id="+id;
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









