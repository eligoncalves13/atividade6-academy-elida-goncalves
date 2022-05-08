Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar lista
        Given acessei a tela de lista 

    Scenario: Remover usuário com sucesso 
        When clico para remover um usuário 
        Then visualizo mensagem de "Usuário removido!"        

