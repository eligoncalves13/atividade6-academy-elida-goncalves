import { listaPage } from "../pages/ListaPage.po"

Given("acessei a tela de lista", () => {
    listaPage.visitar();
});

When("clico para remover um usuário", () => {
    listaPage.clicarEmRemover();
    listaPage.clicarEmConfirmarRemover();
});

Then("visualizo mensagem de sucesso {string}", (mensagemSucesso) => {
    cadastroPage.verificarMensagemSucesso(mensagemSucesso);
});

