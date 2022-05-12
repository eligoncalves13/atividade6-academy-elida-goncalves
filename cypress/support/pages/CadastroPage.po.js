class CadastroPage{
    inputNome = "#name";
    inputEmail = "#email";

    visitar() {
        cy.visit("");
    };

    clicarEmNovo() {
        cy.get("a[href='/users/novo']").click();
    };

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    };

    clicarEmVoltar() {
        cy.contains("a", "Voltar").click();
    };

    clicarNaLogo() {
        cy.get("a[tabindex='-1']").click();
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

    verficiarAcessoPaginaCadastro(){
        cy.url().should("equal", "https://academy-crud-frontend.herokuapp.com/users/novo");
    };

    verficiarAcessoPaginaInicial(){
        cy.url().should("equal", "https://academy-crud-frontend.herokuapp.com/users");
    };

    verificarMensagemSucesso(seletor, mensagemSucesso){
        cy.contains(seletor, mensagemSucesso).should("be.visible");
        // cy.get(".go3958317564").should("have.text", "Usuário salvo com sucesso!")
    };

    verificarMensagemErro(mensagemErro){
        cy.contains(mensagemErro).should("be.visible");
    };  
}

export var cadastroPage = new CadastroPage();