import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import productsData from './ProductsData'

function ProductRow(props) {
  const producto = props.producto
  const productoLink = `/productos/${producto.id}`

  const getBadge = (status) => {
    return status === 'Existencia' ? 'success' :
      status === 'Agotado' ? 'warning' :
            'primary'
  }

  return (
    <tr key={producto.id.toString()}>
      <th scope="row"><Link to={productoLink}>{producto.id}</Link></th>
      <td><Link to={productoLink}>{producto.name}</Link></td>
      <td>{producto.descripcion}</td>
      <td>{producto.precio}</td>
      <td>{producto.inventario}</td>
      <td><Link to={productoLink}><Badge color={getBadge(producto.status)}>{producto.status}</Badge></Link></td>
    </tr>
  )
}

class Productos extends Component {

  render() {

    const productoList = productsData.filter((producto) => producto.id < 5)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-8"><i className="fa fa-align-justify"></i> Productos <small className="text-muted">Lista de productos</small></div>
                <div className="col-4 text-right text-muted"><Link to="productos/Upload"><i className="fa fa-upload"></i> Cargar Productos</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">modelo</th>
                      <th scope="col">descripción</th>
                      <th scope="col">precio</th>
                      <th scope="col">inventario</th>
                      <th scope="col">estatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productoList.map((producto, index) =>
                      <ProductRow key={index} producto={producto}/>
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

export default Productos;
