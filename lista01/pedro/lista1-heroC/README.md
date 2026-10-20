# Atividade CPW2 - Criador de Herói (Hero Card)

**Alunos:** Pedro Henrique Carvalho Cabreira de Mello e Gustavo Celestino
**Disciplina:** Construção de Páginas Web II

## Sobre o Projeto
Este projeto implementa um formulário web em duas etapas, simulando o registro e a invocação de um aventureiro em uma guilda. Ele utiliza validações em HTML nativo e em JavaScript, manipulação do DOM em tempo real e transporte de dados entre páginas através de `localStorage`.

---

## Respostas - Questões Teóricas (Parte 10)

**27. Qual a diferença entre required e pattern?**
`required` apenas torna o campo obrigatório, garantindo que o formulário não será enviado se o campo estiver vazio. Já o `pattern` exige que o valor inserido cumpra um formato específico determinado por uma Expressão Regular (Regex), como um formato de CEP, placa ou um código específico.

**28. Qual a diferença entre checkValidity() e reportValidity()?**
`checkValidity()` verifica se o formulário ou campo está válido e retorna um booleano (`true` ou `false`), mas não mostra nada na tela (validação silenciosa). O `reportValidity()` faz a mesma verificação, mas, se o campo for inválido, ele aciona o balão de alerta nativo do navegador para o usuário apontando o erro.

**29. Para que serve .value?**
A propriedade `.value` no JavaScript é utilizada para recuperar (ler) ou alterar (escrever) o valor atual contido em elementos de input HTML, como `<input>`, `<select>` e `<textarea>`.

**30. Qual a diferença entre os eventos input, blur e change?**
- `input`: É disparado em tempo real, imediatamente a cada vez que o valor do elemento muda (ex: a cada tecla digitada).
- `change`: É disparado somente após a alteração do valor ser "completada" e o elemento perder o foco (ou ao escolher uma opção no `<select>`).
- `blur`: É disparado no exato momento em que o elemento perde o foco (o usuário clica fora dele ou aperta Tab), independentemente do valor ter sido modificado ou não.

**31. Explique o que acontece em document.getElementById("nome").value.**
O JavaScript procura no documento (DOM) pelo elemento que possui o atributo `id` exatamente igual a `"nome"`. Em seguida, utiliza o `.value` para capturar a string (texto) que o usuário digitou ou selecionou dentro desse elemento naquele momento.

**32. Qual a função do addEventListener()?**
Ele anexa um ouvinte de eventos a um elemento HTML, instruindo-o a ficar "escutando" para quando uma ação específica acontecer (como um `click`, `input`, `blur`). Ao captar a ação, ele executa uma função. É a forma mais recomendada de aplicar interatividade pois separa totalmente a lógica do JS da estrutura do HTML.

**33. Por que a validação deve acontecer antes de avançar para a próxima página?**
Para garantir a consistência e a segurança dos dados. Se os dados da primeira página estiverem incorretos ou incompletos, avançar causaria o processamento de informações inválidas (como salvar no banco de dados um e-mail falso, ou uma senha fraca), além de quebrar a lógica da segunda etapa caso ela dependa de um dado obrigatório da primeira.
