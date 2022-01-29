/* Criptografia */

function criptografaTexto() {
  let textoCapturado = document.querySelector('textarea').value
  let arrayTexto = textoCapturado.split('')
  let textoCriptografado

  for (var i = 0; i < arrayTexto.length; i++) {
    if (arrayTexto[i] === 'a') {
      arrayTexto[i] = 'ai'
    }
    if (arrayTexto[i] === 'e') {
      arrayTexto[i] = 'enter'
    }
    if (arrayTexto[i] === 'i') {
      arrayTexto[i] = 'imes'
    }
    if (arrayTexto[i] === 'o') {
      arrayTexto[i] = 'ober'
    }
    if (arrayTexto[i] === 'u') {
      arrayTexto[i] = 'ufat'
    }
  }

  textoCriptografado = arrayTexto.join('')

  let exibeCripto = document.getElementById('msg')

  exibeCripto.value = textoCriptografado
}

/* criptografar */
var btnCripto = document.querySelector('button')

btnCripto.addEventListener('click', function (e) {
  e.preventDefault()

  criptografaTexto()
})

/*  Desencriptar*/
function converteTexto(textoCapturado) {
  return textoCapturado
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')
}

/*  botão descriptografar */
var btnDescripografar = document.getElementById('btn-descripto')

btnDescripografar.addEventListener('click', function (e) {
  e.preventDefault()

  let textoCapturado = document.getElementById('criptografia').value

  let exibeDesCripto = document.getElementById('msg')

  exibeDesCripto.value = converteTexto(textoCapturado)
})

/*  função copiar */
var btnCopy = document.getElementById('copiar')

btnCopy.addEventListener('click', function (e) {
  e.preventDefault()
  document.getElementById('msg').select()
  document.execCommand('Cut')
})

/*função oculta/mostra div */
var btnOcultar = document.getElementById('btn-cripto')

var btnMostrar = document.getElementById('copiar')

var oculta = document.getElementById('ilustra')

var mostar = document.getElementById('ilustra')

btnOcultar.addEventListener('click', function () {
  if (oculta.style.display === 'block') {
    oculta.style.display = 'none'
  } else {
    oculta.style.display = 'none'
  }
})

btnMostrar.addEventListener('click', function () {
  if (mostar.style.display === 'none') {
    mostar.style.display = 'block'
  } else {
    mostar.style.display = 'block'
  }
})

/*  função bloquear caracteres especiais*/
var blockChars = document.querySelector('#criptografia')
blockChars.addEventListener('keypress', function (e) {
  if (!checkChar(e)) {
    e.preventDefault()
  }
})
function checkChar(e) {
  var char = String.fromCharCode(e.keyCode)

  console.log(char)
  var pattern = '[a-z]'
  if (char.match(pattern)) {
    return true
  }
}
