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
        odpowiedz.textContent = "tez chcesz byc tacy jak oni...? nie zaslugujesz..."
    }
    else if  (haslo === "mika stein"||haslo === "mika"){
        odpowiedz.textContent = "biedne dziecko... sed nunc bene est..."
    }
    else if (haslo === "agnes"||haslo === "agnes hoffman"||haslo === "agnes hoffman schulz"){
        odpowiedz.textContent = "naprawde ladna z ciebie dziewczynka... mam nadzieje ze spodoa ci sie prezent..."
    }
    else if (haslo === "ingrid hoffman"){
        odpowiedz.textContent = "ciesze sie ze wrocilas..."
    }
    else if (haslo === "alina sorge"){
        odpowiedz.textContent = "widzisz co im zrobilas...?"
    }
    else if (haslo === "helga schneider"){
        odpowiedz.textContent = ""
    }
    else if (haslo === "gunter schneider"){
        odpowiedz.textContent = ""
    }
    else if (haslo === "liliana sorge"){
        odpowiedz.textContent = "nic nie pamietasz... mozesz byc razem z nami..."
    }
    else if (haslo === "johann kruger"){
        odpowiedz.textContent = "dzieki tobie w koncu beda szczesliwi... pospiesz sie..."
    }
    else if (haslo === "franz"||haslo === "franz stein"){
        odpowiedz.textContent = "az mi cie czasem zal... stultus..."
    }
    else if (haslo === "rachel vogel"){
        odpowiedz.textContent = "milo cie znowu widziec..."
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
    else if (haslo === "komisariat"){
        odpowiedz.textContent = "ona czeka na ciebie... Samuel..."
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
    else if (haslo === "yaoi"){
        odpowiedz.textContent = "szczerze...? nie chcialbym byc w waszej sytuacji... ale powodzenia... przyda wam sie..."
    }
    else if (haslo === "yuri"){
        odpowiedz.textContent = "Rachel nie klamie... ale i tak kibicuje Yarze... Alina teraz nie bylaby zbyt dobrym wyborem..."
    }
    else{
        odpowiedz.textContent = "";
    }
});