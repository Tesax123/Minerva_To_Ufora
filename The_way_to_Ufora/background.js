
/**
 * Groetjes van Tessa aan Jeffrey
 * @author Tessa Ickx
 *
 **/

; (function () {
    'use strict';
    var host = "https://ufora.ugent.be/d2l/home";

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
             return {redirectUrl: host};
        },
        {
            urls: [
                "*://www.minerva.ugent.be/",
                "*://minerva.ugent.be/",
                "https://minerva.ugent.be/secure/index.php"
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );

})();