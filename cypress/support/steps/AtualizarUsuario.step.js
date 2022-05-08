import { detalhesPage } from "../pages/DetalhesPage.po"

Given("acessei a tela de edição", () => {
    detalhesPage.visitar();
    detalhesPage.abrirFormularioEdicao();
});

When("informo dados válidos", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario()
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("não informo dados", () => {
    detalhesPage.limparFormulario();
    detalhesPage.clicarEmSalvar();
});

When("informo email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherEmail(dadosTabela.email);
    detalhesPage.clicarEmSalvar();
});

When("informo nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherNome(dadosTabela.nome);
    detalhesPage.clicarEmSalvar();
});

When("informo email inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo email já cadastrado", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo nome com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    detalhesPage.limparFormulario();
    detalhesPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo email com mais de 60 caracteres", (tabela) => {
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