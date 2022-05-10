Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar cadastro 
        Given acessei a plataforma do CRUD FrontEnd
        And acessei a tela de cadastro 

    Scenario Outline: Deve ser possível crir usuário com dados válidos
        When informo os dados do usuário válido
        | nome  | <nome>  |
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de sucesso "<mensagem>"
        Examples: 
            | nome                                                                                                 | email                                                        | mensagem                   |
            | Raro                                                                                                 | raro@raro.com                                                | Usuário salvo com sucesso! |
            | Raro Teste                                                                                           | r@t.com                                                      | Usuário salvo com sucesso! |
            | Raro Academy Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Ha | raro@r.com                                                   | Usuário salvo com sucesso! |
            | Raro Name                                                                                            | raroleagueantlezbrokestereoneontidebringbackhonesty@raro.com | Usuário salvo com sucesso! |

    Scenario: Não deve ser possível criar usuário sem informar dados
        When não informo dados do usuário
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório." 
        And visualizo mensagem de erro "O campo e-mail é obrigatório."
    
    Scenario: Não deve ser possível criar usuário sem nome
        When informo email de usuário válido
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório." 

    Scenario: Não deve ser possível criar usuário sem email
        When informo nome de usuário válido 
        | nome  | Raro |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo e-mail é obrigatório."

    Scenario Outline: Não deve ser possível criar usuário com email inválido
        When informo email de usuário inválido
        | nome  | <nome>  |
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de erro "<mensagem>"
        Examples: 
            | nome  | email          | mensagem                   |
            | Raro  | raro           | Formato de e-mail inválido |
            | Raro  | raro@          | Formato de e-mail inválido |
            | Raro  | raro.          | Formato de e-mail inválido |
            | Raro  | raro@raro      | Formato de e-mail inválido |
            | Raro  | raro#@raro.com | Formato de e-mail inválido |

    Scenario: Não deve ser possível criar usuário com email já utilizado
        When informo email de usuário já cadastrado
        | nome  | Raro              |
        | email | raro@rarolabs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível criar usuário com nome com mais de 100 caracteres
        When informo nome com mais de 100 caracteres
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces |
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 100 caracteres para o nome"
        
    Scenario: Não deve ser possível criar usuário com email com mais de 60 caracteres
        When informo email com mais de 60 caracteres 
        | nome  | Raro          |
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 60 caracteres para o e-mail"






        