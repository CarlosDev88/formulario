const url="https://restcountries.eu/rest/v2/all";
	

fetch(url)
.then(response =>response.json())
.then(data=>{

	data.forEach(function(element){

		let paises=document.getElementById('paises');
		let opt=document.createElement("option");
		opt.appendChild(document.createTextNode(element.name));

		paises.appendChild(opt);
	})
})

.catch(err=>console.log(err))