document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idLista: 'listaEmpresa',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/empresas',
        linhas:
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
    await appCorporativa.criarLista(parametros);

});
