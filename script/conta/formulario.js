document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formConta',
        campos:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Nome', dado: 'nome', tipo: 'texto', obrigatorio: true},
            {titulo: 'Email', dado: 'email', tipo: 'email', obrigatorio: true},
            {titulo: 'Senha', dado: 'senha', tipo: 'senha', obrigatorio: true},

        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    appCorporativa.criarFormulario(parametros);

});
