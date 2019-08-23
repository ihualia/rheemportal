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
  Table,
  Modal, 
  ModalBody, 
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

class AprobacionesDesaprobacionesPromo extends Component {

   constructor(props) {
    super(props);
    this.state = {
      
      aprobado: false,
      rechazado: false,
      
    };
    this.toggleAprobado = this.toggleAprobado.bind(this);
    this.toggleRechazado = this.toggleRechazado.bind(this);



  }
   getBadge = (cantidad) => {
    return cantidad > 0 ? 'success' :'danger'
  }

   toggleAprobado() {
    this.setState({
      aprobado: !this.state.aprobado,
    });
  }
  toggleRechazado() {
    this.setState({
      rechazado: !this.state.rechazado,
    });
  }

  render() {
    return (
      <form>
      <div className="animated fadeIn">
       

        <Row>


          <Col xs="12" md="15">
            <Card>
           <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Orden de Compra</strong><small className="text-muted"> Aprobaciones Promo</small>
                
              </CardHeader>
              
              <CardBody>
                <Form action="" method="post" className="form-horizontal">




                  <Row>
                  <Col md="6">
                  <Card>
                    <Table responsive striped hover size="sm">
                    <tbody>
                      <tr>
                         <th>Clave Cliente: </th>
                        <td>X01</td>
                      </tr>
                       <tr>
                         <th>RFC: </th>
                        <td>KRFT09087</td>
                      </tr>
                      <tr>
                         <th>Razón Social: </th>
                        <td>----------</td>
                      </tr>
                      <tr>
                         <th>Dirección Entrega: </th>
                        <td>Av Camalia</td>
                      </tr>
                      <tr>
                         <th>Ejecutivo Ventas: </th>
                        <td>----------</td>
                      </tr>                      
                      </tbody>
                      </Table>

                      </Card>
                    </Col>

                  <Col md="6">
                  <Card>
                    <Table responsive striped hover size="sm">
                    <tbody>
                      <tr>
                        <th>N°.OC Rheem: </th>
                        <td>0123456</td>
                      </tr>
                      <tr>
                        <th>N°.OC Distribuidor: </th>
                        <td>248603</td>
                      </tr>
                       <tr>
                         <th>Dirección Fiscal: </th>
                        <td>Jardines de Morelos</td>
                      </tr>
                      <tr>
                         <th>Contacto Entrega: </th>
                        <td>Javier Morales</td>
                      </tr>
                      <tr>
                         <th>Moneda: </th>
                        <td>MXN</td>
                      </tr> 
                      </tbody>
                      </Table>

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
                     <th>  </th>

                          
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>29V100/485287</td>
                    <td> GAS TANK 10 - 100 G   </td>
                    <td> WH   </td>
                    <td>  RESIDENTIAL          </td>
                    <td> TANK GAS</td>
                    <td><Badge color={this.getBadge(71)}>*</Badge></td>
                    <td> </td> 
                    <td> </td>
                    <td> </td>
                    <td> 5% </td>
                    <td> 50 </td>
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
                    <td><Badge color={this.getBadge(71)}>*</Badge></td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> 8%</td>
                    <td> 80 </td>
                    <td> MES PATRIO </td>
                    <td>$1,500.00</td>
                    <td>$800.00</td>
                    <td>$600.00</td>
                    <td>12%</td>
                    <td></td>
                  </tr>
                  <tr>
                  <td> 29V100/485331</td>
                    <td>GAS TANK 10 - 100 G  </td>
                    <td>WH</td>
                    <td>RESIDENTIAL</td>
                    <td>TANK GAS</td>
                    <td> <Badge color={this.getBadge(71)}>*</Badge></td>
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
                    <td>  </td>
              </tr>
                             <tr>
                   <td> 0004</td>
                    <td>GAS TANK 10 - 100 G  </td>
                    <td>WH</td>
                    <td>RESIDENTIAL</td>
                    <td>TANK GAS</td>
                    <td> <Badge color={this.getBadge(71)}>*</Badge></td>
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
                    <td>  </td>
              </tr>
                             <tr>
                   <td> 0005</td>
                    <td>GAS TANK 10 - 100 G  </td>
                    <td>WH</td>
                    <td>RESIDENTIAL</td>
                    <td>TANK GAS</td>
                    <td><Badge color={this.getBadge(71)}>*</Badge> </td>
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
                    <td>  </td>
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
                    <td></td>
                  </tr>
                </Table>

<br></br>

                  <FormGroup row>
                    <Col md="6">
                   <Table responsive striped hover size="sm">
                    <tbody>
                     
                       <tr>
                        <td>Gastos de envío: </td>
                        <td>$0000.0000</td>
                      </tr>
                      </tbody>
                      </Table>
                    </Col>


                    
                      
                  </FormGroup>

                 

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ComentariosInternos">Comentarios Internos</Label>
                    </Col>
                    <Col md="3">
                      <Input type="textarea" name="ComentariosInternos" id="ComentariosInternos" rows="5"
                             placeholder="Comentarios Internos..." />
                    </Col>



                    <Col md="3">
                      <Label htmlFor="MotivoRechazo">Motivo Rechazo Promo</Label>
                          <br></br>
                          <br></br>
                          <br></br>
                      <Label htmlFor="PlazoCredito">Plazo de Credito</Label>
                    </Col>
                    <Col md="3">
                 
                      <select class="form-control" id="MotivoRecha">
                          <option></option>
                          <option></option>
                      </select>
                      <br></br>
                      <br></br>
                      
                        <Input type="text" id="PlazoCredit" name="PlazoCredit" placeholder="Plazo de Credito"  />


                    </Col>
                    
                  </FormGroup>



                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ComentariosCliente">Comentarios para el Cliente</Label>
                    </Col>
                    <Col md="3">
                      <Input type="textarea" name="ComentariosCliente" id="ComentariosCliente" rows="5"
                             placeholder="Comentarios para Cliente..." />
                    </Col>
                  </FormGroup>





                 <div class="row justify-content-center">
            
            <Row>
            <Col sm="5">
              <Button color="primary" onClick={this.toggleAprobado} className="mr-1">Aprobar</Button>
                <Modal isOpen={this.state.aprobado} toggle={this.toggleAprobado}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.toggleAprobado}>Status Orden</ModalHeader>
                  <ModalBody>
                    ¡ORDEN APROBADA!. En un momento se le enviará un correo.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" href='dashboard' onClick={this.toggleAprobado}>Aceptar</Button>{' '}
                    
                  </ModalFooter>
                </Modal>
</Col>


                <Col sm="5">


                  <Button color="danger" onClick={this.toggleRechazado} className="mr-1">Rechazar</Button>
                <Modal isOpen={this.state.rechazado} toggle={this.toggleRechazado}
                       className={'modal-danger ' + this.props.className}>
                  <ModalHeader toggle={this.toggleRechazado}>Status Orden</ModalHeader>
                  <ModalBody>
                    ¡ORDEN RECHAZADA!. 
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" href='dashboard' onClick={this.toggleRechazado}>Aceptar</Button>{' '}
                  </ModalFooter>
                </Modal>
                </Col>

           
            </Row>

              <Row>
                          
                 <Col sm="5">




                   <Link to="./dashboard" class="btn btn-secondary">Regresar</Link>
                </Col>
                </Row>
              </div>    


                </Form>
              </CardBody>
             
            </Card>
        
          </Col>

        </Row>


        
      </div>
      </form>
    );
  }
}

export default AprobacionesDesaprobacionesPromo;
