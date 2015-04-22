var HumanJavaScript = function () {
    var url = "http://read.humanjavascript.com/",
        author = "@HenrikJoreteg";

    var one = {
        number: 1,
        title: "Foreword by Jan Lehnardt",
        quotes: [
            "Google Maps was the Beatles coming to America moment for the web.",
            "Sure, we have algorithms and data structures as the foundations of modern teaching and yes, they are part of everyday work, but programming and building products is just so much more.",
        ],
        namedrops: [
            "37signals",
            "&yet"
        ],
        tools: [
            "hood.ie"
        ],
        notes: [
            "37signals sparked a conversation:",
            "- before: native desktop apps vs. web apps",
            "- now: web apps vs. native mobile apps"
        ]
    };

    var two = {
        number: 2,
        title: "Introduction",
        quotes: [
            "Servers are for data, clients are for presentation.",
            "The way you solve complex problems is by not solving the complex problems. Instead, you break them down into smaller, simpler, solvable problems.",
            "jQuery is not an application framework. It's an abstraction layer and toolkit for working with the DOM.",
        ],
        namedrops: [
        ],
        tools: [
        ],
        notes: [
            "code for PEOPLE",
            "web apps = API & many clients",
                "- API defines service, connects to other users, ties in whole experience",
                "- clients provide best *experience* for various envs and users",
            "HTML5 wihtout bowing to crappy old browsers",
            "app:",
                "- rendered entirely on client",
                "- loaded once, never another full page reload",
                "- maintains state that is cached, separate from server",
                "- REALTIME, living documents",
            "latency = speed of delivery ?",
            "STATE: worry about staleness, caching, conflicts... distributed system",
            "complex problems: distributed systems, latency compensation, state duplication",
        ]
    };


    // 2. Intro

    // 3. Client or server? Go big or go home.

    return {
        url: url,
        author: author,
        chapters: [null, one, two],
        print: function (list) {
            for (var i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        }
    };
}();