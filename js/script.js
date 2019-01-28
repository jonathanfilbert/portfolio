var accessToken = "2fba891d9d9c3b334f4335b23dc69adfa2f9ac069a78fa7cbfcf9ab52b87076e";

// Get your profile information and display it in the DOM
jribbble.user({ token: accessToken }, function (userObj) {
    var html = [
        '<img class="avatar" src="' + userObj.avatar_url + '">',
        '<div class="content-container">',
        '<h2>' + userObj.name + '</h2>',
        '<p>' + userObj.bio + '</p>',
        '</div>'
    ];
    document.getElementById("profile").innerHTML = html.join("");
});

// Get a list of your shots and display them in the DOM.
jribbble.shots({ token: accessToken, per_page: 80 }, function (shotsArray) {
    document.querySelector(".shots-container").innerHTML = shotsArray.reduce(function (html, shot) {
        return html + '<a class="shot-item" href="' + shot.html_url + '" target="_blank"><img class="lazyload" data-src="' + shot.images.hidpi + '"></a>';
    }, "");
});
