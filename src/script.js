const elemento = document.getElementById('header')
if (!elemento) {
  console.log('não encontrou elemento header')
}

// elemento.innerText = 'Texto Modificado'


document.getElementById('meuBotao')
  .addEventListener('click', () => {
    console.log('botão clicado')
})