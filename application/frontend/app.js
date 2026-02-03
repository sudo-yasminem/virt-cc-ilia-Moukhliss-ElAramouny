async function addition(a,b){
    const resultat = await fetch("/v2/addition", {
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
    const resultat = await fetch("/v2/soustraction", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a,b})
    })

    const data = await resultat.json()
    return data.resultat
}

async function multiplication(a,b){
    const resultat = await fetch ("/v2/multiplication", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a,b})
    })

    const data = await resultat.json()
    return data.resultat
}

async function division(a,b){
    const resultat = await fetch("v2/division", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({a,b})
    })
}

async function test_addition() {
    const resultat = await addition(2, 2) // 2+2
        console.log("[Test] Résultat = ", resultat)

}

async function test_soustraction() {
    const resultat = await soustraction(2, 2) // 2-2
        console.log("[Test] Résultat = ", resultat)

}

async function test_multiplication(){
    const resultat = await multiplication(2,2)
    console.log("[Test] Résultat =", resultat)
}

async function test_division(){
    const resultat = await division(2,2)
    console.log("[Test] Résultat =", resultat)
}



test_addition()
test_soustraction()
test_multiplication()
test_division()