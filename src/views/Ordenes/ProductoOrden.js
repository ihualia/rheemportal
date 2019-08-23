import React, { Component } from 'react';
import {Input, Badge} from 'reactstrap';

class ProductoOrden extends Component{
	getBadge = (cantidad) => {
    	return cantidad > 0 ? 'success' :'danger'
  	}
    calcularImporte(clave){
        let cantidad = document.getElementById("cant-" + clave).value;
        let precio = document.getElementById("precio-" + clave).value;
        let importe = parseFloat(precio)*parseFloat(cantidad);

        document.getElementById("importe-" + clave).innerHTML = importe;
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
                <td><input type="text" className="form-control col-lg input-sm text-center" id={'cant-'+producto.clave_producto} name={'cant-'+producto.clave_producto} value={producto.cantidad} onBlur={()=>this.calcularImporte(producto.clave_producto)} /></td>
                <td id={'precio-'+producto.clave_producto}>{(moneda ==="MXN")?producto.precio_mxn:producto.precio_usd}</td>
                <td id={'importe-'+producto.clave_producto}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{(moneda ==="MXN")?producto.costo_mxn:producto.costo_usd}</td>
                <td></td>
                <td> </td>
                <td><i className="fa fa-trash-o fa-lg mt-4"></i></td>
            </tr>
		);
	}
}
export default ProductoOrden;