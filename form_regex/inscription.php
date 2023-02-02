<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <?php require_once('./includes/header.php') ?>
    
    <main>
        <form action="inscription.php" method="post" id="loginForm">

            <div>
                <label for="email">email</label>
                <input type="email" name="email" id="email" placeholder="Votre Email">
                <small></small>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Votre Password">
                <small></small>
            </div>
            <div>
                
                <label for="repass">Confermer Votre Password</label>
                <input type="password" name="repass" id="repass" placeholder="Confermer Votre Password">
            </div>
            <div>
                <button type="submit" id="btn-register">Valider</button>
            </div>

        </form>
    </main>
    <script src="./app.js"></script>
</body>
</html>