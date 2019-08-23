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
  Table
} from 'reactstrap';

class ConsultaOrden extends Component {
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
      <Col xs="12" md="15">
      <Card>
      <CardHeader>
      <i className="fa fa-align-justify"></i><strong>ConsultaOrden</strong><small className="text-muted"> Aprobaciones Credito</small>
      <div className="card-header-actions">
      <a href="https://reactstrap.github.io/components/dropdowns/" rel="noreferrer noopener" target="_blank" className="card-header-actions">
      </a>
      </div>
      </CardHeader>
<br></br>
              <CardBody>
                  <Row>
                   <h3>Buscar por:</h3>
                  <Col md="2">
                    <FormGroup>
                      <Label htmlFor="ccnumber">No. Orden</Label>
                      <Input type="Number" id="number"placeholder="Ej.0001" required />
                    </FormGroup>
                  </Col>
                  <FormGroup>
                      <Label htmlFor="ccnumber">Fecha Incial</Label>
                      <Input type="date" id="number"placeholder="" required />
                    </FormGroup>
                     <Col md="2">
                     <FormGroup>
                      <Label htmlFor="ccnumber">Cliente</Label>
                      <Input type="Text" id="number"placeholder="Ej.Cosco" required />
                    </FormGroup>
                    </Col>
                    <FormGroup>
                  <Col md="6">
                        <InputGroupAddon addonType="prepend">
                          <Button type="button" color="primary"><i className="fa fa-search"></i> Buscar</Button>
                        </InputGroupAddon>
                 </Col>
                 </FormGroup>
                </Row>  
             <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th> No.OC </th>
                    <th> Fecha Inicial </th>
                    <th> Fecha Final </th>
                    <th>  Cliente </th>
                    <th> Precio </th>
                    <th> Descuento </th>
                    <th> Promoción </th>
                    <th> Precio Final </th>
                    <th> IVA </th>
                    <th> Precio Neto </th>
                    <th> Costo de Envio </th>
                    <th> Margen </th>

                  </tr>
                  </thead>
              <tbody>
                  <tr>
                    <td>0001</td>
                    <td>01/08/2019</td>
                    <td>07/08/2019 </td>
                    <td>Corona </td>
                    <td> 12,000</td>
                    <td>15%</td>
                    <td>Solares</td>
                    <td> 10,200</td>
                    <td>1,080</td>
                    <td> 12,000 </td>
                    <td> 1,000</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>0002</td>
                    <td>07/07/2019</td>
                    <td>12/07/2019 </td>
                    <td> Soluciones FV</td>
                    <td> 9,000</td>
                    <td> Ninguna</td>
                    <td> No Aplica</td>
                    <td> 9,000</td>
                    <td>1,000</td>
                    <td> 9,000 </td>
                    <td> 1,000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                   <td>0003</td>
                    <td>07/08/2019</td>
                    <td> Por Aprobar</td>
                    <td> Refaccionaria Hernández</td>
                    <td> 5,000</td>
                    <td> Por Aprobar</td>
                    <td> Tinacos</td>
                    <td> 5,000</td>
                    <td> 1,200</td>
                    <td> 6,200 </td>
                    <td> 1,350</td>
                    <td> 300</td>
                  </tr>

              </tbody>
                   
            </Table>
                <br></br>
                  <Row>
                    <Col xs="12" sm="6">
                    <center>
                    <Link to="/aprobaciones/aprobacion-orden"className="btn btn-primary btn-lg"block>Continuar</Link>
                     </center>
                    </Col>
                    <Col xs="12" sm="6">
                    <center>
                    <Link to="../dashboard"className="btn btn-primary btn-lg"block>Salir</Link>
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

export default ConsultaOrden;

