import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Tooltip, 
  UncontrolledTooltip,
} from 'reactstrap';

import Utils from '../Utils';
import Ejecutivo from '../Componentes/Ejecutivo';

import datosCliente from './DatosCliente'
let cliente ={clave_cliente:'', rfc:''}
let vacio = {
      clave: '',
      num_oc_cliente: '',
      rfc: '',
      razon_social: '',
      direccion_entrega: '',
      direccion_fiscal: '',
      contacto_entrega: '',
      ejecutivo: '',
      moneda:'',
      comentarios:'',
    }

class BuscarCliente extends Component {
  state = {
      existe_cliente: false,
      clientes:{}
    }

  obtenerCliente(clave){

    let utils = new Utils();
    const url = utils.getUrl() + "clientes/"; // + clave + "/";
    let headers = utils.getHeaders();

    fetch(url, {
        credentials: 'same-origin',
        method: 'GET',
        headers: headers
    })
    .then(response => response.json())
    .then(json=> this.setState({clientes:json.results})) 
  }
  
  mostrarCliente(){
    if(document.getElementById('clave_cliente')){
      let clientes = this.state.clientes;      
      let utils = new Utils();
      let clave = (document.getElementById('clave_cliente'))?document.getElementById('clave_cliente').value:'';
      let claveCl = document.getElementById("clave_cliente").value;
      let rfc = document.getElementById("hf-rfc").value;
      let razon = document.getElementById("hf-RazonSocial").value;

      if(claveCl != ""){
        cliente = clientes.find(clienteOr => clienteOr.clave.toString().toUpperCase().search(clave.toUpperCase()) > -1);  
      }
      if(rfc != ""){
        cliente = clientes.find(clienteOr => clienteOr.rfc.toString().toUpperCase().search(rfc.toUpperCase()) > -1);    
      }
      if(razon != ""){
        cliente = clientes.find(clienteOr => clienteOr.razon_social.toString().toUpperCase().search(razon.toUpperCase()) > -1); 
      }
      cliente = cliente?cliente:vacio;
      let entrega = ['', ''];
      if(cliente.direccionesentrega.length > 0){
        entrega = cliente.direccionesentrega[0].split(":");
      }

      document.getElementById("clave_cliente").value = cliente.clave;
      document.getElementById("hf-rfc").value = cliente.rfc;
      document.getElementById("hf-RazonSocial").value = cliente.razon_social;
      document.getElementById("dirEnt").value = entrega[0];
      document.getElementById("dirFis").value = utils.acomodarDirFiscal(cliente);
      document.getElementById("hf-ContEnt").value = entrega[1];

      return cliente.ejecutivos;
    }
  }

  submitHandle(event){
    event.preventDefault();
    event.stopPropagation();

    let orden = {
      fecha: '',
      noRheem: '',
      noDist: document.getElementById("hf-numOCDistribuidor").value,
      comentarios_iniciales:document.getElementById("hf-ComentOC").value,
      moneda:document.getElementById("hf-Moneda").value,
      codigo_promo:'',
      cliente:{
        clave_cliente: document.getElementById("clave_cliente").value,
        rfc: document.getElementById("hf-rfc").value,
        razon_social: document.getElementById("hf-RazonSocial").value,
        direccion_entrega: document.getElementById("dirEnt").value,
        direccion_fiscal: document.getElementById("dirFis").value,
        contacto_entrega: document.getElementById("hf-ContEnt").value,
        ejecutivo: document.getElementById("Ejecutivodeventa").value,
      },
      detalle:[],
      gastos_envio:'',
      subtotal:'',
      iva:'',
      total:''
    }

    let ordenSr = btoa(JSON.stringify(orden));
    //to={`/ordenes/orden-inicio/${clienteSr}`}
    document.location.href=`#/ordenes/orden-inicio/${ordenSr}`
  }


  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Creación de Orden de Compra</strong> <small className="text-muted"> Selección de Cliente</small>
              </CardHeader>
              <CardBody>
                <Form action="#" method="post" className="form-horizontal" onSubmit={this.submitHandle}>
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="clave_cliente">Clave de Cliente <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="clave_cliente"  name="clave_cliente" required />
                    </Col>
                    <Col md="6">
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary" onClick={()=>{this.obtenerCliente(document.getElementById('clave_cliente').value);}}><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                    </Col>
                  </FormGroup>
                  

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-rfc">RFC <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-rfc" name="hf-rfc" required />
                    </Col>

                   <Col md="2">
                      <Label htmlFor="hf-numOCDistribuidor">OC Distribuidor <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-numOCDistribuidor" name="hf-numOCDistribuidor" placeholder="N° OC Distribuidor" required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-RazonSocial">Razón Social <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-RazonSocial" name="hf-RazonSocial" required />
                    </Col>
                    <Col md="2 align-right">
                      <Label htmlFor="hf-dirFis">Dirección Fiscal <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="dirFis" name="dirFis" required />
                    </Col>
                  </FormGroup>

                 <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-dirEnt">Dir. de Entrega <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="dirEnt" name="dirEnt"  required />
                    </Col>
                     <Col md="2">
                      <Label htmlFor="hf-ContEnt">Contacto Entrega <span className="text-danger">*</span></Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-ContEnt" name="hf-ContEnt"  required />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                     <Col md="2">
                      <Label htmlFor="Ejecutivodeventa">Ejecutivo de Venta <span className="text-danger">*</span></Label>
                      </Col>
                    <Col md="4" id="colEjecutivos">
                      <Ejecutivo ejecutivo={this.mostrarCliente()} />
                    </Col>


                    <Col md="2">
                      <Label htmlFor="hf-Moneda">Moneda</Label>
                    </Col>
                    <Col md="4">
                      <select className="form-control" id="hf-Moneda">
                          <option>MXN</option>
                          <option>USD</option>
                      </select>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-ComentOC">Comentarios</Label>
                    </Col>
                    <Col md="10">
                      <Input type="textarea" name="hf-ComentOC" id="hf-ComentOC" rows="3"
                             placeholder="Comentarios..." />
                    </Col>
                  </FormGroup>
                 <div className="row justify-content-center">
            
            <Row>
                <Col xs="12" sm="6">
                  <Button type="submit"  className="btn btn-primary">Continuar</Button>
                </Col>
                <Col xs="12" sm="6">
                  <Link to="../dashboard" className="btn btn-secondary">Salir</Link>
                </Col>
           
            </Row>
        </div>    


                </Form>
              </CardBody>
             
            </Card>
        
          </Col>

        </Row>


        
      </div>
    );
  }
}

export default BuscarCliente;
