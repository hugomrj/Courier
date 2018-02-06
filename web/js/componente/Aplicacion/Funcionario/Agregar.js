

window.onload = function() {

    AjaxPeticion( getRutaAbsoluta()+ '/MenuPrincipal','nav');   
          
    Funcionario_basicform();


    var funcia_guardar = document.getElementById('funcia_guardar');
    funcia_guardar.addEventListener('click',
        function() 
        {
            
            if (Funcionario_AgregarEditar_validacion())
            {               
                
                var form = document.getElementById("funcia_form");                            
                var accion =  getRutaAbsoluta()+"/Funcionario/Controlador/Agregar"; 
                
                var control = AjaxPeticionURL( accion, getDataForm(form) );                
                if (!(isNaN(control))){                                          
                     window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Registro.jspx?id="+control.toString().trim();                        
                 }
                else{                    
                    alerta_error(control);
                }
                
            }
        }, 
        false
    );  

    
    

    var funcia_cancelar = document.getElementById('funcia_cancelar');
    funcia_cancelar.addEventListener('click',
        function()
        {
            window.location = getRutaAbsoluta()+"/Aplicacion/Funcionario/Lista.jspx";
        },
        false
    );        


    document.getElementById('funf_cedula').focus();       
    document.getElementById('funf_cedula').select();       


};




window.onresize = function() {
    
    var nodeList = document.querySelectorAll('.fondo_oscuro');
    for (var i = 0; i < nodeList.length; ++i) {
        document.getElementById(nodeList[i].id).style.height = document.body.scrollHeight;        
    }

}


