let form = document.querySelector('#loginForm');
form.email.addEventListener('change', function(){
    validEmail(this);
});
const validEmail = function(inputEmail) {

    // Création de la Regexp pour valider l'email
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,}$', 'g'
    );

    //  tester l'adresse email
    let testEmail = emailRegExp.test(inputEmail.value); // return true ou false.
    //  recupérer la balise small avec 'nextElementSibling'
    let small = inputEmail.nextElementSibling;

    // L'Affichage de la validation de l'email
    if(testEmail){
        small.innerHTML = 'Adresse Email Valide';
    } else{
        small.innerHTML = 'Adresse Email Pas Valide (Carectère Valide: A-Z 0-9 _.-)';
    }
};