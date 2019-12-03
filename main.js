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
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/4.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/5.jpg";
            break;
        // Elvis
        case '2':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/4.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/5.jpg";         
            break;
        // Fender
        case '3':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/4.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/5.jpg";         
            break;
        // StenslandGirard
        case '4':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";         
            break;
        // LaBeteASeguin
        case '5':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            break;
        // Parrafine
        case '6':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // PurPak
        case '7':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;/*
        // ByeBye
        case '8':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // Cerebrum
        case '9':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // Demo
        case '10':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // Gemeaux
        case '11':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // LMalediction
        case '12':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // Marika
        case '13':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;
        // NitroRush
        case '14':
            document.getElementById('image1').src = "./img/travaux/"+element.alt+"/1.jpg";
            document.getElementById('image2').src = "./img/travaux/"+element.alt+"/2.jpg";
            document.getElementById('image3').src = "./img/travaux/"+element.alt+"/3.jpg";
            document.getElementById('image4').src = "./img/travaux/"+element.alt+"/4.jpg";
            break;*/
        default:
            // code block
    }
}

function makeAllVisible() {

    //imagesTravaux
}