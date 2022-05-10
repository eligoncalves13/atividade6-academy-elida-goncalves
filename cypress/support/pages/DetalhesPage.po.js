class DetalhesPage {
    inputNome = "#userName";
    inputEmail = "#userEmail";

    visitar() {
        cy.visit("");
    };

    abrirFormularioEdicao() {
        cy.get("#userDataDetalhe").click();
        cy.contains("button", "Editar").click();
    };

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    };

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
    };

    preencherFormulario(nome, email){
        this.preencherNome(nome);
        this.preencherEmail(email);
    };

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    };

    verificarMensagemSucesso(seletor, mensagemSucesso){
        cy.contains(seletor, mensagemSucesso).should("be.visible");
    };

    verificarMensagemErro(mensagemErro){
        cy.contains(mensagemErro).should("be.visible");
    };

    limparFormulario(){
        cy.get(this.inputNome).clear();
        cy.get(this.inputEmail).clear();
    };    
}

export var detalhesPage = new DetalhesPage();