function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa) {
        section.innerHTML = "<p>Nenhum atleta encontrado</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Limpa a seção antes de adicionar novos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre os dados da pesquisa e cria elementos HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado
            resultados += `

            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações sobre a
                            atleta</a>
            </div>
        
        `
        }
    }

    if(!resultados) {
        resultados = <p>Nada foi encontrado</p>
    }

    // Adiciona os resultados à seção
    section.innerHTML = resultados;
}


