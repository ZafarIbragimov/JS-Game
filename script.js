function playGame() {
    let tanlash = document.querySelector('input[name="choice"]:checked');

    if (!tanlash) {
        document.getElementById("result").innerText = "Bratan, tanlov qiling👀";
        return;
    }

    tanlash = parseInt(tanlash.value);
    let kampyuterChoice = Math.floor(Math.random() * 3) + 1;

    let result = kimyutganiniTanlash(tanlash, kampyuterChoice);
    document.getElementById("result").innerText = result;
}

function kimyutganiniTanlash(odam, kampyuter) {
    if (odam === kampyuter) {
        return "Durang😉";
    }

    if (
        (odam === 1 && kampyuter === 2) || 
        (odam === 2 && kampyuter === 3) || 
        (odam === 3 && kampyuter === 1)    
    ) {
        return "Siz yutdiz 💵";
    }

    return "Kompyuter yutdi😂";
}
