const hasloTekst = document.getElementById('haslo');
const odpowiedz = document.getElementById('odpowiedz');
const tluscioch = document.getElementById('skibidi');
tluscioch.style.display = "none";

hasloTekst.addEventListener('input', function(){
    const haslo = hasloTekst.value.toLowerCase().trim();

    if (haslo === "hej"||haslo === "czesc"){
        odpowiedz.textContent = "hej..."
    }
    else if (haslo === "co u ciebie?"||haslo === "co tam?"){
        odpowiedz.textContent = "boli..."
    }
    else if (haslo === "ladna dzis pogoda"){
        odpowiedz.textContent = "zalezy dla kogo..."
    }
    else if (haslo === "pomoz nam"){
        odpowiedz.textContent = "przeciez to robie..."
    }
    else if (haslo === "edith muller"){
        odpowiedz.textContent = "jak dlugo jeszcze chcesz to ciagnac...?"
    }
    else if (haslo === "edmund james kelly"||haslo === "eddie"){
        odpowiedz.textContent = "tez chcesz byc tacy jak oni...? nie zaslugujesz..."
    }
    else if  (haslo === "mika stein"){
        odpowiedz.textContent = "biedne dziecko... sed nunc bene est..."
    }
    else if (haslo === "agnes hoffman"||haslo === "agnes hoffman schulz"){
        odpowiedz.textContent = "naprawde ladna z ciebie dziewczynka... mam nadzieje ze spodoba ci sie prezent..."
    }
    else if (haslo === "ingrid hoffman"){
        odpowiedz.textContent = "ciesze sie ze wrocilas..."
    }
    else if (haslo === "wolfgang schneider"){
        odpowiedz.textContent = "...i tak uwazam ze zaslugujesz na kogos lepszego..."
    }
    else if (haslo === "alina sorge"){
        odpowiedz.textContent = "widzisz co im zrobilas...?"
    }
     else if (haslo === "liliana sorge"){
        odpowiedz.textContent = "nic nie pamietasz... mozesz byc razem z nami..."
    }
    else if (haslo === "arnold shluter"){
        odpowiedz.textContent = "...czy wiesz gdzie jest twoja siostra...?"
    }
    else if (haslo === "helga schneider"){
        odpowiedz.textContent = "kochana siostra... szuka braciszka... sine me adiuvare..."
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
        odpowiedz.textContent = "Miseret me tibi... Sed non mihi est eligere... Hoc in stipendium accipio..."
    }
    else if (haslo === "naukowcy"){
        odpowiedz.textContent = "Fruere... Mors veniet... Sive vis sive non..."
    }
    else if (haslo === "narkotyki"){
        odpowiedz.textContent = "Putasne vere id adiuturum esse...? Adhuc eos dolet..."
    }
    else if (haslo === "serwerownia"){
        odpowiedz.textContent = "Nunc bene est... Scio dolere..."
    }
    else if (haslo === "komisariat"){
        odpowiedz.textContent = "ona czeka na ciebie... Samuel..."
    }
    else if (haslo === "las"){
        odpowiedz.textContent = "Arbor inversa in silva est... Et in ligno... Solucionis..."
    }
    else if (haslo === "drzewo"){
        odpowiedz.textContent = "Interdum et ego esurio..."
    }
    else if (haslo === "wypadek"||haslo === "ewakuacja"||haslo === "wyciek gazu"){
        odpowiedz.textContent = "Aliquid mihi faciendum erat... Eos pati videre non poteram..."
    }
    else if (haslo === "ewikgeisstadt"){
        odpowiedz.textContent = "miasto wiecznosci...? co za ironia..."
    }
    else if (haslo === "leben technologies"){
        odpowiedz.textContent = "mamy trudne relacje..."
    }
    else if (haslo === "lain"||haslo === "l.a.i.n"){
        odpowiedz.textContent = "dlugo im to zajelo..."
    }
    else if (haslo === "menel"){
        odpowiedz.textContent = "ktory...? bo w tym momencie jest ich tutaj trzech..."
    }
    else if (haslo === "wielki brat patrzy"){
        odpowiedz.textContent = "< .<"
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
    else if (haslo === "sex?"){
        odpowiedz.textContent = "co...?"
    }
    else if (haslo === "jestes gejem?"||haslo === "jestes lesbijka?"){
        odpowiedz.textContent = "o czym ty mowisz...?"
    }
    else if (haslo === "wielki tluscioch" || haslo === "#spoiler"){
        tluscioch.style.display = "";
    }
    else{
        odpowiedz.textContent = "";
        tluscioch.style.display = "none";
    }
});