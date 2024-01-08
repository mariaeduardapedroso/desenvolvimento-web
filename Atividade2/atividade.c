#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

// Definição da estrutura de um processo
typedef struct {
    char nomeProcesso;        // Identificador do processo
    int tempoChegada;    // Tempo de chegada do processo
    int tempoCPU;    // Tempo de CPU requerido pelo processo
    int prioridade;   // Prioridade do processo
    int tempoEspera;    // Tempo de espera do processo
    int tempoResposta;   // Tempo de resposta do processo
} Process;

// Função para simular o escalonamento Round-Robin
void roundRobin(Process* processos, int numProcesses) {
    const int timeQuantum = 1;  // Quantum de tempo para o Round-Robin

    int currentTime = 0;
    int remainingProcesses = numProcesses;

    while (remainingProcesses > 0) {
        int i;

        for (i = 0; i < numProcesses; i++) {
            Process* processo = &processos[i];

            // Verifica se o processo já chegou
            if (processo->tempoChegada <= currentTime) {
                // Verifica se o processo ainda precisa de CPU
                if (processo->tempoCPU > 0) {
                    // Executa o processo por um quantum de tempo
                    int executionTime = (processo->tempoCPU < timeQuantum) ? processo->tempoCPU : timeQuantum;
                    processo->tempoCPU -= executionTime;

                    // Atualiza os tempos de espera e resposta
                    if (processo->tempoResposta == -1) {
                        processo->tempoResposta = currentTime - processo->tempoChegada;
                    }
                    processo->tempoEspera += currentTime - processo->tempoChegada;

                    // Atualiza o tempo atual
                    currentTime += executionTime;

                    // Verifica se o processo foi concluído
                    if (processo->tempoCPU == 0) {
                        remainingProcesses--;
                    }
                }
            }
        }
    }
}

// Função para calcular os tempos medios de espera e resposta
void calculateAverageTimes(Process* processos, int numProcesses, float* avgtempoEsperaTime, float* avgtempoRespostaTime) {
    int totaltempoEsperaTime = 0;
    int totaltempoRespostaTime = 0;

    int i;
    for (i = 0; i < numProcesses; i++) {
        totaltempoEsperaTime += processos[i].tempoEspera;
        totaltempoRespostaTime += processos[i].tempoResposta;
    }

    *avgtempoEsperaTime = (float)totaltempoEsperaTime / numProcesses;
    *avgtempoRespostaTime = (float)totaltempoRespostaTime / numProcesses;
}

// Função para exibir os resultados da simulação
void displayResults(Process* processos, int numProcesses, float avgtempoEsperaTime, float avgtempoRespostaTime) {
    int i;

    printf("Processos na Fila do Round-Robin:\n");
    for (i = 0; i < numProcesses; i++) {
        printf("   %c ", processos[i].nomeProcesso);
    }
    printf("\n");

    printf("\nTempo de CPU requerido pelos processos:\n");
    for (i = 0; i < numProcesses; i++) {
        printf("  %2d ", processos[i].tempoCPU);
    }
    printf("\n");

    printf("\nTempo de Chegada dos processos:\n");
    for (i = 0; i < numProcesses; i++) {
        printf("  %2d ", processos[i].tempoChegada);
    }
    printf("\n");

    printf("\nLINHA DO TEMPO\n\n");

    int currentTime = 0;
    printf("|0|");
    for (i = 0; i < numProcesses; i++) {
        Process* processo = &processos[i];

        // Adiciona o processo à linha do tempo
        printf(".....%c.....|", processo->nomeProcesso);

        // Atualiza o tempo atual
        currentTime += processo->tempoCPU;

        // Adiciona o tempo de execução à linha do tempo
        if (i < numProcesses - 1) {
            printf("%2d|", currentTime);
        } else {
            printf("%2d|\n", currentTime);
        }
    }

    printf("\nTempo de Espera de cada processo:\n");
    for (i = 0; i < numProcesses; i++) {
        printf("   %c ", processos[i].nomeProcesso);
    }
    printf("\n");
    for (i = 0; i < numProcesses; i++) {
        printf("  %2d ", processos[i].tempoEspera);
    }
    printf("\n");

    printf("\nTempo de Resposta de cada processo:\n");
    for (i = 0; i < numProcesses; i++) {
        printf("   %c ", processos[i].nomeProcesso);
    }
    printf("\n");
    for (i = 0; i < numProcesses; i++) {
        printf("  %2d ", processos[i].tempoResposta);
    }
    printf("\n");

    printf("\nTempo Medio de Resposta: %.2f\n", avgtempoRespostaTime);
    printf("\nTempo Medio de Espera: %.2f\n", avgtempoEsperaTime);
}

int main() {
    FILE *file;
    char buffer[100];

    // Abrir o arquivo para leitura
    file = fopen("arquivo.txt", "r");

    // Verificar se o arquivo foi aberto com sucesso
    if (file == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }

    // Ler o conteúdo do arquivo e imprimir na tela
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }

    // Fechar o arquivo
    fclose(file);
    // // Dados de exemplo
    // const int numProcesses = 10;
    // Process processos[] = {
    //     {'A', 0, 10, 0},
    //     {'B', 1, 11, 0},
    //     {'C', 2, 12, 0},
    //     {'D', 3, 13, 0},
    //     {'E', 4, 14, 0},
    //     {'F', 5, 15, 0},
    //     {'G', 6, 16, 0},
    //     {'H', 7, 17, 0},
    //     {'I', 8, 18, 0},
    //     {'J', 9, 19, 0}
    // };

    // // Simulação Round-Robin
    // roundRobin(processos, numProcesses);

    // // Cálculo dos tempos medios
    // float avgtempoEsperaTime, avgtempoRespostaTime;
    // calculateAverageTimes(processos, numProcesses, &avgtempoEsperaTime, &avgtempoRespostaTime);

    // // Exibição dos resultados
    // displayResults(processos, numProcesses, avgtempoEsperaTime, avgtempoRespostaTime);

    return 0;
}
