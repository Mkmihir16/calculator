let re=document.querySelector(".result")
    let calculation='';
   function myFunction(num){
    calculation+=num;
    console.log(calculation);
    re.innerHTML=calculation;
   }
    function myFunction1(){
        calculation=eval(calculation);
        console.log(calculation);
        re.innerHTML=calculation;
    }