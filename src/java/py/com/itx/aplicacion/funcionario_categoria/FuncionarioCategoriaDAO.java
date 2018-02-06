/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.funcionario_categoria;



import java.io.IOException;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import nebuleuse.ORM.Conexion;
import nebuleuse.ORM.Secuencia;
import nebuleuse.util.Lista;
import py.com.itx.sistema.usuario.Usuario;

public class FuncionarioCategoriaDAO {
    
        Conexion conexion = new Conexion();
        Statement  statement ;
        ResultSet resultset;  
        Lista lista ;
    
    
    
    public FuncionarioCategoriaDAO ( ) throws IOException  {
        conexion.conectar();
        lista = new Lista();
    }

    
    public List<Map<String, Object>>  ListaSimple (  )
            throws Exception {
   
            statement = conexion.getConexion().createStatement();  
            
            String sql = 
                    " SELECT categoria, descripcion\n" +
                    "  FROM aplicacion.funcionario_categoria\n" +
                    "  order by categoria";
    
            
            resultset = statement.executeQuery(sql);     

            return lista.resultsetToList(resultset ) ;
             
    }              
    
    
    
    
}
