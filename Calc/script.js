const form = document.getElementById("rhombusForm");
const img = document.getElementById("rhombusImg");
const diagonalFields = document.getElementById("diagonalFields");
const angleFields = document.getElementById("AngleFields");
const errorText = document.getElementById("error");
const resultText = document.getElementById("results");
const resultOptions = document.getElementById("resultOptions");

const {
    d1,
    d2,
    side,
    alpha,
    perimeter,
    area,
    height,
    inputType
} = form.elements;

document.getElementById("clearBtn").onclick = (e) => {
    e.preventDefault();

    [d1, d2, side, alpha].forEach(field => field.value = "");

    [perimeter, area, height].forEach(cb => cb.checked = false);

    clearErrors();

    resultText.innerHTML = "";
};


document.getElementById("showBtn").onclick = () => {
    clearErrors();
    resultText.innerHTML = "";

    if (inputType.value === "diagonals") {
        diagonalFields.style.display = "block";
        angleFields.style.display = "none";
        img.src = "1.gif";
    } else {
        diagonalFields.style.display = "none";
        angleFields.style.display = "block";
        img.src = "8db82d0779c0cc7b356015fdbc852dbc.png";
    }
};

document.getElementById("calcBtn").onclick = () => {
    clearErrors();
    resultText.innerHTML = "";

    let hasError = false;
    let p, s, h;

    if (!perimeter.checked && !area.checked && !height.checked) {
        resultOptions.classList.add("checkbox-error");
        hasError = true;
    }

    if (inputType.value === "diagonals") {
        const d1Val = parseFloat(d1.value);
        const d2Val = parseFloat(d2.value);

        if (!checkNumber(d1Val, d1)) hasError = true;
        if (!checkNumber(d2Val, d2)) hasError = true;

        if (!hasError) {
            const sideLen = Math.sqrt((d1Val / 2) ** 2 + (d2Val / 2) ** 2);
            p = 4 * sideLen;
            s = (d1Val * d2Val) / 2;
            h = s / sideLen;
        }

    } else {
        const sideVal = parseFloat(side.value);
        const angleVal = parseFloat(alpha.value);

        if (!checkNumber(sideVal, side)) hasError = true;
        if (!checkAngle(angleVal, alpha)) hasError = true;

        if (!hasError) {
            const angleRad = angleVal * Math.PI / 180;
            p = 4 * sideVal;
            s = sideVal ** 2 * Math.sin(angleRad);
            h = sideVal * Math.sin(angleRad);
        }
    }

    if (hasError) return;

    if (perimeter.checked) resultText.innerHTML += `Периметр: ${p.toFixed(2)}<br>`;
    if (area.checked) resultText.innerHTML += `Площадь: ${s.toFixed(2)}<br>`;
    if (height.checked) resultText.innerHTML += `Высота: ${h.toFixed(2)}<br>`;
};


function checkNumber(value, field) {
    if (field.value.trim() === "" || isNaN(value) || value <= 0) {
        field.classList.add("error");
        return false;
    }
    return true;
}

function checkAngle(value, field) {
    if (field.value.trim() === "" || isNaN(value) || value <= 0 || value >= 91) {
        field.classList.add("error");
        errorText.textContent = "Угол должен быть от 1 до 90 градусов";
        return false;
    }
    return true;
}

function checkResultsSelected() {
    if (!perimeter.checked && !area.checked && !height.checked) {
        resultOptions.classList.add("checkbox-error");
        return false;
    }
    return true;
}

function clearErrors() {
    errorText.textContent = "";
    [...form.elements].forEach(el => el.classList.remove("error"));
    resultOptions.classList.remove("checkbox-error");
}


[...form.elements].forEach(el => {
    el.addEventListener("input", () => {
        if (el.type === "number") {
            el.classList.remove("error");
            errorText.textContent = "";
        }
    });

    el.addEventListener("focus", () => {
        if (el.type === "number") {
            el.classList.remove("error");
        }
    });
});

[perimeter, area, height].forEach(cb => {
    cb.addEventListener("change", () => {
        if (perimeter.checked || area.checked || height.checked) {
            resultOptions.classList.remove("checkbox-error");
            errorText.textContent = "";
        }
    });
});

