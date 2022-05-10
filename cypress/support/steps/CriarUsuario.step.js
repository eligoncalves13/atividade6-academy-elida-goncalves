import { cadastroPage } from "../pages/CadastroPage.po"

Given("acessei a plataforma do CRUD FrontEnd", () => {
    cadastroPage.visitar();
});

Given("acessei a tela de cadastro", () => {
    cadastroPage.abrirFormularioCadastro();
});

When("informo os dados do usuário válido", (tabela) => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "usuario.json",
        method: "POST", 
        statusCode: 201
    });
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
});

When("não informo dados do usuário", () => {

});

When("informo email de usuário válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherEmail(dadosTabela.email);
});

When("informo nome de usuário válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherNome(dadosTabela.nome);
});

When("informo email de usuário inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo email de usuário já cadastrado", (tabela) => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        fixture: "usuario.json",
        method: "POST", 
        statusCode: 422
    });
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo nome com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("salvo o formulário", () => {
    cadastroPage.clicarEmSalvar();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    cadastroPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    cadastroPage.verificarMensagemErro(mensagemErro);
});
