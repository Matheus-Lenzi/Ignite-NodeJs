### Desafio 01 - Conceitos de Node.js

## POST/users

# [X] A rota deve receber name, e username dentro do corpo da requisição.
# [X] Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto.
# [X] Certifique-se que o ID seja um UUID
# [X] Deve sempre iniciar a lista todos como um array vazio.
# [X] O objeto do usuário deve ser retornado na resposta da requisição.

## GET/todos

# [X] A rota deve receber, pelo header da requisição, uma propriedade username contendo o username do usuário.
# [X] Deve retornar uma lista com todas as tarefas desse usuário.

## POST/todos

# [X] A rota deve receber title e deadline dentro do corpo da requisição e, uma propriedade username contendo o username do usuário dentro do header da requisição.
# [X] Ao criar um novo todo, ele deve ser armazenada dentro da lista todos do usuário que está criando essa tarefa.
# [X] Lembre-se de iniciar a propriedade done sempre como false ao criar um todo.
# [X] Ao fazer a requisição com o Insomnia ou Postman, preencha a data de deadline com o formato ANO-MÊS-DIA e ao salvar a tarefa pela rota.
# [X] O objeto do todo deve ser retornado na resposta da requisição.

## PUT/todos/:id

# [X] A rota deve receber, pelo header da requisição, uma propriedade username contendo o username do usuário e receber as propriedades title e deadline dentro do corpo.
# [X] É preciso alterar apenas o title e o deadline da tarefa que possua o id igual ao id presente nos parâmetros da rota.

## PATCH/todos/:id/done

# [X] A rota deve receber, pelo header da requisição, uma propriedade username contendo o username do usuário.
# [X] Alterar a propriedade done para true no todo que possuir um id igual ao id presente nos parâmetros da rota.

## DELETE/todos/:id

# [X] A rota deve receber, pelo header da requisição, uma propriedade username contendo o username do usuário.
# [X] Excluir o todo que possuir um id igual ao id presente nos parâmetros da rota.