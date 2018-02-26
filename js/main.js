/*petla for
1. potrzebny jest iterator (jezli przechodzimy po tablicy, iteratorowi przypisujemy 0)
2. potrzebny jest warunek (dopoki iterator mniejszy od dlugosci tablicy)
3. zwiekszamy iterator (i++)

var tablica = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < tablica.length; i++) {
    console.log(tablica[i]);
};

petla forEach
1. podaj nazwę tablicy
2. wykonaj motode forEach() - za parametr przyjmij funkcje - tafunkcja tez moze ptzyjac parametry (element, index)

tablica.forEach(function (element, index) {
    console.log('element: ' + element + ' o indeksie: ' + index);
});

function dodajMnoz() {
    var tablica = [1, 2, 3];
    var suma = 0;
    var iloczyn = 1;

    for (var i = 0; i < tablica.length)
};

1. split, reverse, jonin*/

//TUTAJ ZACZYNA SIĘ OBSŁUGA SCROLLA
//Event-scroll wykonujemy na obiekcie window
//obsługa przezroczystego menu

/* 1. do zmiennej przypisujemy wysokosc menu
2. do zmiennej przypisujemy wartosc scroll od gory window
3. instrukcja warunkowa sprawdzajaca, czy wartosc scroll od gory window jest wieksza lub rowna wysokosci menu:
a. true - dodaj klase
b. false - zabierz klase */

/*
obsługa zdarzeń w JavaScript (addEventListener('event', fuckstion(){}))
*/
window.addEventListener('scroll', function () {
    //    JS wysokosc elementu -> offsetHeight
    var navHeight = document.getElementById('main-nav').offsetHeight;
    
    var headerHeight = document.getElementById('main-header').offsetHeight;
    
//    pageYOffset - zwraca liczbe pikseli po scrollu od gory okna
//    parseInt (wartosc, jaki system liczbowy) - zmienia zmiennoprzecinkowe na całkowite
    var yPos = parseInt(this.pageYOffset, 10);
    console.log(yPos);
    
    if(yPos >= navHeight) /*<- instrukcja warunkowa*/ {
        document.getElementById('main-nav').classList.add('transparentBg');
    }
    else {
        document.getElementById('main-nav').classList.remove('transparentBg');
    }
    
    if(yPos >= headerHeight) {
        var bgPos = -(yPos - headerHeight);
        
        
        document.getElementById('background').style.backgroundPosition = bgPos + 'px 0';
    }
});













































