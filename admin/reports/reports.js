var db = firebase.firestore()
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var user = firebase.auth().currentUser;
        var user_uid = user.uid;
        var eeQlsm = "gmwGDApCeWclxx1jiBpKCq6crFp2";
        // User is signed in.

        if (user_uid == eeQlsm) {
            // code
            console.log(user_uid)
            console.log("hello zachludwick")
            getReports()
        } else {
            console.log("Haha nice try! you're not zachludwick")
            document.location.href = '../../index.html'
        }
    } else {
        // User is not signed in.
        console.log("User not logged in.")
        document.location.href = '../../index.html'
    }
});


function reportsPresent() {
    document.getElementById('no-reports').style.display = "none";
    document.getElementById('reports-cell-div').style.display = "block";
}

function noReports() {
    document.getElementById('no-reports').style.display = "block";
    document.getElementById('reports-cell-div').style.display = "none";
}

class Post {
    constructor(postCaption, postId, postImageUrl, postOwnerUid, postOwnerUsername) {
        this.postCaption = postCaption;
        this.postId = postId;
        this.postImageUrl = postImageUrl;
        this.postOwnerUid = postOwnerUid;
        this.postOwnerUsername = postOwnerUsername;
    }
    toString() {
        return this.postCaption + ' , ' +  this.postId + ' , '+ this.postImageUrl + ' , ' +  this.postOwnerUid + ' , ' + this.postOwnerUsername;
    }
    setPostCaption() {
        return document.getElementById('post-caption').innerHTML = this.postCaption
    }
    setPostId() {
        return document.getElementById('post-id').innerHTML = this.postId
    }
    setPostImage() {
        var imageUrl = this.postImageUrl + '.png'
        document.getElementById('post-image-cell').src = imageUrl
    }


    setElements() {
        this.setPostCaption();
        this.setPostId();
        this.setPostImage();
    }
}

// Firestore data converter
var postConverter = {
    toFirestore: function (post) {
        return {
            postCaption: post.postCaption,
            postId: post.postId,
            postImageUrl: post.postImageUrl,
            postOwnerUid: post.postOwnerUid,
            postOwnerUsername: post.postOwnerUsername
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return new Post(data.postCaption, data.postId, data.postImageUrl, data.postOwnerUid, data.postOwnerUsername);
    }
}

function getReports() {

    db.collection("reports")
        .withConverter(postConverter)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var post = doc.data()
                console.log(post.toString());
                post.setElements();
            })
    })
        .catch((error) => {
            console.log("Error: ", error)
        })
}

function closeReport() {

}

