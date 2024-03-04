function exibirSaldos() {
  console.log('Chamando exibirSaldos');
  const saldosElement = document.getElementById('saldos');

  if (!saldosElement) {
    console.error('Elemento com ID "saldos" não encontrado.');
    return;
  }

  // Limpa os saldos antes de atualizar
  saldosElement.innerHTML = '';

  const saldos = JSON.parse(localStorage.getItem('saldos')) || {};
  
  for (const moeda in saldos) {
    const saldoCard = document.createElement('div');
    saldoCard.className = 'card card-saldo mb-3';

    const saldoCardBody = document.createElement('div');
    saldoCardBody.className = 'card-body';

    const saldoTitulo = document.createElement('h3');
    saldoTitulo.className = 'card-title';
    saldoTitulo.textContent = `Saldo ${moeda}`;

    const saldoTexto = document.createElement('p');
    saldoTexto.className = 'card-text';
    saldoTexto.textContent = `${saldos[moeda].toFixed(2)}`;

    saldoCardBody.appendChild(saldoTitulo);
    saldoCardBody.appendChild(saldoTexto);

    saldoCard.appendChild(saldoCardBody);
    saldosElement.appendChild(saldoCard);
  }
}

// Chama a função para exibir saldos no início
window.addEventListener('load', function () {
  exibirSaldos();
});

function realizarTransferencia() {
  var destinatario = document.getElementById('destinatario').value;
  var moeda = document.getElementById('moeda').value;
  var valor = parseFloat(document.getElementById('valor').value);

  if (!destinatario || !moeda || isNaN(valor) || valor <= 0) {
    Swal.fire({
      icon: "warning",
      title: "Por favor, preencha todos os campos para continuar",
      showConfirmButton: false,
      timer: 1500
    });
    
    return;
  }

  // Verifica se o usuário do destinatário está cadastrado no Local Storage
  const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
  const destinatarioCadastrado = usuariosCadastrados.find(usuario => usuario.email === destinatario);

  if (!destinatarioCadastrado) {

    Swal.fire({
      title: "Usuário não cadastrado",
      icon: "question",
      text: "Recomende o App",
      confirmButtonText: "Sim",
    cancelButtonText: "Não",
    showCancelButton: true,
    showCloseButton: true
    });
    
    return;
  }

  const saldos = JSON.parse(localStorage.getItem('saldos')) || {};

  // Verifica se há saldo suficiente
  if (!saldos.hasOwnProperty(moeda) || saldos[moeda] < valor) {
    Swal.fire({
      icon: "error",
      title: "Saldo Insuficiente",
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  // Solicitação da senha do usuário logado usando SweetAlert2
  Swal.fire({
    title: 'Confirmação de Transferência',
    input: 'password',
    inputPlaceholder: 'Digite sua senha para confirmar a transferência',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(`Transferência de ${valor} ${moeda} para ${destinatario} realizada com sucesso.`);
      //alert(`Transferência de ${valor} ${moeda} para ${destinatario} realizada com sucesso.`);
      let timerInterval;
Swal.fire({
  title: "Transferindo...",
  html: "<b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

      // Atualiza os saldos
      saldos[moeda] = parseFloat((saldos[moeda] - valor).toFixed(2));
      localStorage.setItem('saldos', JSON.stringify(saldos));


      // Exibe os saldos atualizados
      exibirSaldos();
    } else {
      Swal.fire({
        icon: "error",
        title: "Operação Cancelada",
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}
