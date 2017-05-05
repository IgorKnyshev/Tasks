function Loader() {
  this.url = 'http://ws.audioscrobbler.com/2.0/';
  this.api_key = 'c07aa2b1a26cf8a40d012e048bd63cea';
  this.request = new XMLHttpRequest();
}

var loader = new Loader();
