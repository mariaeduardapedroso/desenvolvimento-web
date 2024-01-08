document.addEventListener("DOMContentLoaded", function() {
    const exportButton = document.querySelector(".export-btn");
    const textarea = document.querySelector("textarea");

    exportButton.addEventListener("click", function() {
        const table = document.querySelector(".tabela table");
        let csv = "";

        // Para cada linha da tabela
        for (const row of table.rows) {
            const cells = [...row.cells];  // Converte HTMLCollection para array
            const rowValues = cells.map(cell => {
                let text = cell.innerText;

                // Se o conteúdo tiver uma vírgula ou uma nova linha, envolva-o em aspas duplas
                if (text.includes(",") || text.includes("\n") || text.includes('"')) {
                    text = '"' + text.replace(/"/g, '""') + '"';  // Escapar aspas duplas dentro do conteúdo
                }

                return text;
            });

            csv += rowValues.join(",") + ";\n";  // Junta os valores com vírgulas e adiciona uma nova linha ao final
        }

        textarea.value = csv.trim();  // Insere o CSV no textarea
    });
});