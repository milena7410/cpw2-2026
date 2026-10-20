27. Qual a diferença entre required e pattern?
R:
    Required torna o campo de input obrigatório para o usuário, n podendo ficar em branco. Pattern apenas diz as condições que devem ser atendidas para que o input seja válido.

28. Qual a diferença entre checkValidity() e reportValidity()?
R:
    Check ele apenas verifica se todos estão válidos, mas n retorna nada ao usuário... Ja o report dispara um alerta em TODOS que estão inválidos, chamando a atenção do usuário para que possa ver e corrigir com mais     facilidade

29. Para que serve .value?
R: 
    Parametro para pegar o valor de um objeto/tag/DOM... 
    por exemplo faço um documento.querySelector("#nome") e qnd eu uso sua variavel representante com .value eu pego o que estiver de valor dentro daquele campo

30. Qual a diferença entre os eventos input, blur e change?
R: 
    Input - toda vez q tiver alguma entrada, acione!
    Blur - toda vez q o usuario tirar o foco de mim, clicar em outro lugar ou selecionar outro campo, acione a verificação
    Change - Toda vez q houver uma alteração em mim, Acione!

31. Explique o que acontece em document.getElementById("nome").value.
R: 
A tag com Id="nome" será atribuida a execução, que então conseguirá ler e mostrar o que há dentro deste campo... pela denominação... Um nome!

32. Qual a função do addEventListener()?
R:
Adiciona um Escutador na função que fica ouvindo uma determinada ações sempre ativa... qnd a ação eh executada, ele cai na condição e executa a função. mt bom para filtrar ações engatilhadas

33. Por que a validação deve acontecer antes de avançar para a próxima página?
R:
Para evitar envios de formulários com campos vazios, e garantir q sejam eviados apenas formulários, ou sejam realizadas certas ações apenas quando o usuário preencher TODOS os campos corretamente. 
