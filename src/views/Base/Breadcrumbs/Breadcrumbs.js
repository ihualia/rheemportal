import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Breadcrumbs</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/breadcrumbs/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>

              <center><h1><font color="red">Aprobacion/ desaprovacion de OCs</font></h1></center>
              <center><h2>detalles de la orden de compra</h2></center>
              <h2>Distribuidor <textarea></textarea></h2><br></br>
              <h2>RFC <textarea></textarea></h2><br></br>
              <h2>Num.OC Distribuidor <textarea></textarea></h2><br></br>
              <h2>Num.OC Rheem <textarea></textarea></h2><br></br>
              <h2>Direccion Fiscal <textarea></textarea></h2><br></br>
              <h2>Direccion de Entrega <textarea></textarea></h2><br></br>
              <h2>Comentarios <textarea></textarea></h2><br></br>
              <br></br>
              <h2>Ejecutivo de Ventas <textarea></textarea></h2><br></br>
              <br></br>
              <h2>Moneda <select class="custom-select">
              <option selected>Selecciona una Moneda</option>
              <option value="1">Pesos</option>
              <option value="2">Dolar</option>
              </select></h2>
                <Breadcrumb>
                  <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                  {/*eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                  {/* eslint-disable-next-line*/}
                  <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                  <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb tag="nav">
                  <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
                  <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
                </Breadcrumb>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Breadcrumbs;
