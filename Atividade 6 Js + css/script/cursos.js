document.addEventListener("DOMContentLoaded", function() {
    const availableCourses = document.querySelector(".available-courses");
    const chosenCourses = document.querySelector(".chosen-courses");

    // Função para mover opções de um select para outro
    function moveOption(source, target, orderArray) {
        source.addEventListener("dblclick", function() {
            const selectedItem = this.options[this.selectedIndex];

            // Se não houver um item selecionado, saia da função
            if (!selectedItem) return;

            // Remova o item selecionado do select de origem
            this.removeChild(selectedItem);

            // Se estivermos seguindo a ordem original (Extra)
            if (orderArray) {
                let inserted = false;
                for (let i = 0; i < orderArray.length; i++) {
                    if (target.options[i] && orderArray[i] === selectedItem.getAttribute("data-order")) {
                        target.insertBefore(selectedItem, target.options[i]);
                        inserted = true;
                        break;
                    }
                }
                // Se não conseguimos inserir pelo loop, adicione ao final
                if (!inserted) {
                    target.appendChild(selectedItem);
                }
            } else {
                // Simplesmente adicione o item ao select de destino
                target.appendChild(selectedItem);
            }
        });
    }

    // Os cursos na ordem original
    const originalOrder = ["js", "jquery", "html", "css","c","php","delphi","vb","assembly"];

    // Adicione o atributo data-order para cada opção no select disponível
    for (let i = 0; i < availableCourses.options.length; i++) {
        availableCourses.options[i].setAttribute("data-order", originalOrder[i]);
    }

    moveOption(availableCourses, chosenCourses);
    moveOption(chosenCourses, availableCourses, originalOrder);
});