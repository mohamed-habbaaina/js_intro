<?php if(!isset($_SESSION['login'])): ?>
    <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="connexion.php">Connexion</a></li>
                <li><a href="inscription.php">Inscription</a></li>
            </ul>
        </nav>
<?php endif; ?>