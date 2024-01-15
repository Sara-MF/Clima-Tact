const keyApi = '61f5bc70276148a2822112832231312';

const botaoBusca = document.querySelector("#btn-busca");

botaoBusca.addEventListener("click", async () => {

    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarCidade(cidade);

    preencherDadosNaTela(dados, cidade);
});

async function buscarCidade(cidade) {

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${keyApi}&q=${cidade}&aqi=no&lang=pt`;

    const response = await fetch(apiUrl);

    if (response.status !== 200) {

        document.getElementById("cidade").textContent = "Insira uma cidade válida";

    } else {

        const dados = response.json();
    
        return dados;
    }


}

function preencherDadosNaTela(dados, cidade) {

    // Principal //

    const temperatura = dados.current.temp_c;
    const icone = dados.current.condition.icon;
    const tempo = dados.current.condition.text;

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} °C`;

    document.getElementById("icone-clima").setAttribute("src", 'https:' + icone);

    document.getElementById("tempo").textContent = tempo;

    // Secundaria //

    const umidade = dados.current.humidity;
    const vento = dados.current.wind_kph;

    document.getElementById("umidade").textContent = `${umidade} %`;

    document.getElementById("velocidade-vento").textContent = `${vento} Km/h`;
}