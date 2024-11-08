const url = 'https:// raw.githubercontentnt.com/guilhrmeonrail/api/main/dao-globais.json'

async function vizualiarInormacoGlobais() {
    const res = await fetch (url)
    const dados = await res.json ()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_médio - horas) 
    const minutos = Math.round((dados.tempo_médio-horas) *100)


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTMl = Você sabia que o mundo tem </span>$ 
    {pessoasNomundo} bilhões</span> de pessoa e que aproximadamente<span>$
    {pessoasConectadas} bilhões</span>  estão conectadas em alguma rede social e passam em média <span>${minutos}
    minutos</span> conectadas.

    const container = document.getElementById('garfico-container')
    container.appendChild(paragrafo)
}