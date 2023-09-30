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

function login() {
    document.getElementById("lgn_btn").style.display = "none";

    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    firebase.database().ref("/" + username).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            if(password == childSnapshot.val()){
                if(remember.checked == 1){
                console.log("Username found!");
                localStorage.setItem("whoppers", "true");
                localStorage.setItem("whoppers_username", username);
                window.location = "dashboard.html";
                }
                else{
                console.log("Username found!");
                window.location = "dashboard.html";
                }
            }
            else{
                console.log("Error!");
                document.getElementById("lgn_btn").style.display = "block";
            }
        })
    })
}

function check(){
    if(localStorage.getItem("whoppers") == "true"){
        window.location = "dashboard.html";
    }
}