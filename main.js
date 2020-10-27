// Rifate (con immagini a piacere e con il vostro gusto grafico) lo slider di immagini in jQuery come l'abbiamo visto stamattina.
// Aggiungete anche i pallini che si "muovono" di pari passo con le immagini.
// BONUS: cliccando su un pallino, si attiva l'immagine corrispondente. Ad esempio: sto visualizzando la prima immagine, clicco sul quarto pallino e si attiva direttamente la quarta immagine (oltre al pallino corrispondente ovviamente!)

$(document).ready(function() {
// attivare al click la freccia sx
    $ (".arrow-right i").click(function() {
        // alert("click");
        // devo creare variabile img
        var imgVisualizzata = $("img.active");
        // stesso procedimento con i cerchietti
        var cerchi = $("span.active");
        // per iniziare questo ciclo dovrò rimuovere l'active dalla prima immagine, assegnarla all'immagine successiva ecc
        imgVisualizzata.removeClass("active");
        cerchi.removeClass("active");
        // se presente img successiva:
        if ((imgVisualizzata.next("img").length) && (cerchi.next("span").length)) {
            // devo assegnare l'active all'img successiva
            imgVisualizzata.next("img").addClass("active");
            cerchi.next("span").addClass("active");
        } else  {
        // se img non presente, riassegno l'active alla prima img
            $(".carousel-images :first-child").addClass("active");
            $(".cerchietti :first-child").addClass("active");
        }

    });

    $ (".arrow-left i").click(function() {
        // alert("click");
        var imgVisualizzata = $("img.active");
        var cerchi = $("span.active");

        imgVisualizzata.removeClass("active");
        cerchi.removeClass("active");

        if ((imgVisualizzata.prev("img").length) && (cerchi.prev("span").length)) {

            imgVisualizzata.prev("img").addClass("active");
            cerchi.prev("span").addClass("active");
        } else {
            $(".carousel-images :last-of-type").addClass("active");
            $(".cerchietti :last-of-type").addClass("active");
        }

    });
});
