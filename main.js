function doWithThisElement(element) {

    //document.getElementById("fenetreProjets").style.display = "none";

    if(document.getElementById("fenetreProjets").style.display === "none")
    {
        window.alert(document.getElementById("fenetreProjets").style.visibility)
        document.getElementById("fenetreProjets").style.display === "block";
    }

    switch(element.id)
    {
        // PhilippeCouette
        case '1':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/5.jpg' alt='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";       
            console.log(document.getElementById('image1').outerHTML);
            break;
        // Elvis
        case '2':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/5.jpg' alt='QuatriemeImage' id='image4'></img>";     
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            console.log(document.getElementById('image1').outerHTML);
       
            break;
        // Fender
        case '3':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/5.jpg' alt='QuatriemeImage' id='image4'></img>";  
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";            
            console.log(document.getElementById('image1').outerHTML);
            break;
        // StenslandGirard
        case '4':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/1.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";       
            console.log(document.getElementById('image1').outerHTML);
            break;
        // LaBeteASeguin
        case '5':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/1.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='' alt='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            console.log(document.getElementById('image1').outerHTML);
            break;
        // Parrafine
        case '6':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/1.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            console.log(document.getElementById('image1').outerHTML);
            break;
        // PurPak
        case '7':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.alt+"/1.jpg' alt='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.alt+"/2.jpg' alt='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.alt+"/3.jpg' alt='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.alt+"/4.jpg' alt='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            console.log(document.getElementById('image1').outerHTML);
            break;
        // ByeBye
        case '8':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202293' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Guillaume Lespérance et KOTV ++ réalisation : Simon-Olivier Fecteau (mettre le logo des Gémeaux finaliste 2019)";
            console.log(document.getElementById('image1').outerHTML);
            break;
        // Cerebrum
        case '9':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/355572258' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            console.log(document.getElementById('image4').outerHTML);
            break;
        // Demo
        case '10':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/253806432' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "production : Josée Vallée / Datsit Sphère réalisation : Richard Blaimert";
            console.log(document.getElementById('image4').outerHTML);
            break;
        // Gemeaux
        case '11':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202814' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Radio-Canada ++ réalisation : Guy Gagnon";
            console.log(document.getElementById('image4').outerHTML);
            break;
        // LMalediction
        case '12':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202750' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // Marika
        case '13':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329203097' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Téléfiction";
            break;
        // NitroRush
        case '14':
            document.getElementById('indicateurs').style.display = "block";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/217019210' id='image1' width='640' height='270' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('image2').outerHTML="<iframe src='https://player.vimeo.com/video/217021460' id='image2' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            break;
        // PauseKahwa
        case '15':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/234550377' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // QcCinema
        case '16':
            document.getElementById('indicateurs').style.display = "none";
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/234550418' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Réalisation : Guy Gagnon";
            break;
        default:
            break;
    }
}

function upPage(document) {

    console.info(document.getAttribute("href"));

    switch(document.getAttribute("href"))
    {
        case "#":
            document.getAttribute("href") = "#works"
            break;
        case "#works":
            document.getAttribute("href") = "#focusWork"
            break;
        case "#focusWork":
            document.getAttribute("href") = "#equipe"
            break;
        case "#equipe":
            document.getAttribute("href") = "#contact"
            break;
        case "#contact":
            document.getAttribute("href") = "#contact"
            break;
    }

    console.info(document.getAttribute("href"));
}

function downPage(document) {

    console.info(document.getAttribute("href"));

    switch(document.getAttribute("href"))
    {
        case '#':
            document.getAttribute("href") = "#"
            console.info(document.getAttribute("href"));
            break;
        case '#works':
            document.getAttribute("href") = "#"
            break;
        case "#focusWork":
            document.getAttribute("href") = "#works"
            break;
        case "#equipe":
            document.getAttribute("href") = "#focusWork"
            break;
        case "#contact":
            document.getAttribute("href") = "#equipe"
            break;
    }
}