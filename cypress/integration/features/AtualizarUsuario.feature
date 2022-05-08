Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar edição
        Given acessei a tela de edição 

    Scenario: Atualizar usuário com sucesso 
        When informo dados do usuário válidos
        | nome  | Raro Academy     |
        | email | raro@academy.com |
        Then visualizo mensagem de "Informações atualizadas com sucesso!"
        
    Scenario: Não deve ser possível atualizar usuário sem nome e email
        When não informo dados 
        Then visualizo mensagem de "O campo nome é obrigatório." 
        And visualizo mensagem de "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível atualizar usuário sem nome
        When informo somente email 
        | email | raro@academy.com |
        Then visualizo mensagem de "O campo nome é obrigatório."

    Scenario: Não deve ser possível atualizar usuário sem email
        When informo somente nome 
        | nome  | Raro Academy |
        Then visualizo mensagem de "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível atualizar usuário com email inválido
        When informo email inválido
        | nome  | Raro Academy |
        | email | raro@ |
        Then visualizo mensagem de "Formato de e-mail inválido"

    Scenario: Não deve ser possível atualizar usuário com email já utilizado
        When informo dados do usuário válidos
        | nome  | Raro Academy     |
        | email | raro@academy.com |
        Then visualizo mensagem de "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível atualizar usuário com nome com mais de 100 caracteres
        When informo nome com mais de 100 caracteres
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces          |
        | email | raro@raro.com |
        Then visualizo mensagem de "Informe no máximo 100 caracteres para o nome"
        
    Scenario: Não deve ser possível atualizar usuário com email com mais de 60 caracteres
        When informo email com mais de 60 caracteres 
        | nome  | Raro Academy     |
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |
        Then visualizo mensagem de "Informe no máximo 60 caracteres para o e-mail"

