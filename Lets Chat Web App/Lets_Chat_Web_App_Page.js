//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAvJrhXqevJIlLnuWvFcXP3lLGmWrV9LHc",
      authDomain: "kwitter-bd0ba.firebaseapp.com",
      databaseURL: "https://kwitter-bd0ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd0ba",
      storageBucket: "kwitter-bd0ba.appspot.com",
      messagingSenderId: "145984367369",
      appId: "1:145984367369:web:4ebd2bde90fcec31cc41d8"
    };
    
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getitem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {

      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            
      });
      document.getElementById("msg").value="";
      
}