



export const registerSettings = function () {

    game.settings.register("always-centred", "mode", {
        name: "Mode:",
        hint:"Disabled: Module off (default) | Player Characters: all player owned tokens | Selected Token: only the selected token.",
        scope: "client",
        config: true,
        default: "disabled",
        type: String,
        choices: {disabled: "Disabled", pcs: "Player Characters", selectedtoken: "Selected Token"},
    });

    game.settings.register("always-centred", "autozoom", {
        name: "Auto Zoom",
        hint:"Adjust zoom as well as position",
        scope: "client",
        config: true,
        default: true,
        type: Boolean
    });

    game.settings.register("always-centred", "paddingsq", {
        name: "Padding (squares)",
        hint:"Padding added to view area in all directions",
        scope: "client",
        config: true,
        default: 12,
        type: Number
    });

    game.settings.register("always-centred", "paddingper", {
        name: "Padding (%)",
        hint:"Percentage increase of view area",
        scope: "client",
        config: true,
        default: 33,
        type: Number
    });

    game.settings.register("always-centred", "maxzoom", {
        name: "Max zoom level",
        hint:"",
        scope: "client",
        config: true,
        default: 1,
        type: Number
    });

    game.settings.register("always-centred", "updatespeed", {
        name: "Camera animation speed",
        hint:"",
        scope: "client",
        config: true,
        default: 500,
        type: Number
    });
};