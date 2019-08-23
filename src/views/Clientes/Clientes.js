import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import clientesData from './ClientesData'

function ClienteRow(props) {
  const cliente = props.cliente
  const clienteLink = `/clientes/${cliente.id}`

  const getBadge = (status) => {
    return status === 'Activo' ? 'success' :
      status === 'Bloqueado' ? 'warning' :
            'primary'
  }

  return (
    <tr key={cliente.id.toString()}>
      <th scope="row"><Link to={clienteLink}>{cliente.id}</Link></th>
      <td><Link to={clienteLink}>{cliente.nombre}</Link></td>
      <td>{cliente.rfc}</td>
      <td>{cliente.contacto_entrega}</td>
      <td>{cliente.ejecutivo}</td>
      <td><Link to={clienteLink}><Badge color={getBadge(cliente.status)}>{cliente.status}</Badge></Link></td>
    </tr>
  )
}

class Clientes extends Component {

  render() {

    const clienteList = clientesData.filter((cliente) => cliente.id < 5)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-8"><i className="fa fa-align-justify"></i> Clientes <small className="text-muted">Lista de clientes</small></div>
                <div className="col-4 text-right text-muted"><Link to="clientes/Upload"><i className="fa fa-upload"></i> Cargar Clientes</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nommbre</th>
                      <th scope="col">rfc</th>
                      <th scope="col">contacto</th>
                      <th scope="col">ejecutivo</th>
                      <th scope="col">estatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clienteList.map((cliente, index) =>
                      <ClienteRow key={index} cliente={cliente}/>
                    )}
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

export default Clientes;
