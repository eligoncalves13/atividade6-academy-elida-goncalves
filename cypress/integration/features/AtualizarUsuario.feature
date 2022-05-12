Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar edição
        Given acessei a plataforma do CRUD FrontEnd
        And existem usuários cadastrados
        And acessei a tela de detalhes de um usuário
        
    Scenario Outline: Deve ser possível atualizar usuário com dados válidos
        When informo dados do usuário para edição
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
        When informo somente o email do usuário
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo nome é obrigatório."

    Scenario: Não deve ser possível atualizar usuário sem email
        When informo somente o nome do usuário
        | nome  | Raro Labs |
        And salvo o formulário 
        Then visualizo mensagem de erro "O campo e-mail é obrigatório."

    Scenario Outline: Não deve ser possível atualizar usuário com nome inválido
        When informo nome do usuário para edição
        | nome  | <nome>  |
        And informo email do usuário para edição
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de erro "<mensagem>"
        Examples: 
            | nome       | email         | mensagem                    |
            | R@ro Labs  | raro@labs.com | Formato do nome é inválido. |
            | R123 Labs  | raro@labs.com | Formato do nome é inválido. |
            | R#Ro Labs  | raro@labs.com | Formato do nome é inválido. |
            | Ra-Ro Labs | raro@labs.com | Formato do nome é inválido. |
            | Ra$Ro Labs | raro@labs.com | Formato do nome é inválido. |

    Scenario Outline:  Não deve ser possível atualizar usuário com email inválido
        When informo nome do usuário para edição
        | nome  | <nome>  |
        And informo email do usuário para edição
        | email | <email> |
        And salvo o formulário 
        Then visualizo mensagem de erro "<mensagem>"
        Examples: 
            | nome      | email          | mensagem                   |
            | Raro Labs | rarolabs       | Formato de e-mail inválido |
            | Raro Labs | rarolabs@      | Formato de e-mail inválido |
            | Raro Labs | rarolabs.      | Formato de e-mail inválido |
            | Raro Labs | raro@labs      | Formato de e-mail inválido |
            | Raro Labs | raro#@labs.com | Formato de e-mail inválido |

    Scenario: Não deve ser possível atualizar usuário com email já utilizado
        When informo nome do usuário para edição
        | nome  | Raro Labs     |
        And informo email já cadastrado do usuário para edição
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Este e-mail já é utilizado por outro usuário."

    Scenario: Não deve ser possível atualizar usuário com nome com mais de 100 caracteres
        When informo nome do usuário para edição
        | nome  | Raro Wacky League Antlez Broke the Stereo Neon Tide Bring Back Honesty Coalition Feedback Hand of Aces |
        And informo email do usuário para edição
        | email | raro@labs.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 100 caracteres para o nome"
        
    Scenario: Não deve ser possível atualizar usuário com email com mais de 60 caracteres
        When informo nome do usuário para edição
        | nome  | Raro Labs |
        And informo email do usuário para edição
        | email | raroleagueantlezbrokestereoneontidebringbackhonestys@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe no máximo 60 caracteres para o e-mail"

    Scenario: Não deve ser possível atualizar usuário com nome com menos de 4 caracteres
        When informo nome do usuário para edição
        | nome  | Rar           |
        And informo email do usuário para edição
        | email | raro@raro.com |
        And salvo o formulário 
        Then visualizo mensagem de erro "Informe pelo menos 4 letras para o nome."

    Scenario: Deve ser possível ir para a tela inicial selecionando voltar
        When seleciono para voltar 
        Then visualizo a tela inicial  

    Scenario: Deve ser possível ir para a tela inicial selecionando a logo
        When seleciono a logo
        Then visualizo a tela inicial  

    Scenario: Não deve ser possível editar quando seleciono cancelar 
        When cancelo o formulário
        Then não deve ser possível editar os dados 

    Scenario: O campo id deve ter o id igual ao usuário selecionado
        When verifico o campo id 
        Then o id ser igual ao informado na url 