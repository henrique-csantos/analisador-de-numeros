let num = document.querySelector('input#fnum') //poderia ter usado window.document, mas para otimizar a digitação foi cortado o window
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função que checa se o número está entre ou se é válido
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//função que checa se o número está ou não presente na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//função do botão adicionar
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')//cria o item que no caso é uma teg option
        item.text = `Valor ${num.value} adicionado`//cria uma string com possibilidade de interpolação
        lista.appendChild(item)//adiociona o item à lista
        res.innerHTML = '' // após adicionar um item à lista o resultado será apagado.
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''//para apagar os dados presentes dentro do iput
    num.focus()//abilita para digitção sem a necessidade de clicar na caixa de texto novamente
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length //verifica quantos valores então no array
        let maior = valores [0] // seta o maior valor como zero
        let menor = valores [0] // seta o menor valor como zero
        let soma = 0 // seta o valor da soma como zero
        let media = 0 // seta o valor da media como zero
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } 
            if (valores[pos] < menor){
                menor = valores[pos]
            } 
        }
        media = soma / tot 

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>` 
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}