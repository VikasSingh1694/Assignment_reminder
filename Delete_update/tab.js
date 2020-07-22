  

  



  var root=firebase.database().ref().child('messages'); 
  
   
  root.on("child_added", snap=>{

   var key1=snap.key;
  var name=snap.child("name").val();
  var email=snap.child("email").val();
  var phone_number= snap.child("phone").val();



  $("#table_body").append("<tr><td>"+name+"</td><td>"+email+
    "</td><td>"+phone_number+"</td><td><button onclick=dlt("+ "'" +  key1 + "'"+
   ")>Remove</button></td><td><button on Click= upd("+ "'" +  key1 + "'"+
   ")>Click me</button></td></tr>");

}); 

   

function dlt(test){

    var adaRef = firebase.database().ref('messages/'+ test);
adaRef.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  
}
function upd(test){



}