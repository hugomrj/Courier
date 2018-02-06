/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.gestion;


/**
 *
 * @author hugo
 */
public class GestionSQL {
     
public String  Lista ( String buscar)
            throws Exception {
    
            String sql = "";        
     
            
            String condicionBusqueda = "";
            
            if (!(buscar.equals("")))
            {
                buscar = "%"+buscar+"%";
                buscar = buscar.replaceAll(" ", "%");
            
                condicionBusqueda = " and  " +
                        " ( CAST ( gestiones.cliente AS text) || solicito || destino ||  CAST ( gestor AS text) \n" +
                        "	 ||  ciudad  ||   clientes.nombre || ' ' || clientes.apellido || clientes.razon_social\n" +
                        "	 || labores.descripcion\n" +
                        "	  ) ilike  '%" + buscar+ "%' "; 
            }            
                        
            
            sql = " "+
                "	SELECT \n" +
                "	  gestiones.gestion,   gestiones.cliente,   gestiones.fecha,   gestiones.solicito, \n" +
                "	  gestiones.destino,   gestiones.gestor,   gestiones.ciudad,   gestiones.labor, \n" +
                "	  gestiones.monto,   gestiones.retorno,   gestiones.total, \n" +
                "	trim(clientes.nombre || ' ' || clientes.apellido || clientes.razon_social) as cliente_nombre,\n" +
                "	  labores.descripcion labor_descripcion,\n" +
                "	  (funcionarios.nombre || ' ' || funcionarios.apellido) as gestor_nombre\n" +
                "	FROM \n" +
                "	  aplicacion.gestiones,   aplicacion.clientes,   aplicacion.labores, aplicacion.funcionarios\n" +
                "	WHERE \n" +
                "	  clientes.cliente = gestiones.cliente AND\n" +
                "	  labores.labor = gestiones.labor AND\n" +
                "	  funcionarios.funcionario = gestiones.gestor\n" +
                "	  AND funcionarios.categoria = 2\n" +
                "\n" + condicionBusqueda +
                "	  order by fecha\n" +
                "" ;
            
            
            return sql ;
             
    }              



}
