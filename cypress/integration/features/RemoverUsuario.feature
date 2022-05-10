Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar lista
        Given acessei a plataforma do CRUD FrontEnd
        
    Scenario: Remover usuário com sucesso 
        And existem usuários cadastrados para remover
        When seleciono para remover um usuário 
        Then visualizo mensagem de sucesso "Usuário removido!"        

