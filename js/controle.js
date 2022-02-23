let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')
let contador = 0

// FUNÇÃO PARA ADICIONAR NOVA TAREFA
function addTarefa() {
  // PEGAR VALOR DIGITADO NO INPUT
  let valorInput = input.value

  // SE NÃO FOR VAZIO, NULO OU INDEFINIDO
  if (valorInput !== '' && valorInput !== null && valorInput !== undefined) {
    ++contador

    let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icone">
      <i id="icone_${contador}" title="Clique para marcar ou desmarcar a tarefa!" class="mdi mdi-circle-outline"></i>
    </div>
    <div class="item-nome">
      ${valorInput}
    </div>
    <div class="item-botao">
      <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
    </div>
  </div>`

    // ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem

    // ZERAR-FOCO-ENTER OS CAMPOS
    input.value = ''
    input.focus()
  }
}

// FUNÇÃO PARA ADICIONAR NOVA TAREFA COM CLICK ENTER
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    btnAdd.click()
  }
})

// FUNÇÃO PARA DELETAR TAREFA
function deletar(id) {
  var tarefa = document.getElementById(id)
  tarefa.remove()
}

// FUNÇÃO PARA MARCAR E DESMARCAR TAREFA
function marcarTarefa(id) {
  // PARA BUSCAR A DIV PRINCIPAL COM RESPECTIVO ID
  var item = document.getElementById(id)

  // PARA BUSCAR A CLASSE DA DIV PRINCIPAL
  var classe = item.getAttribute('class')

  if (classe == 'item') {
    item.classList.add('clicado')
    var icone = document.getElementById('icone_' + id)
    icone.classList.remove('mdi-circle-outline')
    icone.classList.add('mdi-check-circle')

    // PARA O ITEM IR PARA O FINAL QUANDO CLICADO
    item.parentNode.appendChild(item)
  } else {
    item.classList.remove('clicado')
    var icone = document.getElementById('icone_' + id)
    icone.classList.remove('mdi-check-circle')
    icone.classList.add('mdi-circle-outline')
  }
}
