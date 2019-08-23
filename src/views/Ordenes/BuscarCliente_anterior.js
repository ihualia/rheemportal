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

import RestModule from '../RestAPI';

import datosCliente from './DatosCliente'
let cliente ={clave:'', rfc:''}

class BuscarCliente extends Component {

  constructor(props){
    super(props);
    this.state = {
      existe_cliente: false,
      tooltip_abierto: false,
    };

    this.obtenerCliente = this.obtenerCliente.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.llamar = this.llamar.bind(this);
  }
  toggleTooltip(){
    this.setState({
      tooltip_abierto: !this.state.tooltip_abierto,
    });
  }

  async llamar(modulo, clave){
    this.setState({
      existe_cliente: true,
    });
    return await RestModule(modulo, clave);
  }

  obtenerCliente(clave){
    /*
    const url = "http://192.168.100.14:8000/clientes/" + clave + "/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch(url, {
        credentials: 'same-origin',
        method: 'GET',
        headers: headers
    })
    .then(function(response){return response.json();})
    .then(function(json){ 
      document.getElementById("hf-rfc").value = json.rfc_cliente;
      document.getElementById("hf-RazonSocial").value = json.razon_social_cliente;
    })
    .catch(error => alert('Authorization failed : ' + error.message));
    */

    let json = this.llamar("clientes", clave);

    if(json.length>0){
      document.getElementById("hf-rfc").value = json.rfc_cliente;
      document.getElementById("hf-RazonSocial").value = json.razon_social_cliente;
    }else{
      document.getElementById("hf-rfc").value = "El cliente no existe";
    }


    cliente = datosCliente.find(clienteOr => clienteOr.clave.toString() === clave);
    cliente = cliente ? cliente: {clave:'', rfc:'el cliente no existe'};
    this.setState({
      existe_cliente: true,
    });
    document.getElementById("hf-rfc").value = cliente.rfc;
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
                <Form action="" method="post" className="form-horizontal">
                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-dist">Clave de Cliente</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-dist"  name="hf-dist" placeholder="Distribuidor/Cliente" onBlur={()=>{this.obtenerCliente(document.getElementById('hf-dist').value);}} />
                      <Tooltip placement="right" isOpen={this.state.tooltip_abierto} target="hf-dist" toggle={()=>{this.toggleTooltip();}} >
                        Buscar Cliente
                      </Tooltip>
                    </Col>

                    <FormGroup>
                  <Col md="6">
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary"><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                 </Col>
                 </FormGroup>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-rfc">RFC</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-rfc" name="hf-rfc"  placeholder="RFC" />
                    </Col>

                   <Col md="2">
                      <Label htmlFor="hf-numOCDistribuidor">OC Distribuidor</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-numOCDistribuidor" name="hf-numOCDistribuidor" placeholder="N° OC Distribuidor"  />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-RazonSocial">Razón Social</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-RazonSocial" name="hf-RazonSocial" placeholder="Razón Social"  />
                    </Col>
                    <Col md="2 align-right">
                      <Label htmlFor="hf-dirFis">Dirección Fiscal</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="dirFis" name="dirFis" placeholder="Dirección Fiscal"  />
                    </Col>
                  </FormGroup>

                 <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-dirEnt">Dir. de Entrega</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="dirEnt" name="dirEnt" placeholder="Dirección de Entrega"  />
                    </Col>
                     <Col md="2">
                      <Label htmlFor="hf-ContEnt">Contacto Entrega</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" id="hf-ContEnt" name="hf-ContEnt" placeholder="Contacto de Entrega"  />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="2">
                      <Label htmlFor="hf-EjecVenta">Ejecutivo Ventas</Label>
                    </Col>
                    <Col md="4">
                      <Input type="text" className="form-control" id="EjecVenta" name="hf-EjecVenta" placeholder="Ejecutivo de Venta"  />
                    </Col>
                    <Col md="2">
                      <Label htmlFor="hf-Moneda">Moneda</Label>
                    </Col>
                    <Col md="4">
                      <select className="form-control" id="exampleFormControlSelect1">
                          <option>MXM</option>
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
                  <Link to="/ordenes/orden-inicio" className="btn btn-primary">Continuar</Link>
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
