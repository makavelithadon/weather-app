"use strict";
exports.__esModule = true;
var react_1 = require("react");
var hooks_1 = require("./hooks");
var API_KEY = "dd7458bb7e64a45ac95fe85ea992d746";
function Weather(_a) {
    var position = _a.position;
    var weathers = hooks_1.useWheather("https://api.openweathermap.org/data/2.5/onecall?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&exclude={part}&appid=" + API_KEY);
    console.log({ weathers: weathers });
    return react_1["default"].createElement("div", null, "Test");
}
exports["default"] = Weather;
