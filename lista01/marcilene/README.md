# LISTA 01 - Construção de Páginas Web II

Projeto desenvolvido a partir do Card do Herói da atividade anterior.

## Arquivos

- `index.html` - primeira etapa do formulário e Card do Herói.
- `detalhes.html` - segunda etapa e resumo do personagem.
- `style.css` - estilização de todas as páginas.
- `script.js` - captura de dados, validações, eventos, navegação e manipulação da DOM.

## Questões Teóricas

### 27. Qual a diferença entre required e pattern?

`required` torna o preenchimento de um campo obrigatório.

`pattern` define um padrão que o valor digitado precisa seguir, usando uma expressão regular.

### 28. Qual a diferença entre checkValidity() e reportValidity()?

`checkValidity()` verifica se os dados são válidos e retorna `true` ou `false`, sem mostrar a mensagem nativa.

`reportValidity()` verifica a validade e, se houver erro, mostra a mensagem de validação do navegador.

### 29. Para que serve .value?

`.value` serve para acessar o valor que foi digitado ou selecionado em um campo do formulário.

### 30. Qual a diferença entre os eventos input, blur e change?

`input` acontece enquanto o usuário digita ou altera o conteúdo.

`blur` acontece quando o campo perde o foco.

`change` acontece quando o valor de um campo é alterado, sendo usado também para seleções em `select`.

### 31. Explique o que acontece em document.getElementById("nome").value.

`document.getElementById("nome")` encontra o elemento HTML que possui o ID `nome`.

`.value` pega o valor que foi digitado nesse elemento.

Portanto, a expressão completa pega o valor digitado no campo de nome.

### 32. Qual a função do addEventListener()?

`addEventListener()` serve para escutar um evento em um elemento e executar uma função quando esse evento acontecer.

Exemplos usados no projeto: `input`, `change`, `blur`, `click` e `submit`.

### 33. Por que a validação deve acontecer antes de avançar para a próxima página?

Porque é necessário garantir que os dados obrigatórios estejam corretos antes de passar para a próxima etapa. Assim, o personagem só avança quando o formulário estiver válido.
