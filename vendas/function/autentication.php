<?php
// Inicia a sessão
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {

    echo "<META HTTP-EQUIV=REFRESH CONTENT='0;URL=../index.html'>
            <script type=\"text/javascript\">
                alert(\"Hey você não está autorizado!\");
            </script>";
    exit;
}
?>

