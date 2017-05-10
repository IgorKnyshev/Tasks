function Chart(api_key) {
  Loader.apply(this, arguments);
}

Chart.prototype = Object.create(Loader.prototype);
Chart.prototype.constructor = Chart;

Chart.prototype.getTopArtistsHandler = function() {
  if (chart.request.readyState === 4 && chart.request.status === 200) {
    var xmlDoc = chart.request.responseXML;
    var elements = xmlDoc.getElementsByTagName("name");
    for (var i = 0; i < elements.length; i++) {
      console.log(elements[i].childNodes[0]);
    }
  }
};

Chart.prototype.getTopArtists = function (api_key, limit, page) {
  this.url += '?method=chart.gettopartists' + '&api_key=' + encodeURIComponent(api_key);
  if (limit !== undefined) {
    this.url += '&limit=' + encodeURIComponent(limit);
  }
  if (page !== undefined) {
    this.url += '&page=' + encodeURIComponent(page);
  }
  this.load(this.url, this.getTopArtistsHandler);
};

var chart = new Chart(loader.api_key);
chart.getTopArtists(loader.api_key, 20);
