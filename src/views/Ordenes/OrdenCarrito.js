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

class ListadoOrdenes extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
  getBadge = cantidad => {
    return cantidad > 0 ? "success" : "danger";
  };
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  render() {
    return (
      <form>
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>
                  <strong>Orden Carrito</strong>
                  <small className="text-muted"> Orden Carrito</small>
                  <div className="card-header-actions"></div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Card>
                        <table responsive striped hover>
                          <tbody>
                            <tr>
                              <th className="w-30">Clave:</th>
                              <td className="w-70">X1.201</td>
                            </tr>
                            <tr>
                              <th>Nombre:</th>
                              <td>Cosco</td>
                            </tr>
                            <tr>
                              <th>RFC:</th>
                              <td>COM931201ABC</td>
                            </tr>
                            <tr>
                              <th>Razon Social:</th>
                              <td>------------</td>
                            </tr>
                            <tr>
                              <th>Direccion de Entrega:</th>
                              <td>Santa Maria la Ribera </td>
                            </tr>
                            <tr>
                              <th>Ejecutivo de Venta:</th>
                              <td>-------------</td>
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
                              <th>N° OC Rheem: </th>
                              <td>0123355</td>
                            </tr>
                            <tr>
                              <th>Fecha:</th>
                              <td>05/08/19</td>
                            </tr>
                            <tr>
                              <th>Condiciones: </th>
                              <td>Buen estado</td>
                            </tr>
                            <tr>
                              <th>Direccion fiscal: </th>
                              <td>--------------</td>
                            </tr>
                            <tr>
                              <th>Contacto de Entrega: </th>
                              <td>--------------</td>
                            </tr>
                            <tr>
                              <th>Ejecutivo: </th>
                              <td>Miguel Hernandez</td>
                            </tr>
                            <tr>
                              <th>Moneda:</th>
                              <td>Pesos</td>
                            </tr>
                            <tr>
                              <th>Código promocional</th>
                              <td>----------</td>
                            </tr>
                          </tbody>
                        </table>
                      </Card>
                    </Col>
                  </Row>

                  <Table responsive>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29V100/485287</td>
                        <td> GAS TANK 10 - 100 G </td>
                        <td> WH </td>
                        <td> RESIDENTIAL </td>
                        <td> TANK GAS</td>
                        <td>
                          {" "}
                          <Badge color={this.getBadge(71)}>*</Badge>{" "}
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> 5% </td>
                        <td> 50</td>
                        <td> MES PATRIO </td>
                        <td>$1,200.00</td>
                        <td>$900.00</td>
                        <td>$500.00</td>
                        <td>10%</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>29V100/485331</td>
                        <td> GAS TANK 10 - 100 G </td>
                        <td> WH </td>
                        <td> RESIDENTIAL</td>
                        <td> TANK GAS</td>
                        <td>
                          <Badge color={this.getBadge(0)}>*</Badge>{" "}
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> 8%</td>
                        <td> 80</td>
                        <td> MES PATRIO </td>
                        <td>$1,500.00</td>
                        <td>$800.00</td>
                        <td>$600.00</td>
                        <td>12%</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td> 29V100/485331</td>
                        <td>GAS TANK 10 - 100 G </td>
                        <td>WH</td>
                        <td>RESIDENTIAL</td>
                        <td>TANK GAS</td>
                        <td>
                          <Badge color={this.getBadge(60)}>*</Badge>{" "}
                        </td>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <td>4%</td>
                        <td>40</td>
                        <td>MES PATRIO</td>
                        <td>$300.00</td>
                        <td>$500.00</td>
                        <td>$500.00</td>
                        <td>10%</td>
                        <td> </td>
                      </tr>
                    </tbody>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td COLSPAN="2">Total Desc</td>
                      <td>$ 3,000.00</td>
                      <td> Total Promo</td>
                      <td>$3,000</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Subtotal</td>
                      <td>$15,000.00</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>IVA</td>
                      <td>$1,800.00</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                      <td>$16,800.00</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </Table>
                  <br></br>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>
                          <Label htmlFor="ccnumber">Gastos envio</Label>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                  </Table>
                  <br></br>

                  <Row>
                    <Col xs="12" sm="12">
                      <center>
                        <td>
                          <Link
                            to="../dashboard"
                            className="btn btn-primary btn-lg"
                            Block
                          >
                            Finalizar
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
      </form>
    );
  }
}

export default ListadoOrdenes;
