document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idTabela: 'tabelaBiblioteca',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/bibliotecas',
        colunas:
        [
            {titulo: 'ID', dado: 'id'},
            {titulo: 'Jogos', dado: 'jogos'},
            {titulo: 'Quantidade de Itens', dado: 'quantidadeItens'},

        ],
        exibeEditar: false,
        idEnvio: 'id',
        exibeRemover: false,
        urlRemover: '',
        urlEditar: '',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    await appCorporativa.criarTabela(parametros);

});
