$(document).ready(function() {
    let attackPower = "";
    let healthPoints = "";
    let counterAttackPower = "";
    let isCharacterChosen = false;
    let isEnemyChosen = false;
    let isGameOver = false;

    function resetGame () {

    };

    function attack () {

    };

    $(".card").on("click", function () {

        if (!isCharacterChosen) {

            $("#character-1").hide();
            $("#character-2").hide();
            $("#character-3").hide();
            $("#character-4").hide();

            let mainCharacter = $("<div>");
            mainCharacter.addClass("card");
            mainCharacter.attr("data-hp", $(this).attr("data-hp"));
            mainCharacter.attr("data-ap", $(this).attr("data-ap"));
            mainCharacter.text($(this).attr("data-hp"));
            $("#your-character").append(mainCharacter);

            $(".card").each(function() {
                if (mainCharacter.text() !== $(this).attr("data-hp")) {
                    let otherCharacter = $("<div>");
                    otherCharacter.addClass("card");
                    otherCharacter.attr("data-hp", $(this).attr("data-hp"));
                    otherCharacter.attr("data-ap", $(this).attr("data-ap"));
                    otherCharacter.text($(this).attr("data-hp"));
                    $("#available-attackers").append(otherCharacter);
                }
            });
            
            isCharacterChosen = true;

        } else if (!isEnemyChosen) {
            isEnemyChosen = true;
        }


    })
});