const display = document.querySelector(".display");
const boutons = document.querySelectorAll(".btn")

const OPERATIONS = {
  "+": addition,
  "-": soustraction,
  "*": multiplication,
  "/": division
};

let a = "";
let b = "";
let operation = null;

async function addition(a, b) {
    const resultat = await fetch("/v2/addition", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a, b})
    });

    const data = await resultat.json()
    return data.resultat
}

async function soustraction(a, b) {
    const resultatultat = await fetch("/v2/soustraction", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a, b})
    })

    const data = await resultat.json()
    return data.resultat
}

async function multiplication(a, b) {
    const resultat = await fetch("/v2/multiplication", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({a, b})
    });
    return (await resultat.json()).resultat;
}

async function division(a, b) {
    const resultat = await fetch("/v2/division", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({a, b})
    });
    return (await resultat.json()).resultat;
}

async function racine(a) {
    const resultat = await fetch("/v2/racine", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({a})
    });
    return (await resultat.json()).resultat;
}

async function pourcentage(a) {
    const resultat = await fetch("/v2/pourcentage", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({a})
    });
    return (await resultat.json()).resultat;
}

function updateDisplay(value) {
    display.textContent = value || "0";
}

//Récupération de la valeurs des boutons cliqués
boutons.forEach(bouton => {
    bouton.addEventListener("click", async () => {
        const value = bouton.textContent;

        //Affichage de a et b dans l'interface
        if (!isNaN(value) || value === "."){
            if(operation === null){
                a += value;
                updateDisplay(a)
            }
            else{
                b+= value;
                updateDisplay(b);
            }
        }
        //Bouton Clear
        if (value === "C") {
            a = "";
            b = "";
            operation = null;
            updateDisplay("0")
        }

        //Bouton Clear Entry
        if (value === "CE") {
            if (!operation) a = "";
            else b = "";
            updateDisplay("0")
        }

        //Gestion des opérations choisies
        if (Object.keys(OPERATIONS).includes(value)) {
            if(a === "") return;
            operation = value;
            return;
        }

        //Paricularité Opération Racine et Pourcentage
        if (value === "√") {
            const resultat = await racine(Number(a));
            a = resultat.toString();
            updateDisplay(a);
        }

        if (value === "%") {
            const resultat = await pourcentage(Number(a));
            a = resultat.toString();
            updateDisplay(a);
            return;
        }

        if (value === "=") {

            if(a ==="" || b==="" || operation === null){
                updateDisplay("Erreur")
            }

            const operations = OPERATIONS[operation];


            /*if (operation === "+"){
                resultat = await addition(Number(a), Number(b));
            }
            else if(operation === "−"){
                resultat = await soustraction(Number(a), Number(b));
            }
            else if (operation === "*"){
                resultat = await multiplication(Number(a), Number(b));
            }
            else if (operation === "/"){
                resultat = await division(Number(a), Number(b));
            }*/

            if (!operations){
                updateDisplay("Erreur")
                return;
            }

            const resultat = await operations(Number(a), Number(b));

            a = resultat.toString();
            b = "";
            operation = null;
            updateDisplay(a);
        }

    });
});


updateDisplay("0")



