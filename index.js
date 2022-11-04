const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btn = document.getElementById("btn-el")
let firstResult = document.getElementById("pass1-el")
let secondResult = document.getElementById("pass2-el")



function getRandom(){
     let randomNumber = ""
        
        for( let x = 0; x < 15; x++){
            let i = Math.floor(Math.random()*characters.length)
            let j = Math.floor(Math.random()*characters.length)
            
            randomNumber += characters[i]
            
            
        }
        
        return randomNumber
            
        
            
         
}

function generatePassword(){
    firstResult.textContent = getRandom()
    secondResult.textContent = getRandom()
}
         
         

        
         
         /* Select text area by id*/
            // var Text = document.getElementById("textbox");
  
            /* Select the text inside text area. */
            // Text.select();
  
            /* Copy selected text into clipboard */
            // navigator.clipboard.writeText(Text.value);
  
            /* Set the copied text as text for 
            div with id clipboard */
            // document.getElementById("clipboard")
                // .innerHTML = Text.value;
    
        
         
        
        
    
 
 









 