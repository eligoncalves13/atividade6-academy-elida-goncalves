import { cadastroPage } from "../pages/CadastroPage.po"

Given("acessei a plataforma do CRUD FrontEnd", () => {
    cadastroPage.visitar();
});

Given("acessei a tela de cadastro", () => {
    cadastroPage.clicarEmNovo();
    cadastroPage.verficiarAcessoPaginaCadastro();
});

When("informo dados do usuário", (tabela) => {
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201
    });
    const dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
});

When("não informo dados do usuário", () => {

});

When("informo email do usuário", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    cadastroPage.preencherEmail(dadosTabela.email);
});

When("informo nome do usuário", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    cadastroPage.preencherNome(dadosTabela.nome);
});

And("informo email já cadastrado do usuário", (tabela) => {
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 422
    });
    const dadosTabela = tabela.rowsHash();
    cadastroPage.preencherEmail(dadosTabela.email);
});

And("informo email do usuário", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    cadastroPage.preencherEmail(dadosTabela.email);
});

When("salvo o formulário", () => {
    cadastroPage.clicarEmSalvar();
});

When("seleciono para voltar", () => {
    cadastroPage.clicarEmVoltar();
});

When("seleciono a logo", () => {
    cadastroPage.clicarNaLogo();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    cadastroPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    cadastroPage.verificarMensagemErro(mensagemErro);
});

Then("visualizo a tela inicial", () => {
    cadastroPage.verficiarAcessoPaginaInicial();
});