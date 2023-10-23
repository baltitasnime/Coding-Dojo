var year = 0
var startYear = 1996
for(var year = 1996; year<= 2023; year++){
    if(year==2023){
        console.log( "HAPPY 27 years of JAVASCRIPT! 🎈🎈🎈")
    }else{
        if((year-startYear)%10 == 0 && year!= 1996){
            console.log(year+ "happy decade of JS!" );
        }else{
            console.log(year +"JS is awesome");
            
        }
    }
}

