<?php

/* Header for all pages */
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="/styles.css">';
    echo '</head>';
    echo '<body>';
}

function outputBannerNavigation($pageName){
        /* Banner and Navigation for all pages */
        echo '<div class="banner"> <b> AIM ASSISTANT </b> </div>';
        echo '<div class="navigation">';
        
        /* Array of pages linking them together */
        $linkNames = array("Home", "Game", "Login", "Register", "Score");
        $linkAddresses = array("main_page.php", "game_page.php", "login.php", "register.php", "score.php");
        
        /* Code for each selected address from array */
        for($x = 0; $x < count($linkNames); $x++){
            echo '<a ';
            if($linkNames[$x] == $pageName){
                echo 'class="selected" ';
            }
            echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
        }
        echo '</div>';
    }

?>