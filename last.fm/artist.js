function Artist() {
  this.search = function(api_key, artist, limit, page) {
    loader.url += '?method=artist.search' + '&api_key=' + api_key + '&artist=' + artist;
    if (limit !== undefined) {
      loader.url += '&limit=' + limit;
    }
    if (page !== undefined) {
      loader.url += '&page=' + page;
    }
    loader.request.onreadystatechange = function () {
      if (loader.request.readyState === 4 && loader.request.status === 200) {
        //request.responseXML always NULL, in spite of request.responseText return text
        console.log(loader.request.responseXML);
        // var i = 0;
        // var xmlDoc = request.responseXML;
        // var elements = xmlDoc.getElementsByTagName("name");
        // for (i = 0; i < elements.length; i++) {
        //   console.log(elements[i].childNodes[0].nodeValue);
        // }
      }
    };
    loader.request.open('GET', loader.url);
    loader.request.send();
  }

  this.getInfo = function(api_key, artist, username, mbid, lang, autocorrect) {
    loader.url +=  '?method=artist.getinfo' + '&api_key=' + api_key + '&artist=' + artist;
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
    loader.request.open('GET', loader.url);
    loader.request.send();
  }
}

var artist = new Artist();
artist.prototype = loader;

// artist.search(loader.api_key, 'cher');
artist.getInfo(loader.api_key, 'Cher', '', '', 'bel');
