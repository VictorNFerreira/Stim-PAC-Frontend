document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idFormulario: 'formCompra',
        campos:
        [
            {titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false},
            {titulo: 'Conta', dado: 'conta', dadoExibicao: "conta.id", urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/contas', tipo: 'relacionamento', obrigatorio: true},
            {titulo: 'Produto', dado: 'produto', dadoExibicao: "produto.nome", urlConsulta: 'http://localhost:8080/AppCorporativaMavenWeb/produtos', tipo: 'relacionamento', obrigatorio: true},
            {titulo: "Tipo de produto", dado: "produtoTipo", tipo: "selecao", opcoes: [{nome: "Jogo", valor: "jogo"}, {nome: "Dlc", valor: "dlc"}], obrigatorio: true},
            {titulo: "Valor", dado: "valor", tipo: "texto", obrigatorio: true},
            //{titulo: "Data da compra", dado: "dataCompra", tipo: "texto", obrigatorio: true},
            {titulo: 'Forma de pagamento', dado: 'formaDePagamento', tipo: 'texto', obrigatorio: true},
            
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/compras',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/compras/id=',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/compras/id=',
        token: localStorage.getItem("tokenAppCorporativa"),

    };
    appCorporativa.criarFormulario(parametros);

});
