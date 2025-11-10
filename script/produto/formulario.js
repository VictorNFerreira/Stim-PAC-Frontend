document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formProduto',
        campos:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true},
            {titulo: "Tipo", dado: "tipo", tipo: "selecao", opcoes: [{nome: "Jogo", valor: "jogo"}, {nome: "Dlc", valor: "dlc"}], obrigatorio: true},
            {titulo: "Preço", dado: "preco", tipo: "textoCurto", obrigatorio: false},
            //{titulo: "Data de Lançamento", dado: "dataPublicacao", tipo: "textoCurto", obrigatorio: false},
            {titulo: "Desenvolvedora", dado: 'desenvolvedora', dadoExibicao: 'desenvolvedora.nome', urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/empresas', tipo: 'relacionamento', obrigatorio: true},
            {titulo: "Distribuidora", dado: 'distribuidora', dadoExibicao: "distribuidora.nome", urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/empresas', tipo: 'relacionamento', obrigatorio: true},
            {titulo: 'Gênero', dado: 'genero', tipo: 'textoCurto', obrigatorio: false},
            {titulo: "Jogo Associado", dado: 'jogoAssociado', dadoExibicao: 'jogoAssociado.nome', urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/produtos', tipo: 'relacionamento', obrigatorio: false},

        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/produtos/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/produtos/id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    appCorporativa.criarFormulario(parametros);

});
