/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.funcionario;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;



@WebServlet(name = "Funcionario_Controlador_Agregar",
        urlPatterns = {"/Funcionario/Controlador/Agregar"})


public class Funcionario_Controlador_Agregar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
            response.setContentType("text/html;charset=UTF-8");        
            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();

            
        try
        {

            Funcionario  instancia = new Funcionario();
            Persistencia persistencia = new Persistencia();
            instancia = (Funcionario) persistencia.extraerRegistro(request, instancia);
            
            instancia = (Funcionario) persistencia.insert(instancia);
            out.println(instancia.getFuncionario() ) ;      
            
        }
        
        
        
        catch (Exception ex) {            
            System.out.println(ex.getMessage());            
            out.println(ex.getMessage());                  
        }
        
        


    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
