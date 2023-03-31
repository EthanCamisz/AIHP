const btnContinuar = document.getElementById('button')


btnContinuar.addEventListener('click', function() {


    let sintoma = document.getElementById('sintomas')
    let grauUrgencia = document.getElementById('grau')

    const alergias = alergia.value
    const grau = grauUrgencia.value
    const sintomas = sintoma.value

    if (sintomas === '' || sintomas === null) {
        alert("Preencha o campo dos sintomas")
    }

    if (grau === '' || grau === null) {
        alert("Sinalize o grau de urgência para o atendimento")

    }
 
    let inputAlergia = document.getElementsByName('selecao')

inputAlergia.addEventListener('click', () => {
    let tem = document.getElementById('sim')
    let nTem = document.getElementById('nao')

    let nao = nTem.value
    let sim = tem.value

    if(sim){
    let alergia = document.getElementById('alergias')
      
    if(alergia ===''){
        alert('Preencha o campo falndo sua(s) alergia(s)')
    }
    }

    
})

let emergencia = document.getElementById('urgencias')


let urgencia = emergencia.value

if(urgencia ===''||urgencia === null){
    alert("Escolha o grau de urgência de atendimento")
}
})