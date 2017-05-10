function Artist(api_key) {
  Loader.apply(this, arguments);
}

Artist.prototype = Object.create(Loader.prototype);
Artist.prototype.constructor = Artist;

Artist.prototype.searchHandler = function () {
  if (artist.request.readyState === 4 && artist.request.status === 200) {
    var textDoc = JSON.parse(artist.request.responseText);
    for (var i = 0; i < textDoc.results.artistmatches.artist.length ;i++) {
      console.log("Artist: " + textDoc.results.artistmatches.artist[i].name);
      console.log("Listeners: = " + textDoc.results.artistmatches.artist[i].listeners);
    }
  }
};

Artist.prototype.getInfoHandler = function () {
  if (artist.request.readyState === 4 && artist.request.status === 200) {
    var xmlDoc = artist.request.responseXML;
    var elements = xmlDoc.getElementsByTagName("name");
    console.log('Artist name: ' + elements[0].childNodes[0].nodeValue);
    elements = xmlDoc.getElementsByTagName("listeners");
    console.log('Listeners: ' + elements[0].childNodes[0].nodeValue);
    elements = xmlDoc.getElementsByTagName("playcount");
    console.log('Playcount = ' + elements[0].childNodes[0].nodeValue);
    elements = xmlDoc.getElementsByTagName("summary");
    console.log('Summary: ' + elements[0].childNodes[0].nodeValue);
  }
};

Artist.prototype.search = function(api_key, artist, limit, page) {
  this.url += '?method=artist.search' + '&format=json' + '&api_key=' + encodeURIComponent(api_key) + '&artist=' + encodeURIComponent(artist);
  if (limit !== undefined) {
    this.url += '&limit=' + encodeURIComponent(limit);
  }
  if (page !== undefined) {
    this.url += '&page=' + encodeURIComponent(page);
  }
  this.load(this.url, this.searchHandler);
};

Artist.prototype.getInfo = function(api_key, artist, username, mbid, lang, autocorrect) {
  this.url +=  '?method=artist.getinfo' + '&api_key=' + encodeURIComponent(api_key) + '&artist=' + encodeURIComponent(artist);
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

var artist = new Artist();

// artist.search(loader.api_key, 'Drake');
// artist.getInfo(loader.api_key, 'Cher', '', '', 'bel');
