import { cadastroPage } from "../pages/CadastroPage.po"

Given("acessei a tela de cadastro", () => {
    cadastroPage.visitar();
    cadastroPage.abrirFormularioCadastro();
});

When("informo dados válidos", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("não informo dados", () => {
    cadastroPage.clicarEmSalvar();
});

When("informo email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherEmail(dadosTabela.email);
    cadastroPage.clicarEmSalvar();
});

When("informo nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherNome(dadosTabela.nome);
    cadastroPage.clicarEmSalvar();
});

When("informo email inválido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    cadastroPage.verificarMensagemSucesso(".go3958317564", mensagemSucesso);
});

When("informo email já cadastrado", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo nome com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

When("informo email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    cadastroPage.preencherFormularioESalvar(dadosTabela.nome, dadosTabela.email)
});

Then("visualizo mensagem de erro {string}", (mensagemErro) => {
    cadastroPage.verificarMensagemErro(mensagemErro);
});





