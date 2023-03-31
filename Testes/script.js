const inNome = document.getElementById('inNome')
const inData = document.getElementById('inData')
const CPF = document.getElementById('CPF')
const outResposta = document.getElementById('outResposta')
const btn = document.getElementById('btn')

function ativar(){
    window.location = 'pages/bancodeInformações.html';
}
btn.addEventListener('click', () =>{

    let nome = inNome.value
    let data = Number(inData.value)
    let cpf = Number(CPF.value)

    if(nome === '' || data === '' || cpf === '' ){
        alert('Por favor, Informe seu nome, a data de nascimento e o cpf')
        inNome.focus()
        return
    
    }else{
        ativar()
    }
    
})