class CadastroPage{
    inputNome = "#name";
    inputEmail = "#email";

    visitar() {
        cy.visit("");
    };

    abrirFormularioCadastro() {
        cy.get("a[href='/users/novo']").click();
    };

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    };

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
    };

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    };

    preencherFormularioESalvar(nome, email){
        this.preencherNome(nome);
        this.preencherEmail(email);
        this.clicarEmSalvar();
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