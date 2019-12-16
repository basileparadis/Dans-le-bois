function doWithThisElement(element) {

    document.getElementById('desc').innerHTML = "-- "+element.title+" --";

    switch(element.id)
    {
        // PhilippeCouette
        case '1':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/5.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";       
            break;
        // Elvis
        case '2':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/5.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";       
            break;
        // Fender
        case '3':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/5.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";           
            break;
        // StenslandGirard
        case '4':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/1.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";           
            break;
        // LaBeteASeguin
        case '5':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/1.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; 
            break;
        // Parrafine
        case '6':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/5.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";  
            break;
        // PurPak
        case '7':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <img src='./img/travaux/"+element.title+"/2.jpg' alt='PremiereImage' id='image1'> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <img src='./img/travaux/"+element.title+"/3.jpg' alt='DeuxiemeImage' id='image2'> \
                    </div> \
                    <div class='item' id='cadre3'> \
                        <img src='./img/travaux/"+element.title+"/4.jpg' alt='TroisiemeImage' id='image3'> \
                    </div> \
                    <div class='item' id='cadre4'> \
                        <img src='./img/travaux/"+element.title+"/5.jpg' alt='QuatriemeImage' id='image4'> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";  
            break;
        // ByeBye
        case '8':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/329202293' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ production : Guillaume Lespérance et KOTV ++ réalisation : Simon-Olivier Fecteau (mettre le logo des Gémeaux finaliste 2019)";
            break;
        // Cerebrum
        case '9':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/355572258' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            break;
        // Demo
        case '10':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/253806432' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "production : Josée Vallée / Datsit Sphère réalisation : Richard Blaimert";
            break;
        // Gemeaux
        case '11':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/329202814' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ production : Radio-Canada ++ réalisation : Guy Gagnon";
            break;
        // LMalediction
        case '12':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/329202750' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // Marika
        case '13':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/329203097' id='image1' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ production : Téléfiction";
            break;
        // NitroRush
        case '14':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/217019210' id='image1' width='640' height='270' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                    <div class='item' id='cadre2'> \
                        <iframe src='https://player.vimeo.com/video/217021460' id='image2' width='640' height='360' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ Un résumé de quelques projets… ++ A resume of some of the work we did…";
            break;
        // PauseKahwa
        case '15':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/234550377' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ À venir.";
            break;
        // QcCinema
        case '16':
            document.getElementById('imagesTravaux').outerHTML = 
                "<div class='carousel-inner' id='imagesTravaux'> \
                    <div class='item active' id='cadre1'> \
                        <iframe src='https://player.vimeo.com/video/234550418' id='image1' width='640' height='360' frameborder='0' allow='autoplay; fullscreen' allowfullscreen></iframe> \
                    </div> \
                </div>";
            document.getElementById('texte').innerHTML = "++ Réalisation : Guy Gagnon";
            break;
        default:
            break;
    }

    if($("#imagesTravaux > .item").length > 1)
    {
        $('#myCarousel').find('.carousel-control').show();
    }
    else
    {
        $('#myCarousel').find('.carousel-control').hide();
    }
}