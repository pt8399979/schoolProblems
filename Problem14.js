let obj = {
    English : "Hello", 
    Spanish : "¡Hola",
    French : "Bonjour"

}

function generateGreeting(ist, sec){
    

    let lang ;
    if(sec){
        lang = obj[sec]         
        
    }
    else{
        lang = obj.English
    }

    let ret = lang+" "+ist+"!"
    return ret
}


console.log(generateGreeting("Alice")); 
console.log(generateGreeting("Bob", "Spanish")); 
console.log(generateGreeting("Charlie", "French")); 