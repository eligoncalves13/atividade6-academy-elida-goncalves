class ListaPage {
    visitar() {
        cy.visit("");
    };

    clicarEmRemover(){
        cy.get("button[data-test='userDataDelete']").eq(1).click();
    };

    clicarEmConfirmarRemover(){
        cy.contains("button", "Confirmar").click();
    };

    verificarMensagemSucesso(mensagemSucesso){
        cy.contains(mensagemSucesso).should("be.visible");
    };

    verificarMensagemErro(mensagemErro){
        cy.contains(mensagemErro).should("be.visible");
    };

    verificarOpcao(opcao){
        cy.contains(opcao).should("be.visible");
    };

    clicarEmProximaPagina(){
        cy.get("#paginacaoProximo").click();
    };

    clicarEmVoltarPagina(){
        cy.get("#paginacaoVoltar").click();
    };

    verificarListaUsuarios(){
        cy.get("#listaUsuarios").should("be.visible");
    };

    verificarPaginacaoAtiva(paginacao){
        cy.get(paginacao).should("not.be.disabled");
    };
    
}

export var listaPage = new ListaPage();