$(document).ready(function() {
    let attackPower = 0;
    let originalAttackPower = 0;
    let healthPoints = 0;
    let counterAttackPower = 0;
    let counterHealthPoints = 0;
    let isCharacterChosen = false;
    let isEnemyChosen = false;
    let isGameOver = false;
    let counterFoes = 0;

    function resetGame () {
        $("#initializeGameText, #character-1, #character-2, #character-3, #character-4").show();
        $("#character-1-your, #character-2-your, #character-3-your, #character-4-your").hide();
        $("#character-1-available, #character-2-available, #character-3-available, #character-4-available").hide();
        $("#character-1-defender, #character-2-defender, #character-3-defender, #character-4-defender").hide();
        $("#your-character, #fight-section, #attack-button, #defender, #available-attackers").hide();
        $("#my-health, #opponent-health").empty();
        $("#reset-button").hide();

        attackPower = 0;
        originalAttackPower = 0;
        healthPoints = 0;
        counterAttackPower = 0;
        counterHealthPoints = 0;
        isCharacterChosen = false;
        isEnemyChosen = false;
        isGameOver = false;
        counterFoes = 0;

    
    };

    $(".main").on("click", function () {

        if (!isCharacterChosen) {

            $("#initializeGameText").hide();
            $("#character-1, #character-2, #character-3, #character-4").hide();
            $("#your-character, #fight-section, #attack-button, #defender, #available-attackers").show();

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
            counterAttackPower = ($(this).attr("data-counter-attack"));

            $(".available").each(function() {
                if (counterHealthPoints === $(this).attr("data-health")){
                    $(this).hide();
                }
            })

            $(".defender").each(function() {
                if (counterHealthPoints === $(this).attr("data-health")) {
                    $(this).show();
                    $("#opponent-health").text("Your opponent's health is " + counterHealthPoints);
                }
            })

            isEnemyChosen = true;
        }

    })

    $("#attack-button").on("click", function() {

        if (isEnemyChosen && isCharacterChosen && !isGameOver) {
            healthPoints = healthPoints - counterAttackPower;
            counterHealthPoints = counterHealthPoints - attackPower;
            attackPower = parseInt(attackPower) + parseInt(originalAttackPower);


            $("#my-health").text("Your hero's health is " + healthPoints);
            $("#opponent-health").text("Your opponent's health is " + counterHealthPoints);

            if (counterHealthPoints <= 0) {
                counterFoes++;
                if (counterFoes >= 3) {
                    $("#opponent-health").append("<div>You win!</div>");
                    $("#reset-button").show();
                    isGameOver = true;
                }
                $("#opponent-health").append("<div>Your opponent has died. Choose another foe.</div>");
                $("#character-1-defender, #character-2-defender, #character-3-defender, #character-4-defender").hide();
                isEnemyChosen = false;
            }

            if (healthPoints <= 0 && !isGameOver) {
                $("#opponent-health").append("<div>Game Over</div>");
                $("#reset-button").show();
                isGameOver = true;
            }
        }
    })

    $("#reset-button").on("click", function () {
        resetGame();
    })



});
