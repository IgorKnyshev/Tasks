function Chart(api_key) {
  Loader.apply(this, arguments);
}

Chart.prototype = Object.create(Loader.prototype);
Chart.prototype.constructor = Chart;

Chart.prototype.getTopArtistsHandler = function() {
  loader.request.onreadystatechange = function() {
    if (loader.request.readyState === 4 && loader.request.status === 200) {
      var i = 0;
      var xmlDoc = loader.request.responseXML;
      var elements = xmlDoc.getElementsByTagName("name");
      for (i = 0; i < elements.length; i++) {
        console.log(elements[i].childNodes[0]);
      }
    }
  }
};

Chart.prototype.getTopArtists = function (api_key, limit, page) {
    loader.url += '?method=chart.gettopartists' + '&api_key=' + encodeURIComponent(api_key);
    if (limit !== undefined) {
      loader.url += '&limit=' + encodeURIComponent(limit);
    }
    if (page !== undefined) {
      loader.url += '&page=' + encodeURIComponent(page);
    }
    loader.load(Chart.prototype.getTopArtistsHandler());
};


var chart = new Chart();
// chart.getTopArtists(loader.api_key, 20);
