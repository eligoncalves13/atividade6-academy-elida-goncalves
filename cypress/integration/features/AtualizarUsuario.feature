Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar edição
        Given acessei a plataforma do CRUD FrontEnd para edição
        And acessei a tela de edição

    Scenario Outline: Deve ser possível atualizar usuário com dados válidos
        When informo os dados do usuário válido para edição
        | nome  | <nome>  |
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de sucesso "<mensagem>"
        Examples: 
            | nome                                                                                                 | email                                                        | mensagem                             |
            | Raro Labs                                                                                            | raro@labs.com                                                | Informações atualizadas com sucesso! |
            | Raro Labs Teste                                                                                      | r@l.com                                                      | Informações atualizadas com sucesso! |
            | Raro Academy Wacky League Antlez Broke the Stereo Neon Tide Bring Labs Honesty Coalition Feedback Ha | raro@l.com                                                   | Informações atualizadas com sucesso! |
            | Raro Labs Name                                                                                       | raroleagueantlezbrokestereoneontidebringbackhonesty@labs.com | Informações atualizadas com sucesso! |
        
    Scenario: Não deve ser possível atualizar usuário sem nome e email
        When não informo dados do usuário para edição
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório." 
        And visualizo mensagem de erro "O campo e-mail é obrigatório."

    Scenario: Não deve ser possível atualizar usuário sem nome
        When informo email de usuário válido para edição
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório."

    Scenario: Não deve ser possível atualizar usuário sem email
        When informo nome de usuário válido para edição
        | nome  | Raro Labs |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo e-mail é obrigatório."

    Scenario Outline:  Não deve ser possível atualizar usuário com email inválido
        When informo email de usuário inválido para edição
        | nome  | <nome>  |
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de erro "<mensagem>"
        Examples: 
            | nome       | email          | mensagem                   |
            | Raro Labs  | rarolabs       | Formato de e-mail inválido |
            | Raro Labs  | rarolabs@      | Formato de e-mail inválido |
            | Raro Labs  | rarolabs.      | Formato de e-mail inválido |
            | Raro Labs  | raro@labs      | Formato de e-mail inválido |
            | Raro Labs  | raro#@labs.com | Formato de e-mail inválido |

    Scenario: Não deve ser possível atualizar usuário com email já utilizado
        When informo email de usuário já cadastrado para edição
        | nome  | Raro Labs     |
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível atualizar usuário com nome com mais de 100 caracteres
        When informo nome com mais de 100 caracteres para edição
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces          |
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 100 caracteres para o nome"
        
    Scenario: Não deve ser possível atualizar usuário com email com mais de 60 caracteres
        When informo email com mais de 60 caracteres para edição
        | nome  | Raro Labs |
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 60 caracteres para o e-mail"


