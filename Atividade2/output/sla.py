from collections import deque

class Processo:
    def __init__(self, nome, chegada, cpu_time):
        self.nome = nome
        self.chegada = chegada
        self.cpu_time = cpu_time
        self.response = -1
        self.waiting = 0

def round_robin(processos, quantum):
    fila_execucao = deque(processos)
    tempo_atual = 0

    while fila_execucao:
        processo = fila_execucao.popleft()

        if processo.chegada <= tempo_atual and processo.cpu_time > 0:
            tempo_execucao = min(quantum, processo.cpu_time)
            processo.cpu_time -= tempo_execucao

            if processo.response == -1:
                processo.response = tempo_atual - processo.chegada
            processo.waiting += tempo_atual - processo.chegada

            tempo_atual += tempo_execucao

            if processo.cpu_time > 0:
                fila_execucao.append(processo)

    return processos

# Exemplo de uso
processos = [
    Processo('A', 0, 10),
    Processo('B', 1, 11),
    Processo('C', 2, 12),
    Processo('D', 3, 13),
    Processo('E', 4, 14),
]

quantum = 5

processos_executados = round_robin(processos, quantum)

# Exibindo resultados
for processo in processos_executados:
    print(f"Processo {processo.nome}: Tempo de Resposta = {processo.response}, Tempo de Espera = {processo.waiting}")
