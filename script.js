var is_in_game = false;
var body = document.body;

function linkButton() {
    var button_play = document.querySelectorAll('.button_play')[0];
    var button_settings = document.querySelectorAll('.button_settings')[0];

    button_play.addEventListener("click", function () {
        button_play.remove();
        button_settings.remove();
        is_in_game = true;
    });

    button_settings.addEventListener("click", function () {
        console.log("Open the settings");
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && is_in_game == true) {
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
});

linkButton();