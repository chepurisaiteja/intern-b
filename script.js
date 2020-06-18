var flag=0;
function func()
{
var x=document.getElementById("name").value;
var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;

if((x.length!=0)&&(!(x.match(Exp))))
  alert("only alphanumeric are allowed")
else if(x.length==0)
  flag=1;

func2();
}
function func2()
{
    var x=document.getElementById("fname").value;
    var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    if((x.length!=0)&&(!(x.match(Exp))))
 alert("only alphanumeric are allowed")
  else if(x.length==0)
  flag=1;
  func3()

}
function func3()
{
    var x=document.getElementById("lname").value;
    var Exp = /^([0-9]|[a-z])+([0-9a-z]+)$/i;
    if((x.length!=0)&&(!(x.match(Exp))))
 alert("only alphanumeric are allowed")
  else if(x.length==0)
   flag=1;

  func4();
    
}
function func4()
{
    var x=document.getElementById("mail").value;
    var Exp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w {2, 3})+$/;
    if((x.length!=0)&&(!(x.match(Exp))))
  alert("enter valid email")
  else if(x.length==0)
  flag=1
  func6();
}
function func5()
{
  for(i=0;i<4;i++)
  {
    document.getElementsByTagName(input)[i].innerHTML="";
  }
}
function func6()
{
  if(flag==1)
  alert("all fileds are mandatory")

}
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
$('#file').on('change', function() { 

  const size = 
  (this.files[0].size / 1024 / 1024).toFixed(2); 

  if (size > 1) { 
    alert("File should not be greater than 1MB"); 
  } 
}); 