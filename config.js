var DBconfig = {
  apiKey: "AIzaSyB_3iQB7f0hm5ov_Pt3hNfkUSahw7u0Rb8",
  authDomain: "dolphin-aquatics.firebaseapp.com",
  databaseURL: "https://dolphin-aquatics.firebaseio.com",
  projectId: "dolphin-aquatics",
  storageBucket: "dolphin-aquatics.appspot.com",
  messagingSenderId: "654005837825",
  appId: "1:654005837825:web:4343d1c25238b122966000",
  measurementId: "G-2VV2J973M4"
};




var pathString = '';

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 firebase.initializeApp(DBconfig);
 var database = firebase.database();
function btnFetch(){
  console.log(document.getElementById("inputID").value);
  var id = document.getElementById("inputID").value;
  console.log(id.includes('CSE'));
  if(id.includes('CSE')){
    x = document.getElementById("alertt");
      x.style.display = "none";
    pathString = '/CSE/'+ id + '/name';
    
  }else if(id.includes('KEN')){
    x = document.getElementById("alertt");
      x.style.display = "none";
    pathString = '/KEN/'+ id + '/name';
  }else{
    alerting("Please Enter correct ID");
     
  }
 

  database.ref(pathString).once('value', function (snapshot) {
    
    if(snapshot.val() != null){
      x = document.getElementById("alertt");
      x.style.display = "none";
      document.getElementById("output").innerHTML = "Welcome " + snapshot.val();
    }else{
      alerting("Data Not Found. Please contact admin.");
    }
   
    
});
}

var x ;
function alerting(str) {
  document.getElementById("alertt").innerHTML = str;
  x = document.getElementById("alertt");
  x.style.display = "block";
  
    
  
} 
 
