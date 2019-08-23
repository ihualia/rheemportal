import React, { Component } from 'react';
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
} from 'reactstrap';
import { Link } from 'react-router-dom';

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

  getBadge = (cantidad) => {
    return cantidad > 0 ? 'success' :'danger'
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <form>
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Orden Detalle</strong>
                    <div className="card-header-actions">
                    </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="6">
                      <Card>
                        <table responsive striped hover>
                          <tbody>
                            <tr>
                              <th className="w-30">Clave:</th>
                              <td className="w-70">X1-COSCO</td>
                            </tr>
                            <tr>
                  <th>Razon Social:</th>
                  <td>Cosco</td>
                  </tr>
                  <tr>
                  <th>RFC:</th>
                  <td>COM931201ABC</td>
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
                  <th>Fecha:</th>
                  <th>05/08/19</th>
                  </tr>
                  <tr>
                  <th>Status: </th>
                  <td>Aceptado</td>
                  </tr>
                   <tr>
                  <th>Num. Rheem: </th>
                  <td>01-FH</td>
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
                  <td>---------</td>
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
                    <th> Producto </th>
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
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>0001</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Badge color={this.getBadge(0)}>*</Badge> </td>
                    <td>  <Input type="Number" id="number" required /></td>
                    <td> </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td> </td>
                    <th><i className="fa fa-trash-o fa-lg mt-4"></i></th>
                  </tr>
                  <tr>
                    <td>0002</td>
                     <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Badge color={this.getBadge(0)}>*</Badge> </td>
                    <td>  <Input type="Number" id="number" required /></td>
                    <td> </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td> </td>
                    <th><i className="fa fa-trash-o fa-lg mt-4"></i></th>
                  </tr>
                  <tr>
                   <td> 0003</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td><Badge color={this.getBadge(0)}>*</Badge> </td>
                    <td>  <Input type="Number" id="number" required /></td>
                    <td> </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td>  </td>
                    <td> </td>
                    <td> </td>
                    <th><i className="fa fa-trash-o fa-lg mt-4"></i></th>
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
                    <td>Total Desc</td>
                    <td>$ 3,000.00</td>
                    <td> Total Promo</td>
                    <td>$2,000</td>
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
                    <td></td>
                    <td>Total</td>
                    <td>$16,800.00</td>
                    <td></td>
                    <td></td>
                  </tr>
                 
                  </tbody>
                </Table>
                <br></br>
                  
          <Row>
             <Table responsive>
              <thead>
              <tr>
                <th> <Col md="2">
                  <Label htmlFor="ccnumber">Gastos envio</Label>
                  <Input type="Number" id="number"placeholder="$1,000" required /> </Col></th> 
                </tr>
              </thead>
            </Table>
          </Row>
          <br></br>









                  <Row>
                    <Col xs="12" sm="6">
                    <center>
                      <td><Link to="/ordenes/orden-carrito"className="btn btn-primary btn-lg"Block>Continuar</Link></td>
                      </center>
                    </Col>
                    <Col xs="12" sm="6">
                    <center>
                      <td><Link to="../ordenes/nueva-orden"className="btn btn-primary btn-lg"Block>Regresar
                      </Link></td>
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

