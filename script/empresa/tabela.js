document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idTabela: 'tabelaEmpresa',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/empresas',
        colunas:
        [
            {titulo: 'ID', dado: 'id'},
            {titulo: 'Nome', dado: 'nome'},
            {titulo: "Tipo", dado: "tipo"},

        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/empresas',
        urlEditar: 'formulario.html?id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    await appCorporativa.criarTabela(parametros);

});
