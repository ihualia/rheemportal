import React, { Component } from 'react';
import {Input} from 'reactstrap'

function EjecutivoOption(props){
	let ejecutivos = props.ejecutivo;
	
	if(!ejecutivos || ejecutivos.length === 0){
		return(
			<Input type="text" className="form-control" id="Ejecutivodeventa" required />
		);
	}else if(ejecutivos.length === 1){
		return(
			<Input type="text" value={JSON.parse(ejecutivos).nombre} className="form-control" id="Ejecutivodeventa" required />
		);
	}else{
		return(
			<select id="Ejecutivodeventa" className="form-control" required>
				<option></option>
				{ejecutivos.map((ejecu, index) => 
					<option>{JSON.parse(ejecu).nombre}</option>
				)}
			</select>
		);
	}
}

class Ejecutivo extends Component{

	state={
			ejecutivo:this.props.ejecutivo,
		};
	

	render(){
		return(
			<EjecutivoOption ejecutivo={this.props.ejecutivo} />
		);
	}
}
export default Ejecutivo;