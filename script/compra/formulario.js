document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formCompra',
        colunas:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Conta', dado: 'conta', dadoExibicao: "conta.id", urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/contas', tipo: 'relacionamento', obrigatorio: true},
            {titulo: 'Produto', dado: 'produto', dadoExibicao: "produto.nome", urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/produtos', tipo: 'relacionamento', obrigatorio: true},
            {titulo: "Tipo de produto", dado: "produtoTipo", tipo: "selecao", opcoes: [{nome: "Jogo", valor: "jogo"}, {nome: "Dlc", valor: "dlc"}], obrigatorio: true},
            {titulo: "Valor", dado: "valor", tipo: "textoCurto", obrigatorio: true},
            //{titulo: "Data da compra", dado: "dataCompra", tipo: "textoCurto", obrigatorio: true},
            {titulo: 'Forma de pagamento', dado: 'formaDePagamento', tipo: 'textoCurto', obrigatorio: true},
            
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/compras',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/compras/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/compras/id=',

    };
    appCorporativa.criarFormulario(parametros);

});
