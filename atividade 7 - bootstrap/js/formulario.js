var verificaName
var verificaVvalue
var verificaJuros
var verificaSelectClassificacao
var verificaDataCorreta
var verificaDataTransferencia
var verificaSelectTransacao
var verificaDescricao
//---------------------------FUNCAO VERIFICACAO-----------------------------------
function verificarNome(nome) {

    var nomeString = nome.split(' ')
    var nomeTratado = ''
    var contadorTratado = 0
    //mudar aceitos
    var charAceitos = [32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 147, 148, 149, 150, 151, 152, 153, 154, 160, 161, 162, 163, 164, 165, 181, 182, 183, 198, 199, 210, 211, 212, 213, 214, 215, 216, 222, 224, 226, 227, 228, 229, 233, 234, 235, 236, 237,]
    var aceito = false

    if (nome.length <= 0) {
        verificaName = false
        return 'Por favor adicione o nome'
    } else {
        for (let contador = 0; contador < nomeString.length; contador++) { //TRATAR E DEIXAR BONITO SEM ESPAÇO com espaço final
            if (nomeString[contador].length != 0) {
                nomeTratado = nomeTratado + nomeString[contador] + ' ' //não funciona totalmente
            }

        }

        nomeString = nomeTratado.split(' ')
        nomeTratado = ''
        for (let contador = 0; contador < nomeString.length; contador++) { //TRATAR E DEIXAR BONITO SEM ESPAÇO NENHUM
            if (nomeString[contador].length != 0 && contador < nomeString.length - 2) {
                nomeTratado = nomeTratado + nomeString[contador] + ' '
            } else {
                nomeTratado = nomeTratado + nomeString[contador]
            }
        }
        if (nomeTratado.length <= 4) {
            verificaName = false
            return 'Nome com tamanho pequeno'
        }


        for (let contador = 0; contador < nomeTratado.length; contador++) {
            char = nomeTratado[contador].charCodeAt(0)
            char = Number(char)
            aceito = false
            for (let contadorAceitos = 0; contadorAceitos < charAceitos.length; contadorAceitos++) {
                if (char == charAceitos[contadorAceitos]) {
                    aceito = true
                    break;
                }

            }
            if (!aceito) {
                verificaName = false
                return 'Caracter não aceito'
            }

        }

    }
    verificaName = true
    return ''

}

function verificarValor(valor) {
    if (valor.length <= 0) {
        verificaVvalue = false
        return 'Por favor adicione um valor'
    }
    if (valor <= 0) {
        verificaVvalue = false
        return 'valor inválido'
    }
    if (valor >= 1000000) {
        verificaVvalue = false
        return 'valor inválido'
    }
    verificaVvalue = true
    return ''

}

function verificarJuros(juros) {
    if (juros.length <= 0) {
        verificaJuros = false
        return 'Por favor adicione um valor'
    }
    if (juros <= 0) {
        verificaJuros = false
        return 'valor inválido'
    }
    if (juros > 1000) {
        verificaJuros = false
        return 'valor inválido'
    }
    verificaJuros = true
    return ''

}

function verificarClassificacao(classifica) {//pode dar ruim rever
    if (classifica == '') {
        verificaSelectClassificacao = false
        verificaSelectTransacao = false
        return 'por favor selecione algo'
    }
    verificaSelectClassificacao = true
    verificaSelectTransacao = true
    return ''
}

function verificarData(ano) { //pode dar ruim rever
    const data = new Date()
    const year = data.getFullYear()
    const anoMinimo = year - 3
    const anoMaximo = year + 2
    if (ano.length != 4) {
        verificaDataCorreta = false
        verificaDataTransferencia = false
        return 'Por favor adicione uma data'
    }
    if (ano < anoMinimo) {
        verificaDataCorreta = false
        verificaDataTransferencia = false
        return 'ano não possivel'
    }
    if (ano > anoMaximo) {
        verificaDataCorreta = false
        verificaDataTransferencia = false
        return 'ano não possivel'
    }
    verificaDataCorreta = true
    verificaDataTransferencia = true
    return ''
}

