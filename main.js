function adduser(){
   
    var Player1_name= document.getElementById('player1_input').value
localStorage.setItem("player1_name",Player1_name)
var Player2_name= document.getElementById('player2_input').value
localStorage.setItem("player2_name",Player2_name)
window.location="login.html";
    
}