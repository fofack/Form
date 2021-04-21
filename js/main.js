document.forms["envoi"].addEventListener("submit", function(e){

    var erreur;
    var inputs = this;
    var email = /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]{2,}\+.[a-zA-Z]{2,3}$/;
    var regex = new RegExp(/ ^ (\+237)[1-9][0-9]{9} $ /);
    var regexName = new RegExp(/^[A-Za-z]{3,7}$/);

        var verifie = regex.test(inputs["numero"].value);

        if(verifie == false){
            erreur = " Votre numero de telephone est mal former. Veuillez ressayer";
        }

        var verifiemail = email.test(inputs["email"].value);

        if(verifiemail == false){
            erreur = " Votre email est mal former. Veuillez ressayer";
        }

        var verifienom = regexName.test(inputs["nom"].value);

        if(verifienom == false){
            erreur = " Votre nom doit contenir u moins 3 et au plus 7 lettres. Veuillez ressayer";
        }

            var verifieprenom = regexName.test(inputs["prenom"].value);

        if(verifieprenom == false){
            erreur = " Votre prenom doit contenir au moins 3 et au plus 7 lettres. Veuillez ressayer";
        }

    for(var i = 0; i<inputs.length; i++){
        if(!inputs[i].value){
            erreur = "Veuillez renseigner tous les champs";
        }
    }
    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }

});