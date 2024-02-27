function realizarTransferencia() {
    var destinatario = document.getElementById('destinatario').value;
    var moeda = document.getElementById('moeda').value;
    var valor = parseFloat(document.getElementById('valor').value);
  
    if (!destinatario || !moeda || isNaN(valor) || valor <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
  
    const usuarioLogado = obterUsuarioLogado(); // Função que obtém o usuário logado
    const saldos = JSON.parse(localStorage.getItem('saldos')) || {};
  
    // Verifica se há um usuário logado
    if (!usuarioLogado) {
      alert('Usuário não autenticado. Faça login para realizar transferências.');
      return;
    }
  
    // Verifica se há saldo suficiente
    if (!saldos.hasOwnProperty(moeda) || saldos[moeda] < valor) {
      alert('Saldo insuficiente. O saldo disponível para esta moeda é ' + (saldos[moeda] || 0).toFixed(2));
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
      if (result.isConfirmed && result.value === usuarioLogado.senha) {
        // Realiza a transferência
        alert('Usuário autenticado. Transferindo ' + valor.toFixed(2) + ' ' + moeda + ' para ' + destinatario + '.');
        console.log(`Transferência de ${valor} ${moeda} para ${destinatario} realizada com sucesso.`);
        alert(`Transferência de ${valor} ${moeda} para ${destinatario} realizada com sucesso.`);
  
        // Atualiza os saldos e exibe na página
        saldos[moeda] = parseFloat((saldos[moeda] - valor).toFixed(2));
        localStorage.setItem('saldos', JSON.stringify(saldos));
        exibirSaldos();
      } else {
        alert('Senha incorreta. Transferência cancelada.');
      }
    });
  
    function exibirSaldos() {
      console.log('Chamando exibirSaldos');
      const saldosElement = document.getElementById('saldos');
  
      saldosElement.innerHTML = '';
      for (const moeda in saldos) {
        const saldoLinha = document.createElement('li');
        saldoLinha.textContent = `Saldo ${moeda}: ${saldos[moeda].toFixed(2)}`;
        saldosElement.appendChild(saldoLinha);
      }
    }
  }
  
  // Função fictícia para obter o usuário logado (substitua por sua lógica real)
  function obterUsuarioLogado() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado')) || null;
    return usuarioLogado;
  }
  
