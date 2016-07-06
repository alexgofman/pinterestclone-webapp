const OAuth = require('OAuth').OAuth;
const root_url='https://api.twitter.com'


module.exports = function (twitterKey, twitterSecret) {

    const oauth = new OAuth(            
      `${root_url}/oauth/request_token`,
      `${root_url}/oauth/access_token`,
        twitterKey,
        twitterSecret,
        '1.0A',
        null,
        'HMAC-SHA1');

    const getUser = function(userKey, userSecret, userId, done) {
      
      oauth.get(
        `${root_url}/1.1/statuses/user_timeline.json?user_id=${userId}`,
          userKey,
          userSecret,
          function (error, results, res){

            if(error){console.log(JSON.stringify(error))}
            results = JSON.parse(results)
            done(results);      
          });    
        }
    
    return {user_data: getUser}
}