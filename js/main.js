// elementos

const dia = document.querySelector("#dia");
const mes = document.querySelector("#mes");
const ano = document.querySelector("#ano");
const dias = document.querySelector("#dias");
const meses = document.querySelector("#meses");
const anos = document.querySelector("#anos");
const button = document.querySelector(".row-img")


// funções

dia.maxLength = 2;
mes.maxLength = 2;
ano.maxLength = 4;  

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth() + 1;
const diaAtual = dataAtual.getDate();




const validDigits = (text) =>{
    return text.replace(/[^0-9]/g, "");
};
const diaChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    dia.value = uptadeValue;

};
const mesChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    mes.value = uptadeValue;

};
const anoChange = (e)=>{
    const uptadeValue = validDigits(e.target.value);

    ano.value = uptadeValue;

};

// eventos

button.addEventListener('click',()=>{
    const anoNascimento = Number(ano.value);
    const mesNascimento = Number(mes.value);
    const diaNascimento = Number(dia.value);

    let idade = anoAtual - anoNascimento;

    let mesesCompletos = mesAtual - mesNascimento;

    let diasCompletos = diaAtual - diaNascimento

    if(mesesCompletos < 0){
        idade --;
        mesesCompletos = mesesCompletos + 12;
    }
    if (diasCompletos < 0) {
        mesesCompletos--;

        // Obter o último dia do mês anterior ao atual
        const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
        diasCompletos += ultimoDiaMesAnterior;

        if (mesesCompletos < 0) {
            idade--;
            mesesCompletos += 12;
        }
    }

    console.log(idade, mesesCompletos)
    anos.innerHTML = idade;
    meses.innerHTML = mesesCompletos;
    dias.innerHTML = diasCompletos;
})
dia.addEventListener('input', diaChange);
mes.addEventListener('input', mesChange);
ano.addEventListener('input', anoChange);