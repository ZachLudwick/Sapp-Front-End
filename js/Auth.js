// Error codes.
var errInvalidEmail = "auth/invalid-email";
var errUserNotFound = "auth/user-not-found";

// hello avacardo - Ella-May spakman 2021
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.


        var user = firebase.auth().currentUser;

        if(user != null){

            var email_id = user.email;
            var user_uid = user.uid;
            document.getElementById('log-in-sec').style.display = "none";
            document.getElementById('reset-pw-div').style.display = "none";
            document.getElementById('reg-user-sec').style.display = "none";
        }

    } else {
        // User isn't singed in.

        document.getElementById('log-in-sec').style.display = "block";
        document.getElementById('reset-pw-div').style.display = "none";


    }
});

function resetPasswordClick() {
    document.getElementById('log-in-sec').style.display = "none";
    document.getElementById('reset-pw-div').style.display = "block";
}

function resetPasswordSubmit() {
    var auth = firebase.auth();
    var emailAddress = document.getElementById('forgot_email_textField').value;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        // Email Sent.
        console.log('Succsess. Email sent to ' + emailAddress)
        document.getElementById('reset-pw-error-span').style.display = "none";
        document.getElementById('reset-pw-success-span').style.display = "block";
    })
        .catch(function (error) {
        // Handle errors.
        console.log('Yeah Something is wrong here.')
        var errorMessage = error.message;
        var errorCode = error.code;
        console.log('ERROR AT: ' + errorCode);
        document.getElementById('reset-pw-error-span').style.display = "none";

        if (errorCode == errInvalidEmail) {
            document.getElementById('reset-pw-error-span').style.display = "block";
            document.getElementById('reset-pw-error-span').innerHTML = "Incorrect email format.";
        }

        else if (errorCode == errUserNotFound) {
            document.getElementById('reset-pw-error-span').style.display = "block";
            document.getElementById('reset-pw-error-span').innerHTML = "User not found.";
        }

    });
}

function registerClicked() {
    document.getElementById('log-in-sec').style.display = "none";
    document.getElementById('reg-user-sec').style.display = "block";
}

function nextPageRegistration() {
    if (document.getElementById('register_password_field').value < 6) {
        window.alert("Yeah nah this ain't happenin")
    } else {
        window.alert("BRO UR GOOD!")
    }
}

function register() {

}

function loginClicked() {
    document.getElementById('reset-pw-div').style.display = "none";
    document.getElementById('reg-user-sec').style.display = "none";
    document.getElementById('log-in-sec').style.display = "block";
}

function login() {
    var email = document.getElementById('login_email_textField').value;
    var password = document.getElementById('login_pass_textField').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            window.alert("logged in")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}


function logout(){
    firebase.auth().signOut();
}