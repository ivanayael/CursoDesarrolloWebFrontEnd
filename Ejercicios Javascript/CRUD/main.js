// Array para almacenar los clientes
let customers = [];
let currentIndex; // Índice del cliente que se está editando

// Función para validar el formulario y guardar el cliente
function validateAndSave() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Validación simple
  if (name === '' || email === '' || phone === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }

  // Crear objeto cliente
  const customer = {
    name: name,
    email: email,
    phone: phone
  };

  // Guardar cliente en el array
  customers.push(customer);

  // Limpiar el formulario
  document.getElementById('customerForm').reset();

  // Actualizar la tabla
  updateTable();

  alert('Cliente guardado con éxito.');
}

// Función para actualizar la tabla de clientes
function updateTable() {
  const tableBody = document.getElementById('customerTable').querySelector('tbody');
  tableBody.innerHTML = '';

  customers.forEach((customer, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.email}</td>
      <td>${customer.phone}</td>
      <td>
        <button onclick="editCustomer(${index})">Editar</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Función para editar un cliente
function editCustomer(index) {
  const customer = customers[index];

  // Llenar el formulario de edición con los datos del cliente seleccionado
  document.getElementById('editName').value = customer.name;
  document.getElementById('editEmail').value = customer.email;
  document.getElementById('editPhone').value = customer.phone;

  // Mostrar el formulario de edición
  document.getElementById('editForm').style.display = 'block';

  // Guardar el índice del cliente que se está editando
  currentIndex = index;
}

// Función para guardar los cambios del cliente editado
function saveEditedCustomer() {
  const name = document.getElementById('editName').value;
  const email = document.getElementById('editEmail').value;
  const phone = document.getElementById('editPhone').value;

  // Validación simple
  if (name === '' || email === '' || phone === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }

  // Actualizar los datos del cliente en el array
  customers[currentIndex].name = name;
  customers[currentIndex].email = email;
  customers[currentIndex].phone = phone;

  // Ocultar el formulario de edición
  document.getElementById('editForm').style.display = 'none';

  // Actualizar la tabla
  updateTable();

  alert('Cliente actualizado con éxito.');
}

// Función para exportar los clientes a un archivo TXT
function exportToTxt() {
  if (customers.length === 0) {
    alert('No hay clientes para exportar.');
    return;
  }

  let data = 'Nombre,Correo Electrónico,Número de Teléfono\n';
  customers.forEach(customer => {
    data += `${customer.name},${customer.email},${customer.phone}\n`;
  });

  // Crear un blob con los datos
  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // Crear un enlace de descarga
  const a = document.createElement('a');
  a.href = url;
  a.download = 'clientes.txt';
  document.body.appendChild(a);
  a.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
