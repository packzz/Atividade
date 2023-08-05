Algoritmo "Terrah Homes"

Var
   opcao:inteiro
   vetCadastro,vetDestino,vetEmail:vetor[1..10] de caracter
   vetCPF,vetData: vetor[1..10] de inteiro
   jk,i:inteiro

procedimento Cadastro()
Inicio

se jk <= 5 entao
            escreval("Nome Completo do Cliente")
            escreval("")
            leia(vetCadastro[jk])
            escreval("CPF do cliente (apenas números)")
            escreval("")
            leia(vetCPF[jk])
            escreval("E-mail do cliente")
            escreval("")
            leia(vetEmail[jk])
            escreval("Destino do cliente")
            escreval("")
            leia(vetDestino[jk])
            escreval("Quantos dias de viagem?")
            escreval("")
            leia(vetData[jk])
            escreval("Cadastro realizado com sucesso.")
            limpatela
            jk <- jk +1
         senao
            escreval("Infelizmente não posso cadastrar mais clientes. ")
         fimse
fimprocedimento

procedimento Consulta()
Inicio

se jk -1 > 0 entao
            escreval("Clientes Cadastrados: ")
            para i de 1 ate jk -1 faca
               escreval("Cliente de número ",i,":")
               escreval("Nome:",vetCadastro[i])
               escreval("Cpf:",vetCPF[i])
               escreval("E-mail:",vetEmail[i])
               escreval("Destino:",vetDestino[i])
               escreval("Tempo de viagem:",vetData[i])
            fimpara
         senao
            escreval("Estes são todos os clientes")
            escreval("cadastrados no sistema até hoje")
         fimse

fimprocedimento



Inicio
   jk <- 1
   enquanto opcao <> 3 faca
   escreval ("---------------------")
   escreval ("--Seja bem vindo ao--")
   escreval ("--sistema da Terrah--")
   escreval ("--------Homes--------")
   escreval ("---------------------")
   escreval ("Utilize o menu abaixo")
   escreval ("Opção 1 ---- Cadastro")
   escreval ("Opção 2 ---- Consulta")
   escreval ("Opção 3 -------- Sair")
   escreval ("---------------------")
   escreval ("---------------------")
      leia(opcao)
      limpatela
      escolha opcao
      caso 1
        Cadastro()
      caso 2
           Consulta()
      caso 3
         escreval("Até mais!")
      outrocaso
         escreval("Não consigo executar esse comando" )
      fimescolha
   fimenquanto
Fimalgoritmo