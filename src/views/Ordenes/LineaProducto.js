import React, { Component } from 'react';
import {Input, Badge} from 'reactstrap';

class LineaProducto extends Component{
	getBadge = (cantidad) => {
    	return cantidad > 0 ? 'success' :'danger'
  	}

	render(){
		let producto = this.props.lineaproducto;
		let moneda = this.props.moneda;
		return(
			<tr>
                <td>{producto.clave_producto}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.division}</td>
                <td>{producto.mercado}</td>
                <td> {producto.familia}</td>
                <td> <Badge color={this.getBadge(producto.inventario)}>*</Badge> </td>
                <td>{(moneda ==="MXN")?producto.precio_mxn:producto.precio_usd}</td>
                <td>{(moneda ==="MXN")?producto.costo_mxn:producto.costo_usd}</td>
                <td> </td>
                <td><input type="checkbox" className="productomostrado" id={producto.clave_producto} name={producto.clave_producto} value={producto.clave_producto} /></td>
            </tr>
		);
	}
}
export default LineaProducto;