/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


package py.com.itx.aplicacion.funcionario;
import java.util.Date;
import py.com.itx.aplicacion.funcionario_categoria.FuncionarioCategoria;
import py.com.itx.sistema.usuario.Usuario;



/**
 *
 * @author hugo
 */


public class Funcionario {
    
    private Integer funcionario;
    private Integer cedula;
    private String nombre;
    private String apellido;
    private Date fecha_nacimiento;
    private FuncionarioCategoria categoria;
    private Usuario usuario;

    public Integer getFuncionario() {
        return funcionario;
    }

    public void setFuncionario(Integer funcionario) {
        this.funcionario = funcionario;
    }

    public Integer getCedula() {
        return cedula;
    }

    public void setCedula(Integer cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Date getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(Date fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public FuncionarioCategoria getCategoria() {
        return categoria;
    }

    public void setCategoria(FuncionarioCategoria categoria) {
        this.categoria = categoria;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    
}


