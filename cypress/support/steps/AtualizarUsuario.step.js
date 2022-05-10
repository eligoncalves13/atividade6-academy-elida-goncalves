import { detalhesPage } from "../pages/DetalhesPage.po"

Given("acessei a tela de edição", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200, 
        fixture: "doisUsuarios.json"
    });
    detalhesPage.visitar();
    detalhesPage.abrirFormularioEdicao();
});

When("informo dados válidos para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario()
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("não informo dados para edição", () => {
    detalhesPage.limparFormulario();
    detalhesPage.clicarEmSalvar();
});

When("informo email válido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherEmail(dadosTabela.email);
    detalhesPage.clicarEmSalvar();
});

When("informo nome válido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherNome(dadosTabela.nome);
    detalhesPage.clicarEmSalvar();
});

When("informo email inválido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo email já cadastrado para edição", (tabela) => {
    cy.intercept('PUT', "https://crud-api-academy.herokuapp.com/api/v1/users/33fe94c0-1765-46b5-aacf-fb78ece95805", {
        statusCode: 422,
        fixture: "usuario.json"
        
    });
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo nome com mais de 100 caracteres para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo email com mais de 60 caracteres para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    detalhesPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    detalhesPage.verificarMensagemErro(mensagemErro);
});