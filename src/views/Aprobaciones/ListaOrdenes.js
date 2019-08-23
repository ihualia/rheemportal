import React, { Component } from 'react';
import {Link } from  'react-router-dom'
import { Badge, Card, CardBody, CardHeader, 
  Col, Pagination, PaginationItem, PaginationLink, 
  Row, Table, CardFooter, Collapse, Fade, Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label, } from 'reactstrap';

class ListaOrdenes extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
   this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      fadeIn: true,
      timeout: 300,
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
      <div className="animated fadeIn">
        <Row>
          <Col xs="15" lg="30">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista de Ordenes
              </CardHeader>
              <CardBody>
              <Form action="" method="post" inline>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputName2" className="pr-1">Buscar por</Label> &nbsp; &nbsp;
                    <Input type="text" id="exampleInputName2" placeholder="No.orden de compra" required />
                  </FormGroup>
                  <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputEmail2" className="pr-1"></Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="Fecha inicial" required />
             </FormGroup>
             <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputEmail2" className="pr-1"></Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="Fecha final" required />
             </FormGroup>
             <FormGroup className="pr-1">
                    <Label htmlFor="exampleInputEmail2" className="pr-1"></Label>
                    <Input type="email" id="exampleInputEmail2" placeholder="Cliente" required />
             </FormGroup>
             <Col sm xs="20" className=" mb-2">
                <Button color="ghost-success">
                  <i className="fa fa-lightbulb-o"></i>&nbsp;Buscar
                </Button>
              </Col>
                <Table hover bordered striped responsive size="mb">
                  <thead>
                  <br></br>
                  <tr>
                    <th>No.OC</th>
                    <th>Fecha Inicial</th>
                    <th>Fecha Final</th>
                    <th>Cliente</th>
                    <th>Status</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Promocion</th>
                    <th>Precio Final</th>
                    <th>IVA</th>
                    <th>Precio Total</th>
                    <th>Costo</th>
                    <th>Margen</th>
                    <th>Evaluar</th>
                  </tr>
                  </thead>
                  <tbody>
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
                    <td></td>
                      
                    
                  </tr>
                  </tbody>
                </Table>
               
               <div class=" justify-content-center">
                   <Col sm xs="20" className=" mb-2">
                        <br></br>
                        <Link to=""  class="btn btn-primary">Exportar</Link>&nbsp; &nbsp;
                        <Link to="/Aprobaciones/AprobacionesDesaprobaciones"  class="btn btn-success">Regresar</Link>&nbsp; &nbsp;
                         <Link to="../"  class="btn btn-danger">Salir</Link>
                      </Col>
                      
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

export default ListaOrdenes;
