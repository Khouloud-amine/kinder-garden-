
var lundi=[
 { start:8,
    ennd:10,
    finisih:false,
    name:'exercice correction'
    
 }




]
function createActivite(start,end,name){
    return {
        start:start,
        end:end,
        name:name,
        finish:false
    }
}
var lundi1=createActivite(8,10,'Jeux')
var lundi2=createActivite(10,12,'Danse')
var lundi3=createActivite(12,14,'Pause déjeuner')

var lundi4=createActivite(14,16,'Musique')

var mardi1=createActivite(8,10,'Jeux')
var mardi2=createActivite(10,12,'Danse')
var mardi3=createActivite(12,14,'Pause déjeuner')
var mercredi1=createActivite(8,10,'Peinture')
var mercredi2=createActivite(10,12,'Musique')
var mercredi3=createActivite(12,14,'Pause déjeuner')
var mercredi4=createActivite(14,16,'Club du chant')
var jeudi1=createActivite(8,10,'Peinture')
var jeudi2=createActivite(10,12,'Musique')
var jeudi3=createActivite(12,14,'Pause déjeuner')
var jeudi4=createActivite(14,16,'Club du chant')
var vendredi1=createActivite(8,10,'Jeux')
var vendredi2=createActivite(10,12,'Danse')
var vendredi3=createActivite(12,14,'Pause déjeuner')
var vendredi4 =createActivite(14,16,'Musique')
var samedi1=createActivite(8,10,'Jeux')
var samedi2=createActivite(10,12,'Jardinage')




console.log('hi')
  var lundi=[lundi1,lundi2,lundi3,lundi4]
  var mardi=[mardi1,mardi2,mardi3]
  var mercredi=[mercredi1,mercredi2,mercredi3,mercredi4]
  var jeudi=[jeudi1,jeudi2,jeudi3,jeudi4]
  var vendredi=[vendredi1,vendredi2,vendredi3,vendredi4]
  var samedi=[samedi1,samedi2]

 function filterDays(arr,start,end){
     return filter(arr,function(n){
        return  n.start===start&&n.end===end
    })
 }




  

 function loopArr(arr,c){
  for (var i=0;i<arr.length;i++){
    $(c).append(`<div class="task">${arr[i].name}</div>`)
  }
 }

  $( document ).ready(function() {

    var newArr=[].concat(filterDays(lundi,8,10),filterDays(mardi,8,10),filterDays(mercredi,8,10),filterDays(jeudi,8,10),filterDays(vendredi,8,10),filterDays(samedi,8,10))
   loopArr(newArr,".partday1")
   var newArr1=[].concat(filterDays(lundi,10,12),filterDays(mardi,10,12),filterDays(mercredi,10,12),filterDays(jeudi,10,12),filterDays(vendredi,10,12),filterDays(samedi,10,12))
   loopArr(newArr1,".partday2")
   var newArr2=[].concat(filterDays(lundi,12,14),filterDays(mardi,12,14),filterDays(mercredi,12,14),filterDays(jeudi,12,14),filterDays(vendredi,12,14),filterDays(samedi,12,14))
   loopArr(newArr2,".partday3")
   var newArr3=[].concat(filterDays(lundi,14,16),filterDays(mardi,14,16),filterDays(mercredi,14,16),filterDays(jeudi,14,16),filterDays(vendredi,14,16),filterDays(samedi,14,16))
   loopArr(newArr3,".partday4")
   var newArr4=[].concat(filterDays(lundi,16,18),filterDays(mardi,16,18),filterDays(mercredi,16,18),filterDays(jeudi,16,18),filterDays(vendredi,16,18),filterDays(samedi,16,18))
   loopArr(newArr4,".partday5")
   

    console.log(newArr)
});

function newDoc(){
    var username=document.getElementById("username").value ;
    var password=document.getElementById("password").value ;

         if(username == "khouloud" && password == "amine"){
         /* alert("Login successfully to espace parent"); */
           /*window.location.href="index.html"*/
            return window.location.assign("https://www.w3schools.com")
    
         }
           else {
            alert("plz try again")
           }
           return false;
        }
       
    
    
 
    function each(coll, func) {
        if (Array.isArray(coll)) {
          for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
          }
        } else {
          for (var key in coll) {
            func(coll[key], key);
          }
        }
      }
      
      function map(coll, func) {
        var acc = [];
        if (!Array.isArray(coll)) {
          acc = {};
        }
        each(coll, function (element, key) {
          acc[key] = func(element, key);
        });
        return acc;
      }
      
      function filter(array, predicate) {
        var acc = [];
        each(array, function (element, index) {
          // notice we added the index here
          if (predicate(element, index)) {
            // notice we added the index here
            acc.push(element);
          }
        });
        return acc;
      }
      
      function reduce(array, f, acc) {
        if (acc === undefined) {
          acc = array[0];
          array = array.slice(1);
        }
        each(array, function (element, i) {
          acc = f(acc, element, i);
        });
        return acc;
      }
      