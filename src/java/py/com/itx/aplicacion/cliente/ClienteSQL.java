/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.cliente;

import nebuleuse.ORM.Persistencia;




/**
 *
 * @author hugo
 */
public class ClienteSQL {
    
    
public String  Lista ( String buscar)
            throws Exception {
    
            String sql = "";        
     
            
            String condicionBusqueda = "";
            
            if (!(buscar.equals("")))
            {
                buscar = "%"+buscar+"%";
                buscar = buscar.replaceAll(" ", "%");
            
                condicionBusqueda = " where ( CAST ( cedula AS text) || tipo || ruc ||  nombres ||  direccion ) ilike '%" + buscar+ "%' ";
 
            }            
                        
            
            sql = " "+
                "	select cliente, tipo, ruc, cedula, nombres, direccion\n" +
                "	 from \n" +
                "	(\n" +
                "	SELECT cliente,  'Fisica' as tipo ,  ruc, cedula,\n" +
                "	(nombre || ' ' || apellido) as  nombres,direccion\n" +
                "	  FROM aplicacion.clientes\n" +
                "	  where cliente_tipo = 'F'\n" +
                "	union\n" +
                "\n" +
                "	SELECT cliente, 'Juridica' as tipo , ruc, 0, razon_social, \n" +
                "	       direccion\n" +
                "	  FROM aplicacion.clientes\n" +
                "	 where cliente_tipo = 'J'\n" +
                "	) as c\n" +                
                "\n" + condicionBusqueda +
                "	order by cliente\n" +
                "" ;
                        
            
            
            
            
            
            return sql ;
             
    }              




    
}
