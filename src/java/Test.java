
import java.util.List;
import java.util.Map;
import nebuleuse.ORM.Persistencia;
import py.com.itx.aplicacion.cliente.Cliente;
import py.com.itx.aplicacion.funcionario.Funcionario;
import py.com.itx.aplicacion.funcionario.FuncionarioDAO;
import py.com.itx.aplicacion.funcionario_categoria.FuncionarioCategoria;
import py.com.itx.aplicacion.gestion.Gestion;
import py.com.itx.aplicacion.gestor.GestorDAO;
import py.com.itx.sistema.usuario.Usuario;



public class Test {
    
    
    public static  void main(String[] args) throws Exception   {

        
        
                Persistencia p = new Persistencia();

                
            Gestion g = new Gestion();
            Cliente c = new Cliente();
            Funcionario f = new Funcionario();
            
            
            
               c = (Cliente) p.filtrarId(c, 8);
               f = (Funcionario) p.filtrarId(f, 7);
               g = (Gestion) p.filtrarId(g, 5);
               
               
            
            g.setCliente(c);
            g.setGestor(f);
            
            
            
            
            g.setGestion(0);            
            p.update(f);
            
            
 
            
                
    }
    
    
    
    
}


