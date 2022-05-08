Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar cadastro 
        Given acessei a tela de cadastro 

    Scenario: Criar usuário com sucesso 
        When informo dados do usuário válidos
        | nome  | Raro          |
        | email | raro@raro.com |
        Then visualizo mensagem de "Usuário salvo com sucesso!"

    Scenario: Não deve ser possível criar usuário sem nome e email
        When não informo dados 
        Then visualizo mensagem de "O campo nome é obrigatório." 
        And visualizo mensagem de "O campo e-mail é obrigatório."
    
    Scenario: Não deve ser possível criar usuário sem nome
        When informo somente email 
        | email | raro@raro.com |
        Then visualizo mensagem de "O campo nome é obrigatório." 

    Scenario: Não deve ser possível criar usuário sem email
        When informo somente nome 
        | nome  | Raro          |
        Then visualizo mensagem de "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível criar usuário com email inválido
        When informo email inválido
        | nome  | Raro          |
        | email | raro@ |
        Then visualizo mensagem de "Formato de e-mail inválido"

    Scenario: Não deve ser possível criar usuário com email já utilizado
        When informo email já cadastrado
        | nome  | Raro          |
        | email | raro@raro.com |
        Then o sistema não realiza o cadastro 

    Scenario: Não deve ser possível criar usuário com nome com mais de 100 caracteres
        When informo nome com mais de 100 caracteres
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces          |
        | email | raro@raro.com |
        Then visualizo mensagem de "Informe no máximo 100 caracteres para o nome"
        

    Scenario: Não deve ser possível criar usuário com email com mais de 60 caracteres
        When informo email com mais de 60 caracteres 
        | nome  | Raro          |
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |


    





        