function send() {

    let name = window.document.querySelector('#Textoss').value
    let email = window.document.querySelector('#tMail').value
    let fone = window.document.querySelector('#tTel').value

    alert(`Olá, ${name}. Antes de continuar, verifique seus dados! Seu e-mail para contato é: ${email} e seu telefone ${fone}, está correto?`)

}







window.addEventListener('scroll', function() {
    var he = window.document.querySelector(".cabecalho ")
    he.classList.toggle("stick", window.scrollY > 1000)
})

window.addEventListener('scroll', function() {

    var head = this.window.document.querySelector('.cabecalho')
    var head_2 = this.window.document.querySelector('.heads')
    var logo = this.window.document.querySelector('#logotipo')


    if (this.window.scrollY > 0) {
        head.style.top = '-50px'
        head_2.style.top = '-10px'
        head_2.style.background = '#889c1e'
        logo.src = 'Logo_Vetor - white.png'
        logo.style.top = '-20px'

    } else {
        head.style.top = '0'
        head_2.style.top = '25px'
        head_2.style.background = 'rgba(255, 255, 255, 0.452)'
        head_2.style.color = 'rgb(0,0,0)'
        logo.src = 'Logo_Vetor.png'

    }



})

//função de tempo

var data = window.document.getElementById('right')
let receber = new Date();
const ano = receber.getFullYear();
data.innerHTML += `${ano}`

/*
                //mapa interativo

                function mostrar(e) {

                    if (e == 1) {
                        var mapa = window.document.querySelector('#map')
                        mapa.style.left = '-10%'
                    }

                    if (e == 2) {
                        var mapa = window.document.querySelector('#map')
                        mapa.style.left = '-150%'
                    }

                }

                addEventListener('keydown', function(event) {
                    let close = window.document.getElementById('map')
                    if (event.keyCode == 27) {
                        close.style.left = '-150%'
                    }
                })*/




let counter = 1;
setInterval(function() {
    window.document.querySelector('#radio' + counter).checked = true;
    counter++;

    if (counter > 3) {
        counter = 1;
    }
}, 5000);


let turn = 1;
setInterval(function() {
    window.document.querySelectorAll('img' + turn)
    if (turn > 6) {
        turn = 1;
    }
}, 500);



const imgs = window.document.querySelector('.im')
const img = window.document.querySelectorAll("#img img")

let idx = 0

function carrossel() {
    idx++

    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`

    setInterval(carrossel, 1800)
}



//cookies

function cookies(e) {
    let btn_y = window.document.querySelector('#accept')
    let btn_n = window.document.querySelector('#all-recuse')
    const area = window.document.querySelector('.cookies')

    if (e == 1) {
        area.style.bottom = '-500px'

    } else if (e == 2) {
        area.style.bottom = '-500px'
    }
}

addEventListener('scroll', function() {
    let btn = this.window.document.querySelector('#button_top')

    if (this.scrollY > 100) {
        btn.style.display = 'flex'
    } else {
        btn.style.display = 'none'
    }
})

function clicar(event) {

    let square = window.document.querySelector('.area-main-one')
    let square_two = window.document.querySelector('.area-main-two')

    if (event == 1) {
        square.style.height = '500px'
    } else {
        square.style.height = '0px'
    }


    if (event == 3) {
        square_two.style.width = '900px'
    } else {
        square_two.style.width = '0px'
    }
}
