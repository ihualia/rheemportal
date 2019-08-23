import React, { Component } from 'react';

class Utils extends Component{


	constructor(props){
		super(props);

		this.url = "http://192.168.152.113:8000/";
		this.hearders = new Headers();
		
		this.setHeaders = this.getHeaders.bind(this);
    	this.getHeaders = this.getHeaders.bind(this);
    	this.getUrl = this.getUrl.bind(this);
	}

	getHeaders(){
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/json');
    	this.headers.append('Accept', 'application/json');
		return this.headers;	
	}
	getUrl(){
		return this.url;
	}

	acomodarDirFiscal(cliente){
	    let direccion = '';
	    if(cliente.clave){
		    direccion = cliente.calle_fiscal + " " + cliente.numero_fiscal + " int. ";
		    direccion += cliente.interior_fiscal + ", " + cliente.colonia_fiscal + ", ";
		    direccion += cliente.municipio_fiscal + ", " + cliente.estado_fiscal + ", CP ";
		    direccion += cliente.cp_fiscal + ", " + cliente.pais_fiscal;
		}
	    return direccion;
	}
	acomodarDirEntrega(cliente){
		let direccion = '';
		if(cliente.clave){
		    direccion = cliente.calle_entrega + " " + cliente.numero_entrega + " int. ";
		    direccion += cliente.interior_entrega + ", " + cliente.colonia_entrega + ", ";
	    	direccion += cliente.municipio_entrega + ", " + cliente.estado_entrega + ", CP ";
	    	direccion += cliente.cp_entrega + ", " + cliente.pais_entrega;
	    }
	    return direccion;
	}
}

export default Utils