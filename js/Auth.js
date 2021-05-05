var user = firebase.auth().currentUser;
var uid = user.uid;

// hello avacardo - Ella-May spakman 2021

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById('nav-user-div').style.display = "block";
        document.getElementById('nav-login-div').style.display = "none";

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if(user != null){

            var email_id = user.email;
            var user_uid = user.uid;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id + "\n User Uid : " + user_uid;

            document.getElementById('auth-login-button').innerHTML = "Open"
        }

    } else {
        // User isn't singed in.
        document.getElementById('register-user-div').style.display = "none";

        document.getElementById('nav-user-div').style.display = "none";
        document.getElementById('nav-login-div').style.display = "block";

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";


    }
});

function loginButtonClick() {
    document.getElementById('login_div').style.display = "block";
    document.getElementById('register-user-div').style.display = "none";
}

function registerButtonClick() {
    document.getElementById('register-user-div').style.display = "block";
    document.getElementById('login_div').style.display = "none";
}

function register() {
    // Auth values
    var userEmail = document.getElementById('register_email_field').value;
    var userPass = document.getElementById('register_password_field').value;

    // Database extra info.
    var userFullname
    var userName
    var userJob
    var userBio

    // User vars

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            location.reload()
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage + errorCode)
        })
}

function openUser() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;


}

function getUserInfo() {
    var docRef = db.collection("users").doc(uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log('Docuemnt data: ' + doc.data());
        } else {
            console.log('No such document!');
        }
    }).catch((error) => {
        console.log("Error fetching user document from API", error)
    })

}

function getPosts() {
    var postId
    var docRef = db.collection("posts").doc(postId);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Total Posts (From post Id) :" + doc.data())
        } else {
            console.log("No posts found")
        }
    }).catch((error) => {
        console.log("Error Fetching User Posts (via. PostId) Dev Error: API Call Error in function getPosts() ...", errors)
    })
}

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage + errorCode);

        // ...
    });

}

function logout(){
    firebase.auth().signOut();
}