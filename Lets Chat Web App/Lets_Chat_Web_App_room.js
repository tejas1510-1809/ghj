
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDInsKksKlma18oZ7iR4QmMr4Undcze3nE",
  authDomain: "lets-chat-web-app-4a5f8.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-4a5f8-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-4a5f8",
  storageBucket: "lets-chat-web-app-4a5f8.appspot.com",
  messagingSenderId: "435959491266",
  appId: "1:435959491266:web:e3565b6d4656677e2fa95b",
  measurementId: "G-FY3GZPQXCN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function AddRoom() {
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
       
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}