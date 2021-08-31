let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:4000';
    break;

  case 'fab-pins-and-patches-client.herokuapp.com':
    APIURL = 'https://fab-pins-and-patches-server.herokuapp.com'
}

export default APIURL