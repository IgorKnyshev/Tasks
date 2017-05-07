function Album(api_key) {
  Loader.apply(this, arguments);
}

Album.prototype = Object.create(Loader.prototype);
Album.prototype.constructor = Album;

Album.prototype.getInfo = function (api_key, artist, album, username, mbid, lang, autocorrect) {
    loader.url += '?method=album.getinfo' + '&api_key=' + api_key;
    if (artist !== undefined) {
      loader.url += '&artist=' + artist;
    }
    if (album !== undefined) {
      loader.url += '&album=' + album;
    }
    if (username !== undefined) {
      loader.url += '&username=' + username;
    }
    if (mbid !== undefined) {
      loader.url += '&mbid=' + mbid;
    }
    if (lang !== undefined) {
      loader.url += '&lang=' + lang;
    }
    if (autocorrect !== undefined) {
      loader.url += '&autocorrect=' + autocorrect;
    }
    loader.request.onreadystatechange = function () {
      if (loader.request.readyState === 4 && loader.request.status === 200) {
        var i = 0;
        var xmlDoc = loader.request.responseXML;
        console.log('Name: ' + xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue);
        console.log('Artist: ' + xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue);
        console.log('Listeners: ' + xmlDoc.getElementsByTagName("listeners")[0].childNodes[0].nodeValue);
        console.log('Playcount: ' + xmlDoc.getElementsByTagName("playcount")[0].childNodes[0].nodeValue);
      }
    };
    loader.request.open('GET', loader.url);
    loader.request.send();
};

var album = new Album();
// album.getInfo(loader.api_key, 'Cher', 'Believe', 'awd');
