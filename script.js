var is_in_game = false;
var body = document.body;

var ship = document.createElement("img");
var positionX = window.innerWidth / 2;

ship.src = "assets/ship.png";
ship.style.scale = 0.1;

ship.style.position = "fixed";
ship.style.bottom = "0";
ship.style.left = positionX + "px";
ship.style.transform = "translateX(-50%)";

function linkButton() {
    var button_play = document.querySelectorAll('.button_play')[0];
    var button_settings = document.querySelectorAll('.button_settings')[0];

    button_play.addEventListener("click", function () {
        button_play.remove();
        button_settings.remove();
        body.appendChild(ship);
        is_in_game = true;
    });

    button_settings.addEventListener("click", function () {
        console.log("Open the settings");
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && is_in_game == true) {
        ship.remove();
        is_in_game = false;
        var buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        var bouton_settings = document.createElement("button");
        bouton_settings.textContent = "Settings";
        bouton_settings.className = "button_settings";
        var bouton_play = document.createElement("button");
        bouton_play.textContent = "Play";
        bouton_play.className = "button_play";

        buttonsDiv.appendChild(bouton_play);
        buttonsDiv.appendChild(bouton_settings);
        body.appendChild(buttonsDiv);

        linkButton();
    }
    if (event.key == "ArrowLeft" && is_in_game == true) {
        positionX -= 30;
        ship.style.left = positionX + "px";
    }
    if (event.key == "ArrowRight" && is_in_game == true) {
        positionX += 30;
        ship.style.left = positionX + "px";
    }
});

linkButton();