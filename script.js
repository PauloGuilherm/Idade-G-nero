var data_nascimento
var idade
var sexo
var saida_dados
saida_dados = document.getElementById("saidaTexto")
var img1 = document.getElementById("img")


function verificacao(){
    data_nascimento = document.getElementById("data_nasc").value

    idade = 2021 - data_nascimento  
    
    sexo = document.getElementById("masculino").checked
    
    sexo == true ? sexo = 'Homem' : sexo = 'Mulher'
    
    if(sexo == 'Homem' && idade >=18 && idade <=40){
        document.body.style.backgroundColor = "Blue";
        img1.setAttribute("src","img/homem.jpg");
        saida_dados.innerHTML = (`você é ${sexo} e tem ${idade} anos`)
    }
    else if(sexo == 'Mulher' && idade >=18 && idade <=40){
        document.body.style.backgroundColor = "Pink";
        img1.setAttribute("src","img/mulher.jpg");
        saida_dados.innerHTML = (`você é ${sexo} e tem ${idade} anos`)
    }
    if (sexo == 'Homem' && idade >= 60){
        document.body.style.backgroundColor = "BLack"
        img1.setAttribute("src","img/homem-velho.jpg");
        saida_dados.innerHTML = (`você é ${sexo} e tem ${idade} anos`)
    }
    else if(sexo == 'Mulher' && idade >= 60){
        document.body.style.backgroundColor = "Green"
        img1.setAttribute("src","img/mulher-velha.jpg");
        saida_dados.innerHTML = (`você é ${sexo} e tem ${idade} anos`)
    }
    if(data_nascimento >= 2021){
        window.alert('[ERROR]Verifique os dados e tente novamente!')
        saida_dados.innerHTML = (`Digite os dados novamente! `)
        img1.setAttribute("src"," ");
     }
    else if (sexo == 'Homem' && idade <=10 ){
        saida_dados.innerHTML = (`Você é um bebê de ${idade} anos`)
        img1.setAttribute("src","img/bebê-menino.jpg");
     }
    if(sexo =='Mulher' && idade <=10){
        saida_dados.innerHTML = (`Você é uma bebê de ${idade} anos`)
        img1.setAttribute("src","img/bebê-menina.jpg");
     }
     else if(idade == 2021){
        window.alert('[ERROR]Verifique os dados e tente novamente!')
        saida_dados.innerHTML = (`Digite os dados novamente! `)
        img1.setAttribute("src"," ");
     }
     if(sexo == 'Homem' && idade >40 && idade <60){
        saida_dados.innerHTML = (`Você é um homem de ${idade} anos`)
        img1.src = ("img/homem-adulto.jpg")
     }
     else if (sexo == 'Mulher' && idade >=40 && idade <60){
        saida_dados.innerHTML = (`Você é uma mulher de ${idade} anos`)
        img1.src = ("img/mulher-adulta.jpg")
     }
     if (sexo == 'Homem' && idade >10 && idade <18){
        saida_dados.innerHTML = (`Você é um adolescente de ${idade} anos`)
        img1.src = ("img/adolescente.jpg")
     }
     else if (sexo == 'Mulher' && idade >10 && idade <18){
        saida_dados.innerHTML = (`Você é uma adolescente de ${idade} anos`)
        img1.src = ("img/adolescente-mulher.jpg")
     } 
     if(data_nascimento < 1900 ){
        alert('')
        saida_dados.innerHTML = `Informe os dados novamente`
        img1.src = ' '
     }
}


sexo = (' ')
idade = (' ')