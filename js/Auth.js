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

function resetPasswordClick() { window.alert('Soon!') }

function registerClicked() { window.alert('Soon!') }

function register() {
    window.alert('Fucntion not ready yet.')
}

function loginClicked() { }

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