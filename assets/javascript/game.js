$(document).ready(function() {
    let attackPower = 0;
    let originalAttackPower = 0;
    let healthPoints = 0;
    let counterAttackPower = 0;
    let counterHealthPoints = 0;
    let isCharacterChosen = false;
    let isEnemyChosen = false;
    let isGameOver = false;

    function resetGame () {

    };

    $(".main").on("click", function () {

        if (!isCharacterChosen) {

            $("#character-1").hide();
            $("#character-2").hide();
            $("#character-3").hide();
            $("#character-4").hide();

            healthPoints = ($(this).attr("data-health"));
            attackPower = ($(this).attr("data-attack"));
            originalAttackPower = ($(this).attr("data-attack"));

            $(".your").each(function() {
                if (healthPoints === $(this).attr("data-health")) {
                    $(this).show();
                }
            })

            $(".available").each(function() {
                if (healthPoints !== $(this).attr("data-health")) {
                    $(this).show();
                }
            })
            
            isCharacterChosen = true;

        }
    
    });

    $(".available").on("click", function() {
        
        if (!isEnemyChosen) {

            counterHealthPoints = ($(this).attr("data-health"));
            counterAttackPower = attackPower;

            $(".defender").each(function() {
                if (counterHealthPoints === $(this).attr("data-health")) {
                    $(this).show();
                }
            })

            isEnemyChosen = true;
        }

    })

    $("#attack-button").on("click", function() {

        if (isEnemyChosen && isCharacterChosen) {
            healthPoints = healthPoints - counterAttackPower;
            counterHealthPoints = counterHealthPoints - attackPower;
            attackPower = parseInt(attackPower) + parseInt(originalAttackPower);
            $("#my-health").text("Your hero's health is " + healthPoints);
            $("#opponent-health").text("Your opponent's health is " + counterHealthPoints);
        }
    })



});
