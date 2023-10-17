document.getElementById("login_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Récupérer les valeurs saisies par l'utilisateur
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    // Vérifier les identifiants
    if (username === "chouetteauteur" && password === "redigesagesse") {
        // Rediriger l'utilisateur vers la page de bienvenue
        window.location.href = "./index/index.html";
    } else {
        // Afficher un message d'erreur
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block"; // Afficher le message d'erreur
    }
});

// Récupérez l'élément input et le bouton
var passwordField = document.getElementById("pass");
var showPasswordButton = document.getElementById("showPasswordButton");

// Écoutez l'événement "click" sur le bouton
showPasswordButton.addEventListener("click", function () {
    if (passwordField.type === "password") {
        // Si le type de l'input est "password", changez-le en "text"
        passwordField.type = "text";
    } else {
        // Sinon, changez-le en "password"
        passwordField.type = "password";
    }
});
