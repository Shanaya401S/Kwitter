function addUser(){
    username=document.getElementById("user_name").value
    localStorage.setItem("user_name".username);
    window.location="kwitter.room.html";
}
function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "adding room name"
    });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter.room.js"  
}
function getData()
{
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHtml
    Room_name= childKey;
    console.log("Room Name -" +Room_names);
    row="<div class='room_name' id=" +Room_names+"onclick='redirecToRoomName(this.id)'>#"+Room_names +"</div><hr>";
    document.getElementById("output").innerHtml+= row;
    });}
    getData();
    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location="kwitter.room.html";
    }
