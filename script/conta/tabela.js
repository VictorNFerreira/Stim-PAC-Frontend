document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idTabela: 'tabelaConta',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        colunas:
        [
            {titulo: 'ID', dado: 'id'},
            {titulo: 'Nome', dado: 'nome'},
            {titulo: 'Email', dado: 'email'},
            {titulo: 'Senha', dado: 'senha'},
            {titulo: 'Saldo', dado: 'saldo'},
            {titulo: "Biblioteca", dado: "biblioteca.id"},

        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        urlEditar: 'formulario.html?id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    await appCorporativa.criarTabela(parametros);

});
