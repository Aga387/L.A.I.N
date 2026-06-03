const hasloTekst = document.getElementById('haslo');
const odpowiedz = document.getElementById('odpowiedz');

hasloTekst.addEventListener('input', function(){
    const haslo = hasloTekst.value.toLowerCase().trim();

    if (haslo === "hej"||haslo === "czesc"){
        odpowiedz.textContent = "hej..."
    }
    else if (haslo === "edith muller"){
        odpowiedz.textContent = "jak dlugo jeszcze chcesz to ciagnac...?"
        }
    else if (haslo === "edmund james kelly"||haslo === "eddie"){
        odpowiedz.textContent = "tez chcesz byc tacy jak oni...?"
    }
    else if (haslo === "helga schneider"){
        odpowiedz.textContent = ""
    }
    else if (haslo === "gunter schneider"){
        odpowiedz.textContent = ""
    }
    else if  (haslo === "mika stein"||haslo === "mika"){
        odpowiedz.textContent = "biedne dziecko... sed nunc bene est..."
    }
    else if (haslo === "agnes"||haslo === "agnes hoffman"||haslo === "agnes hoffman schulz"){
        odpowiedz.textContent = "naprawde ladna z ciebie dziewczynka... mam nadzieje ze spodoa ci sie prezent..."
    }
    else if (haslo === "alina sorge"){
        odpowiedz.textContent = "jestes z siebie dumna...?"
    }
    else if (haslo === "liliana sorge"){
        odpowiedz.textContent = "boli...? dobrze..."
    }
    else if (haslo === "johann kruger"){
        odpowiedz.textContent = "dzieki tobie w koncu beda szczesliwi... pospiesz sie..."
    }
    else if (haslo === "franz"||haslo === "franz stein"){
        odpowiedz.textContent = "az mi cie czasem zal... stultus..."
    }
    else if (haslo === "rachel vogel"){
        odpowiedz.textContent = "wybacz mi... ze cie okradli..."
    }
    else if (haslo === "martha lindemann"){
        odpowiedz.textContent = "nie martw sie... juz jestes bezpieczna... pauper hedum..."
    }
    else if (haslo === "wilhelm wegscheider"||haslo === "ronald wegscheider"){
        odpowiedz.textContent = "nie idz tam... to nie jest tego warte..."
    }
    else if (haslo === "clara brant"){
        odpowiedz.textContent = "juz spokojnie... mozesz spac pod lozkiem..."
    }
    else if (haslo === "policja"){
        odpowiedz.textContent = "miseret me tibi... sed non mihi est eligere... habet ut stipendium..."
    }
    else if (haslo === "naukowcy"){
        odpowiedz.textContent = "fruere... mors veniet... sive vis sive non..."
    }
    else if (haslo === "narkotyki"){
        odpowiedz.textContent = "Putasne vere id adiuturum esse...? adhuc eos dolet..."
    }
    else if (haslo === "serwerownia"){
        odpowiedz.textContent = "mitescere nunc... scio dolere..."
    }
    else if (haslo === "las"){
        odpowiedz.textContent = "arbor inversa in silva est... et in ligno... solucionis..."
    }
    else if (haslo === "ewikgeisstadt"){
        odpowiedz.textContent = "miasto wiecznosci...? co za ironia..."
    }
    else if (haslo === "lain"||haslo === "l.a.i.n"){
        odpowiedz.textContent = "to... ja...?"
    }
    else if (haslo === "cycki"){
        odpowiedz.textContent = "niektorzy ludzie je maja... i to jest okej..."
    }
    else if (haslo === "penis"){
        odpowiedz.textContent = "sa tu ludzie ktorym powinien odpasc..."
    }
    else{
        odpowiedz.textContent = "";
    }
});