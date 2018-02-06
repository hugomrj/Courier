/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.gestor;

/**
 *
 * @author hugo
 */
public class GestorSQL {
     
public String  Lista ( String buscar)
            throws Exception {
    
            String sql = "";        
                 
            String condicionBusqueda = "";
            
            if (!(buscar.equals("")))
            {
                buscar = "%"+buscar+"%";
                buscar = buscar.replaceAll(" ", "%");
            
                condicionBusqueda = " " +
                "	  and \n" +
                "	  ( CAST ( funcionario AS text) || CAST ( cedula AS text) || nombre || apellido   \n" +
                "	      )  ilike '%" + buscar+ "%' "; 
            }            
                        
            
            
            sql = " "+
                "	SELECT funcionario, cedula, nombre, apellido, fecha_nacimiento, categoria, \n" +
                "	       funcionarios.usuario, usuarios.cuenta\n" +
                "	  FROM aplicacion.funcionarios, administracion.usuarios\n" +
                "	  where " +
                "               usuarios.usuario = funcionarios.usuario " +
                "               and categoria = 2\n" +
                         condicionBusqueda +
                "" ;
            
            
            return sql ;
             
    }              



}
