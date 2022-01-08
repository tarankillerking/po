//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAibUZpOzgLOdHDWo72JdDnNYdqadoxfWM",
      authDomain: "kwitter-3f0a8.firebaseapp.com",
      databaseURL: "https://kwitter-3f0a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-3f0a8",
      storageBucket: "kwitter-3f0a8.appspot.com",
      messagingSenderId: "225436328327",
      appId: "1:225436328327:web:41be34d2ffa3ba052fb322",
      measurementId: "G-92THPTZTWS"
        };
        
        // Initialize Firebase
         firebase.initializeApp(firebaseConfig);
         user_name=localStorage.getItem("username")
         room_name=localStorage.getItem("room_name")
         message=document.getElementById("message").value
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
name =message_data ['name']
message =message_data ['message']
like =message_data ['like']
name_with_tag="<h4>"+name+"<img src='tick.png'class='user_tick'>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function send() {
 message=document.getElementById("message").value
firebase.database().ref(room_name).push({
      name:user_name,
 message:message,
 like:0

})
document.getElementById("message").value=""
}
function updateLike(message_id){
      console.log("clickedonthelikebutton")
      button_id=message_id
      likes=document.getElementById(button_id).value
 updatedlikes=Number(likes)+1
 console.log(updatedlikes)
 firebase.database().ref(room_name).child(message_id).update({
      like:updatedlikes 
 })   
}
function logout() {
      window.location="index.html"
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
}