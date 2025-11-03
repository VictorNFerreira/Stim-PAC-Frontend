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

        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        urlEditar: 'formulario.html?id=',

    };
    await appCorporativa.criarTabela(parametros);

});
