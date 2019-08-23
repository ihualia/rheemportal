import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Activo' ? 'success' :
      status === 'Inactivo' ? 'secondary' :
        status === 'Pendiente' ? 'warning' :
          status === 'Cancelado' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.email}</td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 9)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
              <div className="row">
                <div className="col-8"><i className="fa fa-align-justify"></i> Usuarios <small className="text-muted">Lista de usuarios</small></div>
                <div className="col-4 text-right text-muted"><Link to="users/Upload"><i className="fa fa-upload"></i> Cargar Usuarios</Link></div>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">nombre</th>
                      <th scope="col">correo</th>
                      <th scope="col">registrado</th>
                      <th scope="col">rol</th>
                      <th scope="col">estatus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
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

export default Users;
