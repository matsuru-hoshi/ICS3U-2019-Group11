<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!--Cognito JavaScript-->
    <script src="js/amazon-cognito-identity.min.js"></script>
    <script src="js/config.js"></script>
  </head>

  <body>
  <div class="container">
    <div>
      <h1>Sign Out</h1>
        <div id="signout">
          <p></p>
        </div>
    </div>

    <br>
    <div id='home'>
      <p>
      <a href='./index.html'>Home</a>
      </p>
    </div>
  </div>

  <script>
    var data = {
      UserPoolId : _config.cognito.userPoolId,
      ClientId : _config.cognito.clientId
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
    var cognitoUser = userPool.getCurrentUser();

    window.onload = function(){
      if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
              alert(err);
              return;
            }
            console.log('session validity: ' + session.isValid());

            // sign out
            cognitoUser.signOut();
            console.log("Signed-out");
            document.getElementById("signout").innerHTML = "Successfully signed-out";
        });
      } else {
        console.log("Already signed-out")
        document.getElementById("signout").innerHTML = "Already signed-out";
        
      }
    }
  </script>

  </body>
</html>