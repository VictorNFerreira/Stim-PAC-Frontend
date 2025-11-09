document.addEventListener("DOMContentLoaded", async function()
{
    let parametros =
    {
        idTabela: 'tabelaCompra',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/compras',
        colunas:
        [
            {titulo: 'ID', dado: 'id'},
            {titulo: 'Conta', dado: 'conta.id'},
            {titulo: "Produto", dado: "produto.nome"},
            {titulo: "Valor", dado: "valor"},
            //{titulo: "Data da compra", dado: "dataCompra"},
            {titulo: "Forma de pagamento", dado: "formaDePagamento"},

        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/compras',
        urlEditar: 'formulario.html?id=',

    };
    await appCorporativa.criarTabela(parametros);

});
