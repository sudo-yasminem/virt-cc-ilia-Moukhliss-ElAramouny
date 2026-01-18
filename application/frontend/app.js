async function addition(a,b){
    const resultat = await fetch("/v1/addition", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a,b})
    })

    const data = await resultat.json()
    return data.resultat
}

async function soustraction(a,b){
    const resultat = await fetch("/v1/soustraction", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a,b})
    })

    const data = await resultat.json()
    return data.resultat
}

async function test_addition() {
    const resultat = await addition(2, 2) // 2+2
        console.log("Résultat = ", resultat)

}

async function test_soustraction() {
    const resultat = await soustraction(2, 2) // 2-2
        console.log("Résultat = ", resultat)

}

test_addition()
test_soustraction()