document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idTabela: 'tabelaProduto',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        colunas:
        [
            {titulo: 'ID', dado: 'id'},
            {titulo: 'Nome', dado: 'nome'},
            {titulo: "Tipo", dado: "tipo"},
            {titulo: "Preço", dado: "preco"},
            {titulo: "Avaliações", dado: "avaliacoes"},
            //{titulo: "Data de lançamento", dado: "dataPublicacao"},
            {titulo: "Desenvolvedora", dado: "desenvolvedora.nome"},
            {titulo: "Distribuidora", dado: "distribuidora.nome"},
            {titulo: "Gênero", dado: "genero"},
            {titulo: "Dlcs", dado: "dlcs"},

        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        urlEditar: 'formulario.html?id=',

    };
    await appCorporativa.criarTabela(parametros);

});
