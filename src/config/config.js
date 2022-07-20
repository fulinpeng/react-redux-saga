
(function (win, doc) {
    function fontSizeAuto(oriWidth) {
        return function () {
            var viewportWidth = doc.documentElement.clientWidth;
            viewportWidth > oriWidth && (viewportWidth = oriWidth);
            viewportWidth < 320 && (viewportWidth = 320);
            doc.documentElement.style.fontSize = viewportWidth / (oriWidth / 100) + "px";
        };
    }
    fontSizeAuto(640)();
    win.onresize = fontSizeAuto(640);
})(window, document);
