import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  Table
} from "reactstrap";

import Utils from "../Utils";
import LineaProducto from "./LineaProducto";


let producto = {};
class Busquedaproducto extends Component {
  state = {
    orden: {
      fecha: '',
      noRheem: '',
      noDist: '',
      comentarios_iniciales:'',
      moneda:'',
      codigo_promo:'',
      cliente:{},
      detalle:[],
      gastos_envio:'',
      subtotal:'',
      iva:'',
      total:''
    },
    productos:[],
    moneda:''
  };

  obtenerProducto(clave_prod) {
    let utils = new Utils();
    const url = utils.getUrl() + "producto/";
    let headers = utils.getHeaders();

    fetch(url, {
      credentials: "same-origin",
      method: "GET",
      headers: headers
    })
      .then(response => response.json())
      .then(json => {this.setState({ productos: json.results }); this.mostrarProducto();});
  }

  mostrarProducto() {
      let productos = JSON.parse(JSON.stringify(this.state.productos));

      //Si aún no se ha cargado nada, para evitar que se que ejecute esta funcion sin datos completos
      if(!document.getElementById("clave_prod")){
        return;
      }

      let clave = document.getElementById("clave_prod").value;
      let mercado = document.getElementById("hr-mercado").value;
      let familia = document.getElementById("hr-familia").value;
      let codigopromo = document.getElementById("codi_promo").value;
      
      if(clave == "" && mercado == "" && familia == "" && codigopromo == ""){
        return;
      }
      
      if (clave != "") {
        producto = productos.find(
          productOr =>
            productOr.clave_producto
              .toString()
              .toUpperCase()
              .search(clave.toUpperCase()) > -1
        );
        this.setState({productos:[producto]});
      }
      if (mercado != "") {
        producto = productos.filter(
          productOr =>
            productOr.mercado
              .toString()
              .toUpperCase()
              .search(mercado.toUpperCase()) > -1
        );
        this.setState({productos:producto});
      }
      if (familia != "") {
        producto = productos.filter(
          productOr =>
            productOr.familia
              .toString()
              .toUpperCase()
              .search(familia.toUpperCase()) > -1
        );
        this.setState({productos:producto});
      }
      if (codigopromo != "") {
        producto = productos.find(
          productOr =>
            productOr.codigopromo
              .toString()
              .toUpperCase()
              .search(codigopromo.toUpperCase()) > -1
        );
        this.setState({productos:producto});
      }
      return;

  }

  agregarProducto(){
    //Buscamos los productos seleccionados
    let inputs = document.getElementsByClassName("productomostrado");
    let seleccionados =  [];
    for(let i = 0; i < inputs.length; i++){
      if(inputs[i].type === 'checkbox'){
        if(inputs[i].checked){
          seleccionados.push(inputs[i]);
        }
      }
    }

    //Si se selecciono un producto o más los agregamos a los detalles de la orden
    //Para ello buscamos el objeto completo en los resultados de la búsqueda en la BD
    if(seleccionados.length > 0){
      let orden = this.state.orden;
      for(let i = 0; i < seleccionados.length; i++){
        let producto = this.state.productos.find(prod => prod.clave_producto.toString().toUpperCase().search(seleccionados[i].value.toUpperCase()) > -1);
        orden.detalle.push(producto);
      }
      this.setState({orden:orden});
    }
    
    let ordenSr = btoa(JSON.stringify(this.state.orden));
    document.location.href=`#/ordenes/orden-inicio/${ordenSr}`
  }

  render() {
    this.state.orden = JSON.parse(atob(this.props.match.params.ordenObj));
    return (
      <form>
        <div className="animated fadeIn">
          <Row>
            <Col xs="15" md="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-al;ign-justify"></i>Busqueda Producto 
                  <small className="text-muted">Listado Productos</small>
                </CardHeader>
                <CardBody>
                  <Row>
                    <h3>Buscar por:</h3>
                    <Col md="2">
                      <FormGroup>
                        <Label htmlFor="clave_prod">Clave Prod.</Label>
                        <Input
                          type="Text"
                          id="clave_prod"
                          placeholder="Ej.0001"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <Label htmlFor="hr-mercado">Mercado</Label>
                        <Input
                          type="Text"
                          id="hr-mercado"
                          placeholder="Comercial"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <Label htmlFor="hr-familia">Familia</Label>
                        <Input
                          type="Text"
                          id="hr-familia"
                          placeholder="Tank Gas"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <Label htmlFor="codi_promo">Codigo Promo</Label>
                        <Input
                          type="Text"
                          id="codi_promo"
                          placeholder=""
                          required
                        />
                      </FormGroup>
                    </Col>
                    <FormGroup>
                      <Col md="6">
                        <InputGroupAddon addonType="prepend">
                          <Button
                            type="button"
                            color="primary"
                            onClick={() => {
                              this.obtenerProducto(
                                document.getElementById(
                                  "clave_prod"
                                ).value
                              );
                            }}
                          >
                            <i className="fa fa-search"></i> Buscar
                          </Button>
                        </InputGroupAddon>
                      </Col>
                    </FormGroup>
                  </Row>

                  <Table responsive className="small">
                    <thead>
                      <br></br>
                      <br></br>
                      <tr>
                        <th>Clave Producto</th>
                        <th>Descripcion Corta</th>
                        <th>Division</th>
                        <th>Mercado</th>
                        <th>Familia</th>
                        <th>Inventario</th>
                        <th>Precio Unitario</th>
                        <th>Costo</th>
                        <th>Promoción</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="listado">
                    {
                      this.state.productos.map((prod, index) =>
                          <LineaProducto
                            lineaproducto={prod}
                            moneda={this.state.orden.moneda}
                          />
                        )
                    }
                    </tbody>
                  </Table>
                  <Row>
                    <div className="justify-content-center">
                      <Col xs="12" sm="3">
                        <center>
                          <Button className="btn" color="primary" onClick={()=>{this.agregarProducto();}}>
                            Agregar
                          </Button>
                        </center>
                      </Col>
                    </div>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </form>
    );
  }
}

export default Busquedaproducto;
