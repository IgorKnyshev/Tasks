var chart = {
  getTopArtists: function (api_key, limit, page) {
    loader.url += '?method=chart.gettopartists' + '&api_key=' + api_key;
    if (limit !== undefined) {
      loader.url += '&limit=' + limit;
    }
    if (page !== undefined) {
      loader.url += '&page=' + page;
    }

    loader.request.onreadystatechange = function () {
      if (loader.request.readyState === 4 && loader.request.status === 200) {
        var i = 0;
        var xmlDoc = loader.request.responseXML;
        var elements = xmlDoc.getElementsByTagName("name");
        for (i = 0; i < elements.length; i++) {
          console.log(elements[i].childNodes[0]);
        }
      }
    };
    loader.request.open('GET', loader.url);
    loader.request.send();
  }
};

chart.__proto__ = loader;

// chart.getTopArtists(loader.api_key, 20);
