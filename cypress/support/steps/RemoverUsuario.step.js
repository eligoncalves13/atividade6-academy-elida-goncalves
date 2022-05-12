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

When("seleciono para remover um usuário", () => {
    listaPage.clicarEmRemover();
});

And("confirmo a remoção", () => {
    listaPage.clicarEmConfirmarRemover();
});

And("cancelo a remoção", () => {
    listaPage.clicarEmCancelarRemover();
});

And("seleciono o icone de fechar a modal", () => {
    listaPage.clicarEmCancelarRemover();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    listaPage.verificarMensagemSucesso(mensagemSucesso);
});

Then("a modal é fechada", () => {
    listaPage.verificarInexistenciaModal();
});

And("o usuário não é removido", () => {
    listaPage.verificarUsuario("11fe94c0-1765-46b5-aacf-fb78ece95801");
});