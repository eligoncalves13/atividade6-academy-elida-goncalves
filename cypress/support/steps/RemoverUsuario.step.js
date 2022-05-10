import { listaPage } from "../pages/ListaPage.po"

Given("acessei a plataforma do CRUD FrontEnd", () => {
    listaPage.visitar();
});

And("existem usuários cadastrados para remover", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "doisUsuarios.json"
    });
});

When("seleciono para remover um usuário", () => {
    listaPage.clicarEmRemover();
    listaPage.clicarEmConfirmarRemover();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    cadastroPage.verificarMensagemSucesso(mensagemSucesso);
});

