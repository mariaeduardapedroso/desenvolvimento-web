# Cada processo recebe uma fatia de tempo chamada "quantum" ou "time quantum". 
# Isso define a quantidade máxima de tempo que cada processo pode executar antes de 
# ser interrompido e dar a vez a outro processo.

# Os processos são organizados em uma fila circular, onde cada processo tem uma chance 
# igual de ser o próximo a ser executado.

# O processo na frente da fila é selecionado para execução e é permitido executar pelo 
# tempo definido pelo quantum.

# Se o processo ainda tiver tempo de CPU restante após o quantum expirar, ele é removido
#  temporariamente da frente da fila e colocado no final da fila, dando lugar a outro 
# processo.

# Esse processo de alternância continua até que todos os processos tenham sido executados.

from math import sqrt
from os import system


class Process:
    def __init__(self, nomeProcesso, tempoChegada, tempoCPU, prioridade):
        self.nomeProcesso = nomeProcesso
        self.tempoCPU = tempoCPU
        self.tempoChegada = tempoChegada
        self.prioridade = prioridade
        self.espera = 0
        self.resposta = 0
        self.inicio = True

def round_robin2(processes, tempoQuantum):

    num_processes = len(processes)
    tempoCorrente = 0
    qdeProcessos = num_processes

    while qdeProcessos > 0:
        for process in processes:
            if process.tempoChegada <= tempoCorrente and process.tempoCPU > 0:
                if tempoQuantum < int(process.tempoCPU):
                    tempoExecussao = int(process.tempoCPU) - tempoQuantum
                else:
                    tempoExecussao = tempoQuantum

                print("---|"+process.nomeProcesso+"|---")
                process.tempoCPU -= tempoExecussao

                if process.resposta == 0:
                    process.resposta = tempoCorrente - process.tempoChegada
                process.espera += tempoCorrente - process.tempoChegada

                tempoCorrente += tempoExecussao

                if process.tempoCPU == 0:
                    qdeProcessos -= 1

def round_robin(processos, quantum):

    quantidadeProcessosExecussao = len(processos)
    tempoExecussaoProcessos = 0

    while (quantidadeProcessosExecussao > 0):
        fila = []
        #criar fila
        for process in processos:
            if process.tempoChegada <= tempoExecussaoProcessos and process.tempoCPU > 0:
                fila.append(process)
            
            if len(fila) == 1:
                print("---|"+fila[0].nomeProcesso+"|---")
                fila[0].inicio = False;
                if quantum < process.tempoCPU:
                    tempoExecussaoProcesso = quantum 
                else:
                    tempoExecussaoProcesso = process.tempoCPU

                tempoExecussaoProcessos = tempoExecussaoProcessos + tempoExecussaoProcesso
                fila[0].tempoCPU = fila[0].tempoCPU - tempoExecussaoProcesso

            else:
                if len(fila) > 1:
                    if fila[0].inicio == True:
                        print("---|"+fila[0].nomeProcesso+"---|")
                        fila[0].inicio = False
                        fila[1].inicio = True
                        if quantum < process.tempoCPU:
                            tempoExecussaoProcesso = quantum 
                        else:
                            tempoExecussaoProcesso = process.tempoCPU
                        tempoExecussaoProcessos = tempoExecussaoProcessos + tempoExecussaoProcesso
                        fila[0].tempoCPU = fila[0].tempoCPU - tempoExecussaoProcesso
                        for i in range(1,len(fila)):
                            fila[i].tempoEspera = fila[i].tempoEspera + tempoExecussaoProcesso
                    else:
                        
                        while fila[0].inicio != True:
                            print("oi")
                            aux = fila[0]

                            fila.append(fila[0])
                            del fila[0]

                            for i in range(0,len(fila)-1):
                                print("olaaaaa")
                                print("---|"+fila[0].nomeProcesso+"---|")
                        fila[0].inicio = False
                        if quantum < process.tempoCPU:
                            tempoExecussaoProcesso = quantum 
                        else:
                            tempoExecussaoProcesso = process.tempoCPU
                        tempoExecussaoProcessos = tempoExecussaoProcessos + tempoExecussaoProcesso
                        fila[0].tempoCPU = fila[0].tempoCPU - tempoExecussaoProcesso
                        for i in range(1,len(fila)):
                            fila[i].tempoEspera = fila[i].espera + tempoExecussaoProcesso

               


def calcularTempoMedioEspera(processos):
    tempoTotalEspera = 0

    for process in processos:
        tempoTotalEspera += process.espera

    if tempoTotalEspera>0:  
        tempoMedioEspera = tempoTotalEspera / len(processos)


    return tempoMedioEspera

def calcularTempoMedioResposta(processos):

    tempoTotalResposta = 0

    for process in processos:
        tempoTotalResposta += process.resposta
    
    if tempoTotalResposta>0:
        tempoMedioResposta = tempoTotalResposta / len(processos)

    return tempoMedioResposta

def mostrarDados(processos, tempoMedioEspera, tempoMedioResposta):
    print("Processos na Fila do Round-Robin:")
    for process in processos:
        print(f"   {process.nomeProcesso}", end=" ")
    print("\n")

    print("Tempo de Chegada dos processos:")
    for process in processos:
        print(f"  {process.tempoChegada}", end=" ")
    print("\n")

    print("\nTempo de Espera de cada processo:")
    for process in processos:
        print(f"   {process.nomeProcesso}", end=" ")
    print("\n")
    for process in processos:
        print(f"  {process.espera}", end=" ")
    print("\n")

    print("\nTempo de Resposta de cada processo:")
    for process in processos:
        print(f"   {process.nomeProcesso}", end=" ")
    print("\n")
    for process in processos:
        print(f"  {process.resposta}", end=" ")
    print("\n")

    print(f"\nTempo Médio de Resposta: {tempoMedioResposta:.2f}")
    print(f"\nTempo Médio de Espera: {tempoMedioEspera:.2f}")


def lerDadosProcesso(nomeArquivo):
    processos = []

    with open(nomeArquivo, 'r') as arquivo:
        linhas=arquivo.readlines()
        linhas = linhas[1:] # Excluindo a primeira linha

        for linha in linhas:
            dadosProcesso = linha.strip().split()
            #print(dadosProcesso)
            nomeProcesso = dadosProcesso[0]
            #print("nomeProcesso "+str(nomeProcesso))
            tempoCPU = int(dadosProcesso[1])
            #print("tempoChegada "+str(tempoChegada))
            tempoChegada = int(dadosProcesso[2])
            #print("tempoCPU "+str(tempoCPU))
            prioridade = int(dadosProcesso[3])
            #print("prioridade "+str(prioridade))
            process = Process(nomeProcesso, tempoChegada, tempoCPU, prioridade)
            processos.append(process)

    return processos


def main():
    nomeArquivo = 'processos.txt'  # Nome do arquivo de entrada
    quantum = 1

    processos = lerDadosProcesso(nomeArquivo)

    print("Tempo de CPU requerido pelos processos:")
    for process in processos:
        print(f"   {process.nomeProcesso}", end=" ")
    print("\n")
    for process in processos:
        print(f"  {process.tempoCPU}", end=" ")
    print("\n")

    round_robin2(processos, quantum)

    tempoMedioEspera = calcularTempoMedioEspera(processos)
    tempoMedioResposta = calcularTempoMedioResposta(processos)

    mostrarDados(processos, tempoMedioEspera, tempoMedioResposta)


if __name__ == '__main__':
    main()
