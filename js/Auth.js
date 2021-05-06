var docId = document.getElementById;
var auth = firebase.auth();
// hello avacardo - Ella-May spakman 2021
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.


        var user = firebase.auth().currentUser;

        if(user != null){

            var email_id = user.email;
            var user_uid = user.uid;

        }

    } else {
        // User isn't singed in.

        // Code
    }
});

function resetPasswordClick() {
    window.alert('Soon!')
}

function registerClicked() { }

function register() {
    window.alert('Fucntion not ready yet.')
}

function loginClicked() { }

function login() {
    var emailTextField = docId('login_email_textField').value;
    var passwordTextField = docId('login_pass_textField').value;

    auth.signInWithEmailAndPassword(emailTextField, passwordTextField)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            var currentUser = user.email;
            window.alert(currentUser.email)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
}


function logout(){
    firebase.auth().signOut();
}