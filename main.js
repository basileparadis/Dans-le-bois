function doWithThisElement(element) {

    document.getElementById('desc').innerHTML = "-- "+element.title+" --";

    switch($("#imagesTravaux > .item").length)
    {
        case 1:
            $('#imagesTravaux').append("<div class='item' id='cadre2'><img title='DeuxiemeImage' id='image2'></img></div>");
            $('#imagesTravaux').append("<div class='item' id='cadre3'><img title='TroisiemeImage' id='image3'></img></div>");
            $('#imagesTravaux').append("<div class='item' id='cadre4'><img title='QuatriemeImage' id='image4'></img></div>");
            break;
        case 2:
            $('#imagesTravaux').append("<div class='item' id='cadre3'><img title='TroisiemeImage' id='image3'></img></div>");
            $('#imagesTravaux').append("<div class='item' id='cadre4'><img title='QuatriemeImage' id='image4'></img></div>");
            break;
        case 3:
            $('#imagesTravaux').append("<div class='item' id='cadre4'><img title='QuatriemeImage' id='image4'></img></div>");
            break;
        case 4:
            break;
        default:
            break;
    }

    switch(element.id)
    {
        // PhilippeCouette
        case '1':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/5.jpg' title='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";       
            console.log(document.getElementById('image1').outerHTML);
            break;
        // Elvis
        case '2':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/5.jpg' title='QuatriemeImage' id='image4'></img>";     
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";       
            break;
        // Fender
        case '3':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/5.jpg' title='QuatriemeImage' id='image4'></img>";  
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";            
            break;
        // StenslandGirard
        case '4':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/1.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";       
            break;
        // LaBeteASeguin
        case '5':
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').hide();
            $('#myCarousel').find('#indicateur4').hide();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/1.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
        // Parrafine
        case '6':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/1.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
        // PurPak
        case '7':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            $('#myCarousel').find('#indicateur3').show();
            $('#myCarousel').find('#indicateur4').show();
            document.getElementById('image1').outerHTML = "<img src='./img/travaux/"+element.title+"/1.jpg' title='PremiereImage' id='image1'></img>";
            document.getElementById('image2').outerHTML = "<img src='./img/travaux/"+element.title+"/2.jpg' title='DeuxiemeImage' id='image2'></img>";
            document.getElementById('image3').outerHTML = "<img src='./img/travaux/"+element.title+"/3.jpg' title='TroisiemeImage' id='image3'></img>";
            document.getElementById('image4').outerHTML = "<img src='./img/travaux/"+element.title+"/4.jpg' title='QuatriemeImage' id='image4'></img>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
        // ByeBye
        case '8':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202293' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Guillaume Lespérance et KOTV ++ réalisation : Simon-Olivier Fecteau (mettre le logo des Gémeaux finaliste 2019)";
            break;
        // Cerebrum
        case '9':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/355572258' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            break;
        // Demo
        case '10':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/253806432' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "production : Josée Vallée / Datsit Sphère réalisation : Richard Blaimert";
            break;
        // Gemeaux
        case '11':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202814' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Radio-Canada ++ réalisation : Guy Gagnon";
            break;
        // LMalediction
        case '12':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329202750' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // Marika
        case '13':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/329203097' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ production : Téléfiction";
            break;
        // NitroRush
        case '14':
            $('#myCarousel').find('#indicateurs').show();
            $('#myCarousel').find('.carousel-control').show();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            $('#myCarousel').find('#indicateur1').show();
            $('#myCarousel').find('#indicateur2').show();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/217019210' id='image1' width='640' height='270' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('image2').outerHTML="<iframe src='https://player.vimeo.com/video/217021460' id='image2' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            break;
        // PauseKahwa
        case '15':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/234550377' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // QcCinema
        case '16':
            $('#myCarousel').find('#indicateurs').hide();
            $('#myCarousel').find('.carousel-control').hide();
            $('#myCarousel').find('#cadre2').remove();
            $('#myCarousel').find('#cadre3').remove();
            $('#myCarousel').find('#cadre4').remove();
            document.getElementById('image1').outerHTML="<iframe src='https://player.vimeo.com/video/234550418' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe>";
            document.getElementById('texte').innerHTML = "++ Réalisation : Guy Gagnon";
            break;
        default:
            break;
    }
}