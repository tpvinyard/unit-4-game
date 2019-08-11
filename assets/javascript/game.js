$(document).ready(function() {
    let attackPower = "";
    let healthPoints = "";
    let counterAttackPower = "";
    let isCharacterChosen = false;
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
            mainCharacter.text($(this).attr("data-hp"));
        }
    })
});