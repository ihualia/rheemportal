import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input, Label } from 'reactstrap';


class ProductosUpload extends Component {

  render() {

  	return(
  		<div className="animated fadeIn">
        <Row>
          <Col xl={10}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-10"><i className="icon-cloud-upload"></i> Carga de Productos </div>
                <div className="col-2 text-right text-muted"><Link to="../productos"><i className="icon-arrow-left"></i> Regresar</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <tbody>
                    <td>Seleccionar Archivo</td>
                    <td>
                      <div className="custom-file">
                        <Input type="file" className="custom-file-input" id="prod_file"></Input>
                        <Label className="custom-file-label" htmlFor="prod_file" data-browse="Buscar Archivo">Seleccionar archivo</Label>
                      </div>
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

export default ProductosUpload;