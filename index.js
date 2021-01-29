var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var finalNum=document.getElementById("Final num");
var totalSubs=document.getElementById("n");
var numSubs=0;
var total=0;
function inputField()
{
  for(var i=0;i<n;i++)
  {
    var input=document.getElementById(i);
    markInputs.removeChild(input); //To prevent creating extra fields
  }
  n=0;
  //create new fields
  for(var i=0;i<totalSubs.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=n;
    markInputs.appendChild(input);
    n=n+1;
  }
}
function calculate()
{
  for(var i=0;i<n;i++)
  {
    var texts=document.getElementById(i);
    total=total+parseFloat(texts.value);
  }
  x=parseFloat(total/n);
  var gpa;
  switch(parseInt((x/10))*10)
  {
    case 100:
    case 90:
      gpa='S';
      break;
    case 80:
      gpa='A';
      break;
    case 70:
      gpa='B';
      break;
    case 60:
      gpa='C';
      break;
    case 50:
      gpa='D';
      break;
    case 40:
      gpa='E';
      break;
    case 30:
      gpa='F';
      break;
    default:
      gpa='Error';
      break;
  }

  var final=document.createElement("P");
  var final1=document.createElement("Q");
  final.innerText=gpa;
  final1.innerText=x/10;
  finalMark.appendChild(final);
  finalNum.appendChild(final1);
  total=0;
}