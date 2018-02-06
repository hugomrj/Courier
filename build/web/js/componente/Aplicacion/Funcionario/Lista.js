
var page = 1;

window.onload = function() {

    page = getParametroValor('page'); 
    AjaxPeticion('../../MenuPrincipal','nav');   
      
    Funcionarios_tabla_lista();    
   
   
    
    var buscar = document.getElementById('buscar');
    buscar.addEventListener('keyup',
        function(event) {
            if(event.keyCode == 13)
            {
                Funcionarios_tabla_lista();
            }
        },
        false
    );
               
      
      
    
    var fun_agregar = document.getElementById('fun_agregar');
    fun_agregar.addEventListener('click',
        function(event) {
            location.href="../Funcionario/Agregar.jspx";
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








function Funcionarios_tabla_lista ( ){

        AjaxPeticion( getRutaAbsoluta()+'/Funcionario/Coleccion/Lista?buscar='
            +document.getElementById('buscar').value  
            +"&page="+page
            ,'tab_body');          

        Funcionario_tabla_registro("funcionarios_tabla");


        // paginacion                                
        var totalregistros = document.getElementById("funcionarios_tabla").dataset.totalregistros;  
        AjaxPeticion( getRutaAbsoluta()+ '/Paginacion?page='+page+"&totalregistros="+totalregistros
            +""
            ,'div_paginacion');     

        paginacionajax ( "Funcionarios_tabla_lista ( );"  );            

}




