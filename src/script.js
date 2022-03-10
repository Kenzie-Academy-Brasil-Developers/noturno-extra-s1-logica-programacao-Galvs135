function calculateSalary()
{
    
}


function calculateStock(qtdAtual,qtdMax,qtdMin)
{
    let qtdMedia = (qtdMax+qtdMin)/2
    
    if(qtdMedia <= qtdAtual){
        return "Não efetuar compra"
    }
    return "Efetuar compra"
}


function calculateAge(anoNasc,anoAtual)
{
    let idadeAnos = anoAtual - anoNasc
    let idadeMeses = idadeAnos * 12
    let idadeDias = 0
    for(let counter = 1; counter < idadeAnos;counter++)
    {
        if(counter / 4 === 0)
        {
            idadeDias += 366
        }else
        {
            idadeDias += 365
        }
    }

    let valorTotalSemanas = idadeDias/7

    let idadeSemanas = parseInt(idadeSemana)

    return {idadeAnos,idadeMeses,idadeDias,idadeSemanas}
}


function getDiagonal(x)
{
    let array = []
    let tamanho = 1
    let result = []
    for(let counter = 0; counter < x; counter++)
    {
        array.push([])
        for(let counter2 = 0; counter2 < x; counter2++)
        {
            array[counter][counter2] = tamanho
            tamanho++
        }
    }

    for(let counter3 = 0; counter3 < array.length;counter3++)
    {
        result.push(array[counter3][counter3])
    }

    return result
}



function cashMachine(saque)
{
    let result100 = saque / 100
    let notas100 = parseInt(result100)
    saque -= notas100*100
    let result50 = saque / 50
    let notas50 = parseInt(result50)
    saque -= notas50*50
    let result20 = saque / 20
    let notas20 = parseInt(result20)
    saque -= notas20*20
    let result10 = saque / 10
    let notas10 = parseInt(result10)
    saque -= notas10*10
    let result5 = saque / 5
    let notas5 = parseInt(result5)
    saque -= notas5*5
    let result2 = saque / 2
    let notas2 = parseInt(result2)
    saque -= notas2*2

    return {notas100,notas50,notas20,notas10,notas5,notas2}
}