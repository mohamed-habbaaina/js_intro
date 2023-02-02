// ********* Ecouter les Evenements *********

let form = document.querySelector('#loginForm');

// Ecouter change Email
// form.email return input email
form.email.addEventListener('change', function(){
    validEmail(this);
});

// Ecouter change Password
form.password.addEventListener('change', function(){
    validPassword(this);
})


// ********* Validation Email *********
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
        small.style.color = 'green';
        return true; // pour l'utiliser dans la function de submit form
    } else{
        small.innerHTML = 'Adresse Email Pas Valide (Carectère Valide: A-Z 0-9 _.-)';
        small.style.color = 'red';
        return false;
    }
};

// ********* Validation Password *********
const validPassword = function(inputPassword){
    let msg;
    let valid = false;

    // verifier que Password contien minimum 4 caracteres;
    if(inputPassword.value.length < 4){
        msg = 'Password trop cours Minimum 4 caracteres !';
    }

    //  Au moins une maj
    else if (!/[A-Z]/.test(inputPassword.value)){
        msg = 'Le Password dois contenir au moins une Majuscule !';
    }

    //  Au moins une min
    else if (!/[a-z]/.test(inputPassword.value)){
        msg = 'Le Password dois contenir au moins une Miniscule !';
    }

    //  Au moins un chiffre
    else if (!/[0-9]/.test(inputPassword.value)){
        msg = 'Le Password dois contenir au moins un Chiffre !';
    }

    else{
        msg = 'Le Password est Valide';
        valid = true;
    }
    
    // L'Affichage de la validation de Password.
    let smallPass = inputPassword.nextElementSibling;

    if(valid){
        smallPass.innerHTML = 'Password Valide';
        smallPass.style.color = 'green';
    } else{
        smallPass.innerHTML = msg;
        smallPass.style.color = 'red';
    }    
}
