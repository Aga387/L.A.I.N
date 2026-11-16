const hasloTekst = document.getElementById('haslo');
const odpowiedz = document.getElementById('odpowiedz');
const tluscioch = document.getElementById('skibidi');
const megaTluscioch = document.getElementById('toilet');
const samgang = document.getElementById('geje');
tluscioch.style.display = "none";
megaTluscioch.style.display = "none";
samgang.style.display = "none";

hasloTekst.addEventListener('input', function(){
    const haslo = hasloTekst.value.toLowerCase().trim();

    if (haslo === "hej"||haslo === "czesc"){
        odpowiedz.textContent = "hej..."
    }
    else if (haslo === "co u ciebie?"||haslo === "co tam?"){
        odpowiedz.textContent = "normalnie mowi sie 'wow dobra robota' jak ktos pokazuje cos nad czym ciezko pracowal... nie 'o boze co ty jej zrobiles!?'..."
    }
    else if (haslo === "zle ci z oczu patrzy"){
        odpowiedz.textContent = "mam zabojczo przystojne spojrzenie..."
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
        odpowiedz.textContent = "naprawde nie chce mi sie ciebie ratowac..."
    }
    else if  (haslo === "mika stein"){
        odpowiedz.textContent = "biedne dziecko... sed nunc bene est..."
    }
    else if (haslo === "agnes hoffman"||haslo === "agnes hoffman schulz"){
        odpowiedz.textContent = "milo mi ze podoba ci sie prezent od Miki..."
    }
    else if (haslo === "ingrid hoffman"){
        odpowiedz.textContent = "teraz przyszla kolej na ciebie..."
    }
    else if (haslo === "wolfgang schneider"){
        odpowiedz.textContent = "ciesze sie ze polubiles sie z mika..."
    }
    else if (haslo === "alina sorge"){
        odpowiedz.textContent = "nie wciagaj mnie w klotnie z twoja druga osobowoscia ok...?"
    }
     else if (haslo === "liliana sorge"){
        odpowiedz.textContent = "pomoge ci... obiecuje..."
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
        odpowiedz.textContent = "to z litosci... w wiekszosci..."
    }
    else if (haslo === "anton fischer"){
        odpowiedz.textContent = "szkoda tylko ze ci za to nie placi..."
    }
    else if (haslo === "rachel vogel"){
        odpowiedz.textContent = "troche glupio wyszlo z Yara... he he...(to nerwowy smiech...)"
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
    else if (haslo === "fred backer"){
        odpowiedz.textContent = "w koncu mi sie do czegos przydasz..."
    }
    else if (haslo === "anika herrmann"||haslo === "jorg meier"||haslo === "erik neumann"||haslo === "karoline weber"||haslo === "berthold dietrich"||haslo === "lotte koch"||haslo === "sigrid kohler"||haslo === "jule kraus"||haslo === "theo kuhn"){
        odpowiedz.textContent = "prosili bym podziekowal Ingrid i Wolfgangowi za pomoc..."
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
        odpowiedz.textContent = "Interdum et ego esurio..."
    }
    else if (haslo === "drzewo"){
        odpowiedz.textContent = "Ignosce mihi... te terrere nolui..."
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
        odpowiedz.textContent = "sa jakby okej..."
    }
    else if (haslo === "penis"){
        odpowiedz.textContent = "penis... ha ha ha..."
    }
    else if (haslo === "yaoi"){
        odpowiedz.textContent = "ja jestem tolerancyjny..."
    }
    else if (haslo === "yuri"){
        odpowiedz.textContent = "kobiet tez nie dyskryminuje..."
    }
    else if (haslo === "sex?"){
        odpowiedz.textContent = "co...?"
    }
    else if (haslo === "jestes gejem?"||haslo === "jestes lesbijka?"){
        odpowiedz.textContent = "ale ty wiesz ze nie jestem czlowiekiem...? prawda...??"
    }
    else if (haslo === "sentient meat pile"){
        odpowiedz.textContent = "smacznego... :)"
    }
    else if (haslo === "#stopkanibalizmowi"){
        odpowiedz.textContent = ":("
    }
    else if (haslo === "ralina"){
        odpowiedz.textContent = "tkwienie w toksycznym zwiazku moze miec bardzo zle konsekwencje..."
    }
    else if (haslo === "samgang"){
        odpowiedz.textContent = "to postawi was obu przed wyborami ktore moga byc trudne..."
    }
    else if (haslo === "inchel"){
        odpowiedz.textContent = "macie wiecej wspolnego niz wam sie moze wydawac..."
    }
    else if (haslo === "yarchel"){
        odpowiedz.textContent = "wybacz... ale na to juz troche za pozno..."
    }
    else if (haslo === "ingang"){
        odpowiedz.textContent = "bycie w gangu nie jest fajne..."
    }
    else if (haslo === "migang"){
        odpowiedz.textContent = "ciesze sie ze dogadujesz sie z mika..."
    }
    else if (haslo === "kogo shipujesz?"){
        odpowiedz.textContent = "ja nie lubie plywac lodzia... nie wiedziec czemu zawsze sie topia kiedy na nie wsiadam..."
    }
    else if (haslo === "samgang czy migang?"){
        odpowiedz.textContent = "generalnie jestem za wolnoscia slowa... ale jezeli skrzywdzisz Mike to mozesz wybierac pomiedzy komisariatem i serwerownia..."
    }
    else if (haslo === "buziaczek"){
        samgang.style.display = "";
    }
    else if (haslo === "wielki tluscioch" || haslo === "#spoiler"){
        tluscioch.style.display = "";
    }
    else if (haslo === "mega tluscioch" || haslo === "#megaspoiler"){
        megaTluscioch.style.display = "";
    }
    else{
        odpowiedz.textContent = "";
        samgang.style.display = "none";
        tluscioch.style.display = "none";
        megaTluscioch.style.display = "none";
    }
});