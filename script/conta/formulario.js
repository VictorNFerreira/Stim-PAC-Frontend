document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formConta',
        colunas:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true},
            {titulo: 'Email', dado: 'email', tipo: 'textoCurto', obrigatorio: true},
            {titulo: 'Senha', dado: 'senha', tipo: 'textoCurto', obrigatorio: true},

        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',

    };
    appCorporativa.criarFormulario(parametros);

});