function verificarDescricao(nome) {
    var nomeString = nome.split(' ')
    var nomeTratado = ''
    var contadorTratado = 0
    //mudar aceitos
    var charAceitos = [32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 147, 148, 149, 150, 151, 152, 153, 154, 160, 161, 162, 163, 164, 165, 181, 182, 183, 198, 199, 210, 211, 212, 213, 214, 215, 216, 222, 224, 226, 227, 228, 229, 233, 234, 235, 236, 237,]
    var aceito = false

    if (nome.length > 0) {

        for (let contador = 0; contador < nomeString.length; contador++) { //TRATAR E DEIXAR BONITO SEM ESPAÇO PORÉM COM ESPAÇO NO FINAL
            if (nomeString[contador].length != 0) {
                nomeTratado = nomeTratado + nomeString[contador] + ' ' //não funciona totalmente DEIXA ESPAÇO FINAL
            }
        }

        nomeString = nomeTratado.split(' ')
        nomeTratado = ''
        for (let contador = 0; contador < nomeString.length; contador++) { //TRATAR E DEIXAR BONITO SEM ESPAÇO NENHUM
            if (nomeString[contador].length != 0 && contador < nomeString.length - 2) {
                nomeTratado = nomeTratado + nomeString[contador] + ' '
            } else {
                nomeTratado = nomeTratado + nomeString[contador]
            }
        }
        if (nomeTratado.length <= 4) {
            verificaDescricao = false
            return 'Descrição muito pequena'
        }


        for (let contador = 0; contador < nomeTratado.length; contador++) {
            char = nomeTratado[contador].charCodeAt(0)
            char = Number(char)
            aceito = false
            for (let contadorAceitos = 0; contadorAceitos < charAceitos.length; contadorAceitos++) {
                if (char == charAceitos[contadorAceitos]) {
                    aceito = true
                    break;
                }

            }
            if (!aceito) {
                verificaDescricao = false
                return 'Caracter não aceito'
            }

        }

    }
    verificaDescricao = true
    return ''

}
//-----------------------------------------------------------------------------
//--------------------------------FUNCAO ANALISE-------------------------------
function analise() {

    var name = document.getElementById('form-nome').value
    var vvalue = document.getElementById('form-valor').value
    var juros = document.getElementById('form-juros').value
    var selectClassificacao = document.getElementById('form-classificacao').value
    var dataCorreta = document.getElementById('form-data-correta').value
    var dataTransferencia = document.getElementById('form-real-data').value
    var selectTransacao = document.getElementById('form-transacao').value
    var descricao = document.getElementById('form-descricao').value

    var textName = document.getElementById('mensagem-form-nome')
    var textValue = document.getElementById('mensagem-form-valor')
    var textJuros = document.getElementById('mensagem-form-juros')
    var textClassificacao = document.getElementById('mensagem-form-classificacao')
    var textDataCorreta = document.getElementById('mensagem-form-data-correta')
    var textDataTransferencia = document.getElementById('mensagem-form-real-data')
    var textTransacao = document.getElementById('mensagem-form-transacao')
    var textDescricao = document.getElementById('mensagem-form-descricao')


    textName.innerText = verificarNome(name)
    textValue.innerText = verificarValor(vvalue)
    textJuros.innerText = verificarJuros(juros)
    textClassificacao.innerText = verificarClassificacao(selectClassificacao)

    var anoDataCorreta = dataCorreta[0] + dataCorreta[1] + dataCorreta[2] + dataCorreta[3]
    textDataCorreta.innerText = verificarData(anoDataCorreta)

    var anodataTransferencia = dataTransferencia[0] + dataTransferencia[1] + dataTransferencia[2] + dataTransferencia[3]
    textDataTransferencia.innerText = verificarData(anodataTransferencia)

    textTransacao.innerText = verificarClassificacao(selectTransacao)
    textDescricao.innerText = verificarDescricao(descricao)

    if (verificaDataCorreta && verificaDataTransferencia && verificaDescricao && verificaJuros && verificaName && verificaSelectClassificacao && verificaSelectTransacao && verificaVvalue) {
        window.alert("foi")
        return true
    }
    window.alert("não foi")
    return false
}
//------------------------------------------------------------------------------
//-----------------------------------EVENTOS------------------------------------
document.getElementById('form-nome').addEventListener('blur', () => { //NOME
    var textName = document.getElementById('mensagem-form-nome')
    textName.innerText = verificarNome(document.getElementById('form-nome').value)
})

document.getElementById('form-valor').addEventListener('blur', () => { //VALOR
    var textValue = document.getElementById('mensagem-form-valor')
    textValue.innerText = verificarValor(document.getElementById('form-valor').value)
})

document.getElementById('form-juros').addEventListener('blur', () => { //JUROS
    var textJuros = document.getElementById('mensagem-form-juros')
    textJuros.innerText = verificarJuros(document.getElementById('form-juros').value)
})

document.getElementById('form-classificacao').addEventListener('blur', () => { //CLASSIFICAÇÃO
    var textClassificacao = document.getElementById('mensagem-form-classificacao')
    textClassificacao.innerText = verificarClassificacao(document.getElementById('form-classificacao').value)
})

document.getElementById('form-data-correta').addEventListener('blur', () => { //DATA CORRETA
    var dataCorreta = document.getElementById('form-data-correta').value
    var textDataCorreta = document.getElementById('mensagem-form-data-correta')
    var anoDataCorreta = dataCorreta[0] + dataCorreta[1] + dataCorreta[2] + dataCorreta[3]
    textDataCorreta.innerText = verificarData(anoDataCorreta)
})

document.getElementById('form-real-data').addEventListener('blur', () => { //DATA TRANSFERENCIA
    var dataTransferencia = document.getElementById('form-real-data').value
    var textDataTransferencia = document.getElementById('mensagem-form-real-data')
    var anodataTransferencia = dataTransferencia[0] + dataTransferencia[1] + dataTransferencia[2] + dataTransferencia[3]
    textDataTransferencia.innerText = verificarData(anodataTransferencia)
})

document.getElementById('form-transacao').addEventListener('blur', () => { //LOCAL DA TRANSICAO
    var textTransacao = document.getElementById('mensagem-form-transacao')
    textTransacao.innerText = verificarClassificacao(document.getElementById('form-transacao').value)
})

document.getElementById('form-descricao').addEventListener('blur', () => { //DESCRICAO
    var textDescricao = document.getElementById('mensagem-form-descricao')
    textDescricao.innerText = verificarDescricao(document.getElementById('form-descricao').value)
})