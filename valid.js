function validar() {
	
	var nombre,numero_documento,celular,email, paises, exprecion;

	nombre=document.getElementById('nombre').value;
	numero_documento=document.getElementById('numero_documento').value;
	celular=document.getElementById('celular').value;
	email=document.getElementById('email').value;
	paises=document.getElementById('paises').value;

	exprecion=/\w+@\w+\.+[a-z]/;
	

	if(nombre==="" || numero_documento==="" || celular==="" || email==="" ){

		//alert("todos los campos son requeridos");
		
	}else if(paises==="Pais"){

		alert("el campo pais requerido");

	}else if(numero_documento.length<6||numero_documento.length>10 ||isNaN(numero_documento)){

		alert("Numero de documento no valido");

	}	else if(celular.length<9||celular.length>10 ||isNaN(celular)){

		alert("Numero de celular no valido");
		celular.className="rojo";

	}	else if(!exprecion.test(email)){

		alert("Correo no valido");
	}else if(!isNaN(nombre)){
		alert(" en el nombre deves colocar solo letras");
	}

	

}