# 16. Cardápio Digital: Peça para o usuário digitar 
# um número de 1 a 3 para escolher um lanche.
# 1 = Hambúrguer
# 2 = Pizza
# 3 = Salada
# Qualquer outro número = "Opção inválida".

op = int(input("Digite uma opcao\n 1-Hamburger \n 2-Pizza\n 3-Salada"))
match op:
    case 1: print(f"Voce escolheu Hamburge.... ")
    case 2: print(f"Voce escolheu Pizza.... ")
    case 3: print(f"Voce escolheu Salada.... ")
    case _: print(f"Essa opcao nao existe")

