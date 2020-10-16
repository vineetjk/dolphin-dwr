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


var x , y ;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy+'-'+mm+'-'+dd;
var dayid = dd+mm+yyyy;





var pathString = '';

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 firebase.initializeApp(DBconfig);
 var database = firebase.database();

 var btn = document.getElementById("fetch");

function btnFetch(){
  var dob = document.getElementById("inputDOB").value;
  console.log(document.getElementById("inputID").value);
  var id = document.getElementById("inputID").value;
  console.log(id.includes('CSE'));
  if(id.includes('CSE')){
    x = document.getElementById("alertt");
      x.style.display = "none";
     
    pathString = '/CSE/'+ id ;
    
  }else if(id.includes('KEN')){
    x = document.getElementById("alertt");
      x.style.display = "none";
      
    pathString = '/KEN/'+ id ;
  }else if(id.includes('STF')){
    x = document.getElementById("alertt");
      x.style.display = "none";
      
    pathString = '/STF/'+ id ;
  }else{
    alerting("Please Enter correct ID");
     
  }
 

  database.ref(pathString).once('value', function (snapshot) {
    
    if(snapshot.val() != null && snapshot.val()['dob']==dob){
      x = document.getElementById("alertt");
      x.style.display = "none";
      
      document.getElementById("output").innerHTML = "Welcome " + "<b>"+ snapshot.val()['name']+ "<b>";
      document.getElementById("name").value = snapshot.val()['name'];
      document.getElementById("memid").value = id;
      document.getElementById("uid").value = dayid +'_'+id;
      document.getElementById("date").value = today;

      y = document.getElementById("main-form");
      y.style.display = "block";
    }else{
      alerting("Data Not Found. Please contact admin.");
    }
   
    
});
}


function alerting(str) {
  document.getElementById("alertt").innerHTML = str;
  x = document.getElementById("alertt");
  x.style.display = "block";
  document.getElementById("output").innerHTML = "";
  y = document.getElementById("main-form");
      y.style.display = "none";
  
    
  
} 

var txt = "";
function getSymtoms() {
  var symts = document.forms[0];
  
  var i;
  for (i = 0; i < symts.length; i++) {
      if (symts[i].checked) {
          txt = txt + symts[i].value + ", ";
      }
  }
  console.log(txt);
  document.getElementById("symtoms").value = txt;
  
}

var submitted = false;

function finalSubmit(){
  console.log('in final submit');
  getSymtoms();
  var unwell;
  
  if (document.getElementById('option1').checked) {
    unwell = document.getElementById('option1').value;
  }else if (document.getElementById('option2').checked) {
    unwell = document.getElementById('option2').value;
  }else if (document.getElementById('option3').checked) {
    unwell = document.getElementById('option3').value;
  }
  document.getElementById("isunwell").value = unwell;

  if(txt.length==0){
    alerting("Incomplete form")
  }else{
    submitted = true;
    document.getElementById('hidden_iframe').onload = function(){
      if(submitted) {window.location='thankyou.html';}
    
    }
    document.getElementById('submitbt').click();
  }
  

}




