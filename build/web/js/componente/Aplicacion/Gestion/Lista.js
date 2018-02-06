
var page = 1;

window.onload = function() {

    page = getParametroValor('page'); 


// crear una funcion que guarde una session para enviar al metodo de validacion
// o crear una funcion para que se encargue de la autenficacion


var pathname = window.location.pathname;
alert(pathname);
alert(getRutaAbsoluta());





    AjaxPeticion(getRutaAbsoluta()+'/MenuPrincipal','nav');      
    
    Gestiones_tabla_lista ( );    

    // darle funcionalidad a buscar
    var buscar = document.getElementById('buscar');
    buscar.addEventListener('keyup',
        function(event) {
            if(event.keyCode === 13)
            {
                Labores_tabla_lista( );
            }
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



function Gestiones_tabla_lista ( ){

    
            AjaxPeticion( getRutaAbsoluta()+'/Gestion/Coleccion/Lista?buscar='
                +document.getElementById('buscar').value  
                +"&page="+page
                ,'tab_body');          
                   
                
            // paginacion                                
            var totalregistros = document.getElementById("gestion_tabla").dataset.totalregistros;  
            AjaxPeticion( getRutaAbsoluta()+'/Paginacion?page='+page+"&totalregistros="+totalregistros
                +""
                ,'div_paginacion');     
                
                
            paginacionajax ( "Gestiones_tabla_lista();"  );            
            Gestion_tabla_registro("gestion_tabla" );
            
    
    
    
            var gesl_agregar = document.getElementById('gesl_agregar');
            gesl_agregar.addEventListener('click',
                function(event) {
                    location.href= getRutaAbsoluta()+"/Aplicacion/Gestion/Agregar.jspx";
                },
                false
            );    
    
    
}




