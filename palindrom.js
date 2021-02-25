const palindrom=(str)=>{
    let revstr=str.split("").reverse().join("")

    if(revstr===str){
        return "true"
    }
    else{
        return "false"
    }
}

palindrom('kayak')