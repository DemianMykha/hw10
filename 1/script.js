function getNumber() {
    const str = prompt("введіть число").split();
    for (let i = 0;  i < 10; i++) {
        if (str%i == 0) {
            alert(i);
            
        }
         
    }
     
}    
