fazer as atividades propostas aqui:
# ALUNOS: Daniel Ferreira & Emanuel dos Santos Ferreira

### 27. Qual a diferença entre `required` e `pattern`?
* `required`: É um atributo de validação nativa do HTML5 que torna o preenchimento de um campo estritamente obrigatório[cite: 13, 23].

* `pattern`: É um atributo que valida se o conteúdo digitado no campo condiz exatamente com um formato/estrtura especificada por meio de uma Expressão Regular (RegEx)[cite: 13, 14].

---

### 28. Qual a diferença entre `checkValidity()` e `reportValidity()`?

* `checkValidity()`: Realiza uma verificação silenciosa nos bastidores. Retorna apenas um valor booleano (`true` se o elemento atende a todas as regras HTML5 ou `false` se contiver erros), sem abrir nenhum balão de alerta na tela[cite: 35, 37].

* `reportValidity()` Testa a validade do elemento e, caso encontre inconsistências, foca no campo incorreto e dispara visualmente o balão/tooltip nativo de aviso do navegador para o usuário[cite: 19, 37].

---

### 29. Para que serve `.value`?
A propriedade `.value` serve para capturar ou modificar o valor digitado ou selecionado dentro de um elemento do formulário obtido via DOM (como o texto digitado em um `<input>` ou a opção selecionada num `<select>`)[cite: 31, 32].

---

### 30. Qual a diferença entre os eventos `input`, `blur` e `change`?
`input`: É disparado instantaneamente a cada caractere digitado ou apagado pelo usuário no campo[cite: 18, 27, 44].
* `blur`: É disparado no exato momento em que o campo perde o foco (quando o usuário clica fora dele ou aperta Tab)[cite: 18, 27, 44, 46].
* `change`: É disparado quando o valor do campo é alterado e a modificação é confirmada (dispara imediatamente ao alterar seleções em `<select>`, `checkbox` e `radio`, ou ao sair do campo de texto)[cite: 27, 44, 47].

---

### 31. Explique o que acontece em `document.getElementById("nome").value`.
1. `document.getElementById("nome")`: Localiza e seleciona no documento HTML o elemento cujo atributo `id` seja exatamente igual a `"nome"`[cite: 32, 46].
2. `.value`: Acessa e lê o conteúdo digitado atualmente dentro desse elemento capturado[cite: 32].

---

### 32. Qual a função do `addEventListener()`?
O `addEventListener()` é um método do JavaScript usado para "escutar" ações ou eventos específicos em elementos da página (como cliques, digitações ou o envio de formulários) e executar uma função programada quando essa ação ocorre[cite: 10].

---

### 33. Por que a validação deve acontecer antes de avançar para a próxima página?
A validação no Frontend orienta o usuário com feedback instantâneo e dicas visuais, melhora a experiência (UX), economiza requisições desnecessárias ao servidor e garante que apenas informações coerentes e sanitizadas sejam salvas ou transportadas entre as etapas da aplicação[cite: 11, 12, 25, 29].