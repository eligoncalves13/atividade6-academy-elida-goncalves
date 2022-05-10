import { detalhesPage } from "../pages/DetalhesPage.po"

Given("acessei a plataforma do CRUD FrontEnd para edição", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200, 
        fixture: "doisUsuarios.json"
    });
    detalhesPage.visitar();
});

Given("acessei a tela de edição", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users/33fe94c0-1765-46b5-aacf-fb78ece95805", {
        statusCode: 200, 
        fixture: "usuario.json"
    });
    detalhesPage.abrirFormularioEdicao();
});

When("informo os dados do usuário válido para edição", (tabela) => {
    cy.intercept('PUT', "https://crud-api-academy.herokuapp.com/api/v1/users/33fe94c0-1765-46b5-aacf-fb78ece95805", {
        statusCode: 200,
        fixture: "usuario.json"
        
    });
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario()
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("não informo dados do usuário para edição", () => {
    detalhesPage.limparFormulario();
});

When("informo email de usuário válido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherEmail(dadosTabela.email);
});

When("informo nome de usuário válido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherNome(dadosTabela.nome);
});

When("informo email de usuário inválido para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo email de usuário já cadastrado para edição", (tabela) => {
    cy.intercept('PUT', "https://crud-api-academy.herokuapp.com/api/v1/users/33fe94c0-1765-46b5-aacf-fb78ece95805", {
        statusCode: 422,
        fixture: "usuario.json"
        
    });
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo nome com mais de 100 caracteres para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("informo email com mais de 60 caracteres para edição", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email)
});

When("salvo o formulário", () => {
    detalhesPage.clicarEmSalvar();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    detalhesPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    detalhesPage.verificarMensagemErro(mensagemErro);
});