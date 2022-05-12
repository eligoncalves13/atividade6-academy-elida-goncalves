Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar cadastro 
        Given acessei a plataforma do CRUD FrontEnd
        And acessei a tela de cadastro 

    Scenario Outline: Deve ser possível crir usuário com dados válidos
        When informo dados do usuário 
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
        When informo email do usuário 
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório." 

    Scenario: Não deve ser possível criar usuário sem email
        When informo nome do usuário  
        | nome  | Raro |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo e-mail é obrigatório."

    Scenario Outline: Não deve ser possível criar usuário com nome inválido
        When informo nome do usuário 
        | nome  | <nome>  |
        And informo email do usuário 
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de erro "<mensagem>"
        Examples: 
            | nome  | email          | mensagem                    |
            | R@ro  | raro@raro.com  | Formato do nome é inválido. |
            | R123  | raro@raro.com  | Formato do nome é inválido. |
            | R#Ro  | raro@raro.com  | Formato do nome é inválido. |
            | Ra-Ro | raro@raro.com  | Formato do nome é inválido. |
            | Ra$Ro | raro@raro.com  | Formato do nome é inválido. |
            | ....  | raro@raro.com  | Formato do nome é inválido. |

    Scenario Outline: Não deve ser possível criar usuário com email inválido
        When informo nome do usuário 
        | nome  | <nome>  |
        And informo email do usuário 
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
        When informo nome do usuário 
        | nome  | Raro              |
        And informo email já cadastrado do usuário
        | email | raro@rarolabs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível criar usuário com nome com mais de 100 caracteres
        When informo nome do usuário 
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces |
        And informo email do usuário 
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 100 caracteres para o nome"
        
    Scenario: Não deve ser possível criar usuário com email com mais de 60 caracteres
        When informo nome do usuário 
        | nome  | Raro          |
        And informo email do usuário 
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Não deve ser possível criar usuário com nome com menos de 4 caracteres
        When informo nome do usuário 
        | nome  | Rar           |
        And informo email do usuário 
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe pelo menos 4 letras para o nome."

    Scenario: Deve ser possível ir para a tela inicial selecionando voltar
        When seleciono para voltar 
        Then visualizo a tela inicial  

    Scenario: Deve ser possível ir para a tela inicial selecionando a logo
        When seleciono a logo
        Then visualizo a tela inicial   