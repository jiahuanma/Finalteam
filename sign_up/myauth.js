function handleSignUp() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    if(email.length < 4) {
        alert("Please enter a valid email");
        return;
    }
    if(password.length < 4) {
        alert("Please entera stronger password");
        return;
    }
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(){
        //success
        alert("User created");
        
    })
    .catch(function(error){
        //something went wrong
        alert(error.message);
    })
}
function handleSignIn(){
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                function() {
                    window.location.href="http://jiahuanma.com/sign_up/account.html";
                })
            .catch(
                function(error){
                    alert(error.message);
                }
            );
}
function handleSignOut() {
    firebase.auth().signOut()
        .then(
            function(){
                window.location.href="http://jiahuanma.com/sign_up/login.html";
            })
        .catch(
            function(error){
                alert(error.message);
            }
        );    
}

function handleFBLogin() {
    if(!firebase.auth().currentUser) {
            //allow FB login
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
                    .then(function(result){
                        var token = result.credential.accessToken;
                        var user = result.user;
                        alert(user.email);
                        window.location.href="http://jiahuanma.com/sign_up/account.html";
                    })
                    .catch(function(error){
                        alert(error.message);
                    });
    }
    else {
        //already signed in.
            handleSignOut();
    }
}

function handleTWLogin() {
    if(!firebase.auth().currentUser) {
            //allow FB login
            var provider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithPopup(provider)
                    .then(function(result){
                        var token = result.credential.accessToken;
                        var user = result.user;
                        alert(user.email);
                        window.location.href="http://jiahuanma.com/sign_up/account.html";
                    })
                    .catch(function(error){
                        alert(error.message);
                    });
    }
    else {
        //already signed in.
            handleSignOut();
    }
}

function handleGLLogin() {
    if(!firebase.auth().currentUser) {
            //allow FB login
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                    .then(function(result){
                        var token = result.credential.accessToken;
                        var user = result.user;
                        alert(user.email);
                        window.location.href="http://jiahuanma.com/sign_up/account.html";
                    })
                    .catch(function(error){
                        alert(error.message);
                    });
    }
    else {
        //already signed in.
            handleSignOut();
    }
}
