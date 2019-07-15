function sendMessage(){ 
   var message = document.getElementById("message");
   var phone = document.getElementById("phone");;
   
   
   
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "POST", `https://cors-anywhere.herokuapp.com/http://034fd1ac.ngrok.io/sendmessage?tel=55${phone.value}&message=${message.value}`, false ); // false for synchronous request
   xmlHttp.send();
   alert(`Mensagem Enviada (A mensagem pode levar até 15 segundos para ser entregue ^^)`)
}
