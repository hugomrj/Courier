/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package py.com.itx.aplicacion.gestion;

import java.util.Date;
import py.com.itx.aplicacion.cliente.Cliente;
import py.com.itx.aplicacion.labor.Labor;
import py.com.itx.aplicacion.funcionario.Funcionario;



/**
 *
 * @author hugo
 */


public class Gestion {
    
    private Integer gestion;
    private Cliente cliente;
    private Date fecha;
    private String solicito;
    private String destino;
    private Funcionario  gestor;
    private String ciudad;
    private Labor labor;
    private Long monto;
    private Long retorno;
    private Long total;

    public Integer getGestion() {
        return gestion;
    }

    public void setGestion(Integer gestion) {
        this.gestion = gestion;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getSolicito() {
        return solicito;
    }

    public void setSolicito(String solicito) {
        this.solicito = solicito;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public Funcionario getGestor() {
        return gestor;
    }

    public void setGestor(Funcionario gestor) {
        this.gestor = gestor;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Labor getLabor() {
        return labor;
    }

    public void setLabor(Labor labor) {
        this.labor = labor;
    }

    public Long getMonto() {
        return monto;
    }

    public void setMonto(Long monto) {
        this.monto = monto;
    }

    public Long getRetorno() {
        return retorno;
    }

    public void setRetorno(Long retorno) {
        this.retorno = retorno;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
    
    
    
    
}

