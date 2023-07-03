const form = document.getElementById('lista-contatos');

const nome = [];
const numero = [];

let novaLinha = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addContact();
  updateList();
});

function addContact() {
  const inputContatoNome = document.getElementById('contatcName');
  const inputNumero = document.getElementById('contactNumber');

  if (numero.includes(inputNumero.value)) {
    alert(`O número ${inputNumero.value} já foi cadastrado`);
  } else {
    nome.push(inputContatoNome.value);
    numero.push(inputNumero.value);

    let linha = '<tr>';
    linha += `<td>${inputContatoNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    novaLinha += linha;

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = novaLinha;
  }

  inputContatoNome.value = '';
  inputNumero.value = '';
}

function updateList() {
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = novaLinha;
}
