function Album(api_key) {
  Loader.apply(this, arguments);
}

Album.prototype = Object.create(Loader.prototype);
Album.prototype.constructor = Album;

Album.prototype.getInfoHandler = function () {
  if (album.request.readyState === 4 && album.request.status === 200) {
    var xmlDoc = album.request.responseXML;
    console.log('Name: ' + xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue);
    console.log('Artist: ' + xmlDoc.getElementsByTagName("artist")[0].childNodes[0].nodeValue);
    console.log('Listeners: ' + xmlDoc.getElementsByTagName("listeners")[0].childNodes[0].nodeValue);
    console.log('Playcount: ' + xmlDoc.getElementsByTagName("playcount")[0].childNodes[0].nodeValue);
  }
};

Album.prototype.getInfo = function (api_key, artist, album, username, mbid, lang, autocorrect) {
  this.url += '?method=album.getinfo' + '&api_key=' + encodeURIComponent(api_key);
  if (artist !== undefined) {
    this.url += '&artist=' + encodeURIComponent(artist);
  }
  if (album !== undefined) {
    this.url += '&album=' + encodeURIComponent(album);
  }
  if (username !== undefined) {
    this.url += '&username=' + encodeURIComponent(username);
  }
  if (mbid !== undefined) {
    this.url += '&mbid=' + encodeURIComponent(mbid);
  }
  if (lang !== undefined) {
    this.url += '&lang=' + encodeURIComponent(lang);
  }
  if (autocorrect !== undefined) {
    this.url += '&autocorrect=' + encodeURIComponent(autocorrect);
  }
  this.load(this.url, this.getInfoHandler);
};

var album = new Album();
// album.getInfo(loader.api_key, 'Cher', 'Believe', 'awd');
