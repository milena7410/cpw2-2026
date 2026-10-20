27. Qual a diferença entre required e pattern?

REQUIRED: Ele mostra ao usuario que é preciso preencher a caixa, não podendo deixar ela vazia.

PATTERN: Ele obriga o usuario a usar uma formatacao em especifico, como ao colocar {A-ZA-Ú}{3,30} mostra que pode usar somente letras maiusculas e acento.

28. Qual a diferença entre checkValidity() e reportValidity()?

checkValidity(): Verifica por fora, sem mostrar para o usuario se o formulário ou caixa cumpre as regras de exigencia, retornando `true` (válido) ou `false` (inválido) para cada exigencia.

reportValidity():Ele verifica e mostra aquela mensagem de erro caso o usuario não tenha seguido as exigencias. 

29. Para que serve .value?

Ele serve para gravar ou mudar o conteúdo de uma caixa de formulário no JavaScript.

30. Qual a diferença entre os eventos input, blur e change?

INPUT:Funciona a cada escrita ou modificacao no campo de escrita e etc.

BLUR: É quando o usuario clica e sai da área de formulario/caixa.

CHANGE: O change funciona a partir do momento em que o <select> é confirmado ou modificado.


31. Explique o que acontece em document.getElementById("nome").value.

`document.getElementById("nome")` busca no index.html o elemento que tem o atributo `id="nome"`.
`.value` entra no texto que o usuário digitou dentro desse campo.

32. Qual a função do addEventListener()?

Ele é responsavel por escutar/registrar um evento (como clique do mouse, digitaçao, envio de formulario) em um elemento da pagina e executar uma funçao especifica quando esse evento acontecer.

33. Por que a validação deve acontecer antes de avançar para a próxima página?

Para garantir que o sistema não receba dados incorretos ou incompletos, evitando falhas na aplicaçao e oferecendo um comentario imediato para o usuário corrigir as informações antes de dar sequencia ao site.