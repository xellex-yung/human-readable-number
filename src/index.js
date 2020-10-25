module.exports = function toReadable (number) {
  let num =[['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],[ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'],
  ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety'], ['hundred', 'thousand']];

  let res = '';
 
 
  if(number<10){
    for(let i = 0; i < (num[0].length); i++)
    {
      if (number == i)
      {
       res = num[0][i];
     
      }
    }
  }
  else if (number <= 19)
  {
   res = num[1][number-10];
  }
  else if (number < 100)
  {

    let  b = number%10;
    let a = (number-b)/10;
  
    if (b == 0)  {res = num[2][a-2]}
  else{
    res =  num[2][a-2]+' '+num[0][b];
  }
    
  }
  else if (number <= 999)
  {
    let  b = number%10;
      let a = ((number-b)/10)%10;
      let s = Math.floor(number/100);
   if(b== 0&& a ==0){ res = num[0][s]+' '+num[3][0] }
   else if(a == 1&&b!=0)
   {
    res = num[0][s]+' '+num[3][0]+ ' '+ num [1][b]; 
   }
   else if (b == 0)
   {
     if(a==1)
     {
       res = num[0][s]+' '+num[3][0]+ ' '+ num [1][0];
     }
    else {res = num[0][s]+' '+num[3][0]+ ' '+ num [2][a-2]};
   }
   else if (a == 0)
   {
     res =  num[0][s]+' '+num[3][0]+ ' '+num[0][b];
   }
   else res = num[0][s]+' '+num[3][0]+' '+ num [2][a-2]+' '+ num[0][b];
  }


  return res;

}
