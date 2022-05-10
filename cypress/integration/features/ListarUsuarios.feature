Feature: Listar usuários 
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Background: Acessar lista
        Given acessei a plataforma do CRUD FrontEnd

    Scenario: Deve ser possível visualizar lista com usuários cadastrados
        And existem usuários cadastrados
        When consulto a lista de usuários 
        Then visualizo as informações dos usuários cadastrados

    Scenario: Não deve ser possível visualizar lista sem usuários cadastrados
        And não existem usuários cadastrados
        When consulto a lista de usuários
        Then visualizo mensagem de erro "Ops! Não existe nenhum usuário para ser exibido."
        And visualizo opção de "Cadastre um novo usuário"

    Scenario: Deve ser possível avançar à próxima página quando há mais de 6 usuários cadastrados
        And existem usuários cadastrados
        When seleciono a próxima página
        Then visualizo a próxima página com usuários cadastrados
    
    Scenario: Deve ser possível retornar à página anterior quando há mais de 6 usuários cadastrados
        And existem usuários cadastrados
        When seleciono a próxima página
        And seleciono a página anterior
        Then visualizo a página anterior com usuários cadastrados
