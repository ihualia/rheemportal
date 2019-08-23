import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input } from 'reactstrap';


class UsuariosUpload extends Component {

  render() {

  	return(
  		<div className="animated fadeIn">
        <Row>
          <Col xl={10}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-10"><i className="icon-cloud-upload"></i> Carga de Usuarios </div>
                <div className="col-2 text-right text-muted"><Link to="../users"><i className="icon-arrow-left"></i> Regresar</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <tbody>
                    <td>Seleccionar Archivo</td>
                    <td>
                    <Input type="file"/>
                    </td>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  	)
  }
}

export default UsuariosUpload;