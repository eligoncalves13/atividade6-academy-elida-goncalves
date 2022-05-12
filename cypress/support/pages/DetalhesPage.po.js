class DetalhesPage {
    inputId = "input[name='id']";
    inputNome = "#userName";
    inputEmail = "#userEmail";

    visitar() {
        cy.visit("");
    };

    clicarEmVerDetalhes() {
        cy.get("#userDataDetalhe").click();
        cy.contains("button", "Editar").click();
    };

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    };

    clicarEmCancelar() {
        cy.contains("button", "Cancelar").click();
    };

    clicarEmVoltar() {
        cy.contains("a", "Voltar").click();
    };

    clicarNaLogo() {
        cy.get("a[tabindex='-1']").click();
    };

    limparFormulario(){
        cy.get(this.inputNome).clear();
        cy.get(this.inputEmail).clear();
    };

    limparNome(){
        cy.get(this.inputNome).clear();
    };

    limparEmail(){
        cy.get(this.inputEmail).clear();
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

    verficiarAcessoPaginaInicial(){
        cy.url().should("equal", "https://academy-crud-frontend.herokuapp.com/users");
    };

    verificarMensagemSucesso(seletor, mensagemSucesso){
        cy.contains(seletor, mensagemSucesso).should("be.visible");
    };

    verificarMensagemErro(mensagemErro){
        cy.contains(mensagemErro).should("be.visible");
    };     

    verificarCamposDesativados(){
        cy.get(this.inputNome).should("be.disabled");
        cy.get(this.inputEmail).should("be.disabled");
        cy.contains("button", "Salvar").should("be.disabled");
    };

    verificarCampoId(id){
        cy.get(this.inputId).should('have.value', id);
    };

    verificarIdNaURL(id){
        cy.url().should("equal", `https://academy-crud-frontend.herokuapp.com/users/${id}`);
    };
}

export var detalhesPage = new DetalhesPage();