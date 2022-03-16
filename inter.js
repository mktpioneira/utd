function send() {

    let name = window.document.querySelector('#Textoss').value
    let email = window.document.querySelector('#tMail').value
    let fone = window.document.querySelector('#tTel').value

    alert(`Olá, ${name}. Antes de continuar, verifique seus dados! Seu e-mail para contato é: ${email} e seu telefone ${fone}, está correto?`)

}





/*

            window.addEventListener('scroll', function() {
                var he = window.document.querySelector(".cabecalho ")
                he.classList.toggle("stick ", window.scrollY > 0)
            })

            window.addEventListener('scroll', function() {
                var divisao = window.document.querySelector('.heads')
                var logo = window.document.querySelector('#logotipo')
                var area_red = window.document.querySelector('.cabecalho')
                var area_blue = window.document.querySelector('.heads')
                var menu = window.document.querySelector('#menu')

                if (divisao.classList.toggle("new ", window.scrollY > 0)) {
                    logo.style.transition = "1s all ease-in-out "
                    area_red.style.top = "-35px "
                    area_red.style.transition = "0.6s all ease-in-out "
                    area_blue.style.top = "50px "
                    menu.style.top = "5px "

                } else {
                    logo.style.top = '-50px'
                    area_blue.style.top = "30px "
                    area_red.style.top = "-30px "
                    menu.style.top = "0px "
                }
            })
*/
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