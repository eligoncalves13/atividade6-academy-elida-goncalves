Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessar lista
        Given acessei a plataforma do CRUD FrontEnd
        
    Scenario: Deve ser possível remover usuário com sucesso
        And existem usuários cadastrados
        When seleciono para remover um usuário
        And confirmo a remoção  
        Then visualizo mensagem de sucesso "Usuário removido!"   

    Scenario: Deve ser possível fechar a modal sem remover usuário ao cancelar
        And existem usuários cadastrados
        When seleciono para remover um usuário
        And cancelo a remoção 
        Then a modal é fechada
        And o usuário não é removido   

    Scenario: Deve ser possível fechar a modal sem remover usuário ao selecionar o icone de fechar
        And existem usuários cadastrados
        When seleciono para remover um usuário
        And seleciono o icone de fechar a modal
        Then a modal é fechada
        And o usuário não é removido 