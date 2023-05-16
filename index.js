var img = ["front.png", "side.png", "soul.png", "back.png", "trunk.png", "interior.png", "infotain.png ", "dimensions.png"];
var i = 0;
var car = document.querySelector('#exterior')

function next() {

	if (i == img.length - 1) {
		i = 0;
		car.src = "./images/" + img[i]
	}
	else {
		i++;
		car.src = "./images/" + img[i];

	}
}

function back() {
	if (i == 0) {
		i = img.length - 1
		car.src = "./images/" + img[i]
	}
	else {
		i--;
		car.src = "./images/" + img[i]

	}
}

const side = document.querySelector("#side-menu");

function openmenu() {
	side.style.right = "0px";
}

function closemenu() {
	side.style.right = "-250px";
}



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d7de47785msh7628ff1d53b7796p12c090jsn17da6aee1e5f',
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
	}
};

async function Data() {
	const response = await fetch('https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467', options)
	const data = await response.json();
	console.log(data)



	const abs = document.querySelector('#abs');
	const ars = document.querySelector('#ars');
	const buc = document.querySelector('#buc');
	const bc = document.querySelector('#bc');
	const ab = document.querySelector('#ab');
	const drl = document.querySelector('#drl');
	const dt = document.querySelector('#dt');
	const esc = document.querySelector('#esc');
	const bhp = document.querySelector('#bhp');
	const engine = document.querySelector('#engine');
	const em = document.querySelector('#em');
	const noc = document.querySelector('#noc');
	const ft = document.querySelector('#ft');
	const hl = document.querySelector('#hl');
	const nos = document.querySelector('#nos');
	const tpms = document.querySelector('#tpms');
	const tc = document.querySelector('#tc');
	const vt = document.querySelector('#vt');
	const vehicle = document.querySelector('#vehicle');



	abs.innerHTML = data.specs.anti_lock_braking_system_abs;
	ars.innerHTML = data.specs.auto_reverse_system_for_windows_and_sunroofs;
	buc.innerHTML = data.specs.backup_camera;
	bc.innerHTML = data.specs.body_class;
	ab.innerHTML = data.specs.curtain_air_bag_locations;
	drl.innerHTML = data.specs.daytime_running_light_drl;
	dt.innerHTML = data.specs.drive_type;
	esc.innerHTML = data.specs.electronic_stability_control_esc;
	bhp.innerHTML = data.specs.engine_brake_hp_from + " bhp";
	engine.innerHTML = data.specs.engine_manufacturer;
	em.innerHTML = data.specs.engine_model;
	noc.innerHTML = data.specs.engine_number_of_cylinders + " cylinders";
	ft.innerHTML = data.specs.fuel_type_primary;
	hl.innerHTML = data.specs.headlamp_light_source;
	nos.innerHTML = data.specs.number_of_seats + " seats";
	tpms.innerHTML = data.specs.tire_pressure_monitoring_system_tpms_type;
	tc.innerHTML = data.specs.traction_control;
	vt.innerHTML = data.specs.valve_train_design;
	vehicle.innerHTML = data.specs.vehicle_type;





	var objCount = data.trims.length;
	for (var i = 0; i < objCount; i++) {

		const root = document.querySelector('#root');
		const trim = document.createElement('div');
		const varients = document.createElement('div')
		const ul = document.createElement('ul');
		const img = document.createElement('img');
		const pictures = ["green.png", "green.png", "green.png", "green.png", "green.png", "green.png"]
		trim.classList.add("trim");
		varients.classList.add("varients");
		trim.setAttribute("id", data.trims[i].name);


		const varient = document.createElement('h3');
		const soulId = document.createElement('li');
		const soulName = document.createElement('li');
		const soulDesc = document.createElement('li');
		const soulInvoice = document.createElement('li');
		const soulMsrp = document.createElement('li');

		varient.innerHTML = data.trims[i].name;
		soulId.innerHTML = "Id : " + data.trims[i].id;
		soulName.innerHTML = "Varient : " + data.trims[i].name;
		soulDesc.innerHTML = "Engine : " + data.trims[i].description;
		soulMsrp.innerHTML = "MSRP : $" + data.trims[i].msrp;
		soulInvoice.innerHTML = "Invoice : $" + data.trims[i].invoice;


		img.src = "images/" + pictures[i];

		root.appendChild(trim);
		trim.appendChild(varients);
		varients.appendChild(ul);
		ul.appendChild(varient);
		ul.appendChild(soulId);
		ul.appendChild(soulName);
		ul.appendChild(soulDesc);
		ul.appendChild(soulInvoice);
		ul.appendChild(soulMsrp);
		trim.appendChild(img)
	}
}

Data();




