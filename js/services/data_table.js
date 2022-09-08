// ruta de base de datos

export const rootServer = 'http://localhost:8000';

export const objPost = (entregado) => ({
	method: 'PUT',
	body: JSON.stringify({ entregado }),
	headers: {
		'Content-type': 'application/json'
	}
});

// Funcion que genera de manera mas legible elementos

export const $crE = (element) => document.createElement(element);

// funcion que generea dinamicamente los elementos de la lista de usuarios

export default function dataTable(data, users, $crE) {
	users.innerHTML = '';

	data.forEach((user) => {
		const containerUser = $crE('div');
		containerUser.classList.add('user');

		const titleCedula = $crE('h3');
		titleCedula.textContent = 'Cédula';

		const cedula = $crE('p');
		cedula.textContent = user.cedula;

		const titleNombre = $crE('h3');
		titleNombre.textContent = 'Nombre';

		const nombre = $crE('p');
		nombre.textContent = user.Nombre.toLowerCase();

		const titleId = $crE('h3');
		titleId.textContent = 'ID';

		const id = $crE('p');
		id.textContent = user.id;

		const titleFecha = $crE('h3');
		titleFecha.textContent = 'Fecha';

		const fecha = $crE('p');
		fecha.textContent = user.fecha.slice(0, 10);

		const titleCheck = $crE('h3');
		titleCheck.textContent = 'Entregado';

		const containerCheck = $crE('div');

		const check = $crE('div');
		check.classList.add('user--check');
		check.setAttribute('title', 'boton');
		check.classList.toggle('user--check__active', user.entregado);

		containerCheck.append(check);

		const dataWrapper = $crE('div');
		dataWrapper.classList.add('user--data-wrapper');

		const titleCargo = $crE('h3');
		titleCargo.textContent = 'Cargo';

		const titleDependencia = $crE('h3');
		titleDependencia.textContent = 'Dependencia';

		const titleDescripcion = $crE('h3');
		titleDescripcion.textContent = 'Descripcion';

		const cargo = $crE('p');
		cargo.textContent = user.Cargo.toLowerCase();

		const dependencia = $crE('p');
		dependencia.textContent = user.Dependencia.toLowerCase();

		const descripcion = $crE('p');
		// pending toLowerCase
		descripcion.textContent = user.descripcion;

		dataWrapper.append(titleCargo, cargo, titleDependencia, dependencia, titleDescripcion, descripcion);

		containerUser.append(titleCedula, cedula, titleNombre, nombre, titleId, id, titleFecha, fecha, titleCheck, containerCheck, dataWrapper);

		users.append(containerUser);
	});
}