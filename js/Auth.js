
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

function resetPasswordSubmit() {}

function registerClicked() {
    //document.getElementById('log-in-sec').style.display = "none";
    //document.getElementById('reg-user-sec').style.display = "block";
    window.alert('Registration is not quite ready just yet.')
}

function register() {
    window.alert('Fucntion not ready yet.')
}

function loginClicked() {
    document.getElementById('reset-pw-div').style.display = "none";
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