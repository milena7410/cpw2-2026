# Lista 01 – Construção de Páginas Web II

Integrantes: Joao Vitor Mendes

Projeto: Card do Herói (formulário em etapas com validação e eventos).

Arquivos: `index.html`, `detalhes.html`, `style.css`, `script.js`, `README.md`.

## Questões teóricas

**27. Qual a diferença entre required e pattern?**
`required` torna o campo obrigatório: ele não pode ficar vazio. `pattern` define uma expressão regular que o valor digitado precisa seguir (por exemplo, `[A-Z]{3}-[0-9]{3}`). O `pattern` só é verificado quando o campo tem algum valor; por isso, para um campo ser obrigatório *e* ter formato, usa-se os dois juntos.

**28. Qual a diferença entre checkValidity() e reportValidity()?**
Os dois verificam se o formulário (ou campo) é válido e retornam `true` ou `false`. A diferença é que `checkValidity()` apenas verifica, sem mostrar nada ao usuário, enquanto `reportValidity()` verifica e também exibe a mensagem de erro do navegador no primeiro campo inválido, colocando o foco nele.

**29. Para que serve .value?**
`.value` é a propriedade que lê (ou altera) o valor de um campo do formulário, ou seja, o que o usuário digitou ou selecionou em `input`, `select` ou `textarea`. O valor sempre é retornado como texto (string).

**30. Qual a diferença entre os eventos input, blur e change?**
- `input`: dispara a cada alteração do valor, enquanto o usuário digita.
- `blur`: dispara quando o campo perde o foco (o usuário sai dele).
- `change`: dispara quando o valor é confirmado após a alteração; em campos de texto, isso acontece ao sair do campo; em `select`, no momento em que a opção é trocada.

**31. Explique o que acontece em document.getElementById("nome").value.**
`document.getElementById("nome")` procura no documento o elemento cujo `id` é `"nome"` e retorna esse elemento. Em seguida, `.value` acessa o valor atual desse campo. Ou seja, a expressão devolve o texto que está digitado no campo de id `nome`.

**32. Qual a função do addEventListener()?**
Registra uma função (ouvinte) para ser executada quando um determinado evento ocorrer em um elemento (como `click`, `input`, `blur`, `change`). Com ele, o JavaScript fica separado do HTML e é possível adicionar vários ouvintes ao mesmo elemento.

**33. Por que a validação deve acontecer antes de avançar para a próxima página?**
Para garantir que os dados obrigatórios estejam corretos antes de serem usados na próxima etapa. Se avançasse sem validar, a segunda página poderia receber dados vazios ou inválidos, e o usuário teria que voltar para corrigir. Validar antes evita erros e mantém a consistência dos dados.
