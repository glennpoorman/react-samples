const superagent = require('superagent');
const { makeQuery } = require('./utilities');
const { config : { github } } = require('./config');

// Redirect the client to the authorization server for user authorization.
//
exports.authorize = (req, res) => {

  const credentials = {
    client_id : github.credentials.clientId,
    redirect_uri : github.credentials.redirectUri
  };

  const urlStr = `${github.authorizeEndpoint}?${makeQuery(credentials)}`;
  res.redirect(urlStr);
};

// GET request sent by the authorization server, parse the authorization code from the
// incoming request body and POST a request to the authorization server to exchange that
// code for an access token and return the token as a cookie.
//
exports.sendToken = async (req, res) => {

  try
  {
    const { body : { access_token } } = await superagent.post(github.getTokenEndpoint)
      .type('form')
      .set('Accept', 'application/json')
      .send({
        client_id : github.credentials.clientId,
        client_secret : github.credentials.clientSecret,
        code : req.query.code
      });

    const { body : { id } } = await superagent.get(github.userIdEndpoint)
      .set('User-Agent', 'movie-quotes')
      .set('Authorization', `token ${access_token}`)
      .set('Accept', 'application/json');

    res.cookie('movie-quote-token', `${access_token}.${id}`).redirect('/');
  }
  catch (err)
  {
    res.status(500).json({ error : 'ERROR: getting access token' });
  }
};
