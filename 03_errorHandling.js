//Error Handling (try / catch / finally)

/*
   Hata fırlatmak ve yakalamak 
   C#'taki try/catch mantıgında cok benzer
*/


function divide(a,b){
    if( b === 0){
        throw new Error("Cannot divide by zero");
    }

    return a/b;
}


try{
    let result = divide(10,2);
    console.log("Result : ",result);

    let result2 = divide(10,0);
    console.log("Result2:",result2); //buraya gelemeyecek
}
catch(error){
console.log("Result2:",error.message);
}finally{
    console.log("Burası her zaman calısacaktır");
}

//normal akısta try ici,
//Hata durumunda catch,
//Ne olursa olsun finally