function Artist(api_key) {
  Loader.apply(this, arguments);
}

Artist.prototype = Object.create(Loader.prototype);
Artist.prototype.constructor = Artist;

Artist.prototype.searchHandler = function () {
  loader.request.onreadystatechange = function () {
    if (loader.request.readyState === 4 && loader.request.status === 200) {
      //request.responseXML always NULL, in spite of request.responseText return text
      console.log(loader.request.responseXML);
      console.log(loader.request.responseText);
    }
  }
};

Artist.prototype.getInfoHandler = function () {
  loader.request.onreadystatechange = function () {
    if (loader.request.readyState === 4 && loader.request.status === 200) {
      var i = 0;
      var xmlDoc = loader.request.responseXML;
      var elements = xmlDoc.getElementsByTagName("name");
      console.log('Artist name: ' + elements[0].childNodes[0].nodeValue);
      elements = xmlDoc.getElementsByTagName("listeners");
      console.log('Listeners: ' + elements[0].childNodes[0].nodeValue);
      elements = xmlDoc.getElementsByTagName("playcount");
      console.log('Playcount = ' + elements[0].childNodes[0].nodeValue);
      elements = xmlDoc.getElementsByTagName("summary");
      console.log('Summary: ' + elements[0].childNodes[0].nodeValue);
    }
  }
};


Artist.prototype.search = function(api_key, artist, limit, page) {
    loader.url += '?method=artist.search' + '&api_key=' + encodeURIComponent(api_key) + '&artist=' + encodeURIComponent(artist);
    if (limit !== undefined) {
      loader.url += '&limit=' + encodeURIComponent(limit);
    }
    if (page !== undefined) {
      loader.url += '&page=' + encodeURIComponent(page);
    }
    loader.load(Artist.prototype.searchHandler());
};

Artist.prototype.getInfo = function(api_key, artist, username, mbid, lang, autocorrect) {
    loader.url +=  '?method=artist.getinfo' + '&api_key=' + encodeURIComponent(api_key) + '&artist=' + encodeURIComponent(artist);
    if (username !== undefined) {
      loader.url += '&username=' + encodeURIComponent(username);
    }
    if (mbid !== undefined) {
      loader.url += '&mbid=' + encodeURIComponent(mbid);
    }
    if (lang !== undefined) {
      loader.url += '&lang=' + encodeURIComponent(lang);
    }
    if (autocorrect !== undefined) {
      loader.url += '&autocorrect=' + encodeURIComponent(autocorrect);
    }
    loader.load(Artist.prototype.getInfoHandler());
};

var artist = new Artist();

// artist.search(loader.api_key, 'Drake');
artist.getInfo(loader.api_key, 'Cher', '', '', 'bel');
