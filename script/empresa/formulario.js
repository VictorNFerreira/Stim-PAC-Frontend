document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formEmpresa',
        colunas:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true},
            {titulo: "Tipo", dado: "tipo", tipo: "selecao", opcoes: [{nome: "Desenvolvedora", valor: "desenvolvedora"}, {nome: "Distribuidora", valor: "distribuidora"}], obrigatorio: true},

        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/empresas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/empresas/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/empresas/id=',

    };
    appCorporativa.criarFormulario(parametros);

});
