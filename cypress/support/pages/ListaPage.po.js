class ListaPage {
    visitar() {
        cy.visit("");
    };

    clicarEmRemover(){
        cy.get("button[data-test='userDataDelete']").eq(0).click();
    };

    clicarEmConfirmarRemover(){
        cy.contains("button", "Confirmar").click();
    };

    clicarEmCancelarRemover(){
        cy.contains("button", "Cancelar").click();
    };

    clicarNoIconeFecharModal(){
        cy.contains("button", "x").click();
    };

    clicarEmProximaPagina(){
        cy.get("#paginacaoProximo").click();
    };

    clicarEmVoltarPagina(){
        cy.get("#paginacaoVoltar").click();
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

    verificarListaUsuarios(){
        cy.get("#listaUsuarios").should("be.visible");
    };

    verificarPaginacaoAtiva(paginacao){
        cy.get(paginacao).should("not.be.disabled");
    };

    verificarUsuario(id){
        cy.get(`a[href="/users/${id}"]`).should("be.visible");
    };

    verificarInexistenciaModal(){
        cy.contains("div", "Deseja realmente remover este usuário ?").should("not.exist")
    };
    
}

export var listaPage = new ListaPage();