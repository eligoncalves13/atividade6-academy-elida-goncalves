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
}

export var listaPage = new ListaPage();