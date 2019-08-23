import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, Input, Label } from 'reactstrap';


class ClientesUpload extends Component {

  render() {

  	return(
  		<div className="animated fadeIn">
        <Row>
          <Col xl={10}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-10"><i className="icon-cloud-upload"></i> Carga de Clientes </div>
                <div className="col-2 text-right text-muted"><Link to="../clientes"><i className="icon-arrow-left"></i> Regresar</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <tbody>
                  <tr>
                    <td className="w-20 p-3">Seleccionar Archivo</td>
                    <td>
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="customFile" />
                      <label className="custom-file-label" htmlFor="customFile">Seleccionar archivo</label>
                    </div>
                    </td>
                    <td className="w-30" p-3></td>
                  </tr>
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

export default ClientesUpload;