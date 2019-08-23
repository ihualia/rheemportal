import React, { Component } from "react";
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
import { Link } from "react-router-dom";
import ProductoOrden from "./ProductoOrden";

let cliente = {};
let fechaHoy = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

class ListadoOrdenes extends Component {
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
    }
  };

  getBadge = cantidad => {
    return cantidad > 0 ? "success" : "danger";
  };

  render() {
    this.state.orden = JSON.parse(atob(this.props.match.params.ordenObj));
    this.state.orden.fecha=fechaHoy;
    cliente = this.state.orden.cliente;
    let ordenStr = btoa(JSON.stringify(this.state.orden));
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Reistro de Orden Compra</strong>
                <small className="text-muted"> Registro de la Orden</small>
                <div className="card-header-actions"></div>
              </CardHeader>
              <CardBody>
                <Row className="small">
                  <Col md="6">
                    <Card>
                      <table responsive striped hover>
                        <tbody>
                          <tr>
                            <th className="w-30">Clave cliente:</th>
                            <td className="w-70">{cliente.clave_cliente}</td>
                          </tr>
                          <tr>
                            <th>Razón Social:</th>
                            <td>{cliente.razon_social}</td>
                          </tr>
                          <tr>
                            <th>RFC:</th>
                            <td>{cliente.rfc}</td>
                          </tr>
                          <tr>
                            <th>Direccion de Entrega:</th>
                            <td>{cliente.direccion_entrega}</td>
                          </tr>
                          <tr>
                            <th>Ejecutivo de Venta:</th>
                            <td>{cliente.ejecutivo}</td>
                          </tr>
                          <tr>
                            <th>Comentarios:</th>
                            <td>{this.state.orden.comentarios_iniciales}</td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                  </Col>

                  <Col md="6">
                    <Card>
                      <table responsive striped hove>
                        <tbody>
                          <tr>
                            <th>N° OC Dist: </th>
                            <td>{this.state.orden.noDist}</td>
                          </tr>
                          <tr>
                            <th>Fecha:</th>
                            <td>
                              <Input
                                type="text"
                                id="fecha"
                                value={fechaHoy}
                                placeholder=""
                                className="col-lg-4"
                                required
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>Direccion fiscal: </th>
                            <td>{cliente.direccion_fiscal}</td>
                          </tr>
                          <tr>
                            <th>Contacto de Entrega: </th>
                            <td>{cliente.contacto_entrega}</td>
                          </tr>
                          <tr>
                            <th>Ejecutivo: </th>
                            <td>{cliente.ejecutivo}</td>
                          </tr>
                          <tr>
                            <th>Moneda:</th>
                            <td>{cliente.moneda}</td>
                          </tr>
                          <tr>
                            <th>Código promocional</th>
                            <td>
                              <Input
                                type="text"
                                name="promo"
                                id="promo"
                                readonly="yes"
                                className="col-lg-10"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                  </Col>
                </Row>

                <Col md="15 text-right">
                  <Link to={`/ordenes/buscar-producto/${ordenStr}`}>
                    Agregar &nbsp;<i className="fa fa-plus fa-lg mt-8"></i>
                  </Link>
                </Col>
                <br></br>
                <Row>
                  <Table responsive className="small">
                    <thead>
                      <tr>
                        <th> Clave </th>
                        <th> Descripcion Corta </th>
                        <th> Division </th>
                        <th> Mercado </th>
                        <th> Familia </th>
                        <th> Inventario </th>
                        <th> Cantidad </th>
                        <th> Precio Unitario </th>
                        <th> Precio Inicial</th>
                        <th> % Desc. </th>
                        <th> $ Desc. </th>
                        <th> Codigo promocional </th>
                        <th> Promocion </th>
                        <th> Precio Neto </th>
                        <th> Costos </th>
                        <th> Margen de Contribucion </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.orden.detalle.map((prod, index) =>
                          <ProductoOrden moneda={this.state.orden.moneda} lineaproducto={prod} />
                        )
                      }
                    </tbody>
                  </Table>
                </Row>
                <br></br>
                <Row>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>
                          {" "}
                          <Col md="2">
                            <Label htmlFor="ccnumber">Gastos envio</Label>
                            <Input
                              type="Number"
                              id="number"
                              placeholder="$1,000"
                              required
                            />{" "}
                          </Col>
                        </th>
                      </tr>
                    </thead>
                  </Table>
                </Row>
                <br></br>

                <Row>
                  <Col xs="12" sm="4">
                    <center>
                      <td>
                        <Link
                          to="/ordenes/orden-carrito"
                          className="btn btn-primary btn-lg"
                          Block
                        >
                          Crear Orden
                        </Link>
                      </td>
                    </center>
                  </Col>
                  <Col xs="12" sm="4">
                    <center>
                      <td>
                        <Link
                          to="../ordenes/nueva-orden"
                          className="btn btn-primary btn-lg"
                          Block
                        >
                          Regresar
                        </Link>
                      </td>
                    </center>
                  </Col>
                  <Col xs="12" sm="4">
                    <center>
                      <td>
                        <Link
                          to="../dashboard"
                          className="btn btn-primary btn-lg"
                          Block
                        >
                          Salir
                        </Link>
                      </td>
                    </center>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListadoOrdenes;
