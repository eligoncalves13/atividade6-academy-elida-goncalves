import { listaPage } from "../pages/ListaPage.po"

Given("acessei a plataforma do CRUD FrontEnd", () => {
    listaPage.visitar();
});

And("existem usuários cadastrados", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "listaUsuarios.json"
    });
});

And("não existem usuários cadastrados", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: []
    });
});

When("consulto a lista de usuários", () => {
    
});

When("visualizo as informações dos usuários cadastrados", () => {
    listaPage.verificarListaUsuarios();
});

When("seleciono a próxima página", () => {
    listaPage.clicarEmProximaPagina();
});

When("seleciono a página anterior", () => {
    listaPage.clicarEmVoltarPagina();
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    listaPage.verificarMensagemErro(mensagemErro);
});

Then("visualizo a próxima página com usuários cadastrados", () => {
    listaPage.verificarPaginacaoAtiva("#paginacaoVoltar");
    listaPage.verificarListaUsuarios();
});

Then("visualizo a página anterior com usuários cadastrados", () => {
    listaPage.verificarPaginacaoAtiva("#paginacaoProximo");
    listaPage.verificarListaUsuarios();
});

And("visualizo opção de {string}", (opcao) => {
    listaPage.verificarOpcao(opcao);
});


