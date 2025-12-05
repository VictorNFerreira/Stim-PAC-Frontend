document.addEventListener("DOMContentLoaded", async function()
{
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");

    let parametros =
    {
        idFormulario: 'formConta',
        campos:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Nome', dado: 'nome', tipo: 'texto', obrigatorio: true},
            {titulo: 'Email', dado: 'email', tipo: 'email', obrigatorio: true, valorPadrao: email},
            {titulo: 'Senha', dado: 'senha', tipo: 'senha', obrigatorio: true},
            {titulo: "Papel", dado: "papel", tipo: "selecao", opcoes: [{nome: "Usuário", valor: "usuário"}, {nome: "Admin", valor: "admin"}], obrigatorio: true},

        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/contas',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/contas/id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    appCorporativa.criarFormulario(parametros);

});
