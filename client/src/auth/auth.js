import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'joshuadwootonn.auth0.com',
    clientID: 'qKn5cbocfFqJCmnzE2KrkxqpnUaPQeJL',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://joshuadwootonn.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}