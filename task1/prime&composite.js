function PrimeComposite(){
  var i;
  var d;
  var half;
  for (i=1;i<=100;i++){
  half=i/2|0;

    
    if ((i==1)||(i==2)||(i==3)||(i==5))//числа 1,2,3 простые
    {
    console.log(i+" - prime");
    }
    else{
    if (i%2===0)// четное число - составное
  {
  console.log(i+" - composite");
    
  }
   else
       {   
       for(d=3; d<half+1; d++)
         {
         if(i%d===0)
        {
           console.log(i+" - composite"); 
           break;
           }
         else
           {if(d=half){console.log(i+" - prime");}}
                   
         
         }
   
       }
   }  
}
}

PrimeComposite();
