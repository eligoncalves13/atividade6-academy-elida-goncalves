import { detalhesPage } from "../pages/DetalhesPage.po"

const id = "11fe94c0-1765-46b5-aacf-fb78ece95801";

Given("acessei a plataforma do CRUD FrontEnd", () => {
    detalhesPage.visitar();
});

And("existem usuários cadastrados", () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "listaUsuarios.json"
    });
});

Given("acessei a tela de detalhes de um usuário", () => {
    cy.intercept("GET", `https://crud-api-academy.herokuapp.com/api/v1/users/${id}`, {
        statusCode: 200, 
        fixture: "usuario.json"
    });
    detalhesPage.clicarEmVerDetalhes();
});

When("informo dados do usuário para edição", (tabela) => {
    cy.intercept('PUT', `https://crud-api-academy.herokuapp.com/api/v1/users/${id}`, {
        statusCode: 200,        
    });
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormulario(dadosTabela.nome, dadosTabela.email);
});

When("não informo dados do usuário para edição", () => {
    detalhesPage.limparFormulario();
});

When("informo somente o email do usuário", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherEmail(dadosTabela.email);
});

When("informo somente o nome do usuário", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherNome(dadosTabela.nome);
});

When("informo email do usuário para edição", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparEmail();
    detalhesPage.preencherEmail(dadosTabela.email);
});

When("informo nome do usuário para edição", (tabela) => {
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparNome();
    detalhesPage.preencherNome(dadosTabela.nome);
});

When("informo email já cadastrado do usuário para edição", (tabela) => {
    cy.intercept('PUT', `https://crud-api-academy.herokuapp.com/api/v1/users/${id}`, {
        statusCode: 422, 
    });
    const dadosTabela = tabela.rowsHash();
    detalhesPage.limparEmail();
    detalhesPage.preencherEmail(dadosTabela.email);
});

When("salvo o formulário", () => {
    detalhesPage.clicarEmSalvar();
});

When("cancelo o formulário", () => {
    detalhesPage.clicarEmCancelar();
});

When("verifico o campo id", () => {
    detalhesPage.verificarCampoId(id);
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    detalhesPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    detalhesPage.verificarMensagemErro(mensagemErro);
});

Then("não deve ser possível editar os dados", () => {
    detalhesPage.verificarCamposDesativados();
});

Then("visualizo a tela inicial", () => {
    detalhesPage.verficiarAcessoPaginaInicial();
});

Then("o id ser igual ao informado na url", () => {
    detalhesPage.verificarIdNaURL(id);
});