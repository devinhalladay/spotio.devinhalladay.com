$(document).ready(function () {
  GetLatestReleaseInfo();
});


function GetLatestReleaseInfo() {
  $.getJSON("https://api.github.com/repos/devinhalladay/spotio/tags").done(function (json) {
    var release = json[0];
    var name = release.name;
    var downloadURL = release.zipball_url;
    $("#spotio-download-button").attr("href", "https://github.com/devinhalladay/spotio/releases/download/" + name + "/Spotify.zip");
    $('#latest-version').text(name);
  });
}
