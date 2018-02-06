


function Labores_tabla_registro( tabla )
{

    var table = document.getElementById( tabla ).getElementsByTagName('tbody')[0];
    var rows = table.getElementsByTagName('tr');

    for (var i=0 ; i < rows.length; i++)
    {
        rows[i].onclick = function()
        {
                var linea_id = this.dataset.linea_id;     
                location.href= getRutaAbsoluta()+ "/Aplicacion/Labor/Registro.jspx?id="+linea_id;
                  
        };       
    }
   // Labores_tabla_formato(tabla);

};



function  Labores_tabla_formato ( tabla ){
    

        var table = document.getElementById( tabla ).getElementsByTagName('tbody')[0];
        var rows = table.getElementsByTagName('tr');

        for (var i=0 ; i < rows.length; i++)
        {

            cell = table.rows[i].cells[0] ;                                  
            cell.innerHTML = fmtNum(cell.innerHTML); 
            
        }
        
    
}

