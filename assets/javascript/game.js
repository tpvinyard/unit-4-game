$(document).ready(function() {
    let attackPower = "";
    let healthPoints = "";
    let counterAttackPower = "";
    let counterHealthPoints = "";
    let isCharacterChosen = false;
    let isEnemyChosen = false;
    let isGameOver = false;

    function resetGame () {

    };

    function attack () {

    };

    $(".main").on("click", function () {

        if (!isCharacterChosen) {

            $("#character-1").hide();
            $("#character-2").hide();
            $("#character-3").hide();
            $("#character-4").hide();

            healthPoints = ($(this).attr("data-hp"));

            $(".your").each(function() {
                if (healthPoints === $(this).attr("data-hp")) {
                    $(this).show();
                }
            })

            $(".available").each(function() {
                if (healthPoints !== $(this).attr("data-hp")) {
                    $(this).show();
                }
            })
            
            isCharacterChosen = true;

        }
    
    });

    $(".available").on("click", function() {
        
        if (!isEnemyChosen) {

            counterHealthPoints = ($(this).attr("data-hp"));

            $(".defender").each(function() {
                if (counterHealthPoints === $(this).attr("data-hp")) {
                    $(this).show();
                }
            })

            isEnemyChosen = true;
        }

    })

});
