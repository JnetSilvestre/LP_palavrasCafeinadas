const controls = document.querySelectorAll(".control");

let currentBloco = 0;

const blocos = document.querySelectorAll(".blocoCarrossel");

const maxBlocos = blocos;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrowLeft");

        if (isLeft) {
            currentBloco -= 1;
        } else {
            currentBloco += 1;
        }

        if (currentBloco >= maxBlocos) {
            currentBloco = 0;
        }
        if (currentBloco < 0) {
            currentBloco = maxBlocos - 1;
        }

        blocos.forEach(blocoCarrossel => blocoCarrossel.classList.remove("current-bloco"));

        blocos[currentBloco].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });

        blocos[currentBloco].classList.add(current - bloco);

    });
});

