function NewStr(){
    let result = 1
    let result2 = 0 
    const str = prompt("введіть число");
         
    for(let i=0 ; i < str.length; i++){
          if (str %2 == 0 ){
                result = result * str[i]	
            }
        }
    alert(result)
    for(let i=0 ; i < str.length; i++){
        if (str %2-1 == 0 )	{
        let digit = str % 10
            result2 = result2 + digit
        }
    }
        alert (result2)
}
    

    
