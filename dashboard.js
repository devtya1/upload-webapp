const firebaseConfig = {
    apiKey: "AIzaSyBCeON2gwpwGx__xkvvzBgK0r8LiMyFym4",
    authDomain: "whoppers-29bd3.firebaseapp.com",
    projectId: "whoppers-29bd3",
    databaseURL: "https://whoppers-29bd3-default-rtdb.firebaseio.com/",
    storageBucket: "whoppers-29bd3.appspot.com",
    messagingSenderId: "735564101085",
    appId: "1:735564101085:web:498bd7002e4e659bf1f234"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function load(){
    var username = localStorage.getItem("whoppers_username");
    document.getElementById("name").innerHTML = "Username: " + username;
    firebase.database().ref("/" + username).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            document.getElementById("prj").innerHTML = "Projects: " + snapshot.val().projects;
        })
    })
}

function change_del(){
    window.location = "delete.html";
}

function change_upl(){
    window.location = "upload.html";
}

function change_view(){
    window.location = "view.html";
}

function change_view_all(){
    window.location = "view_all.html";
}