var lastName = "phan";

var age = 19;

if(age > 20){
    console.log(lastName + " > 20");
}else if(age === 19){
    console.log(lastName + " is 19");
}else{
    console.log(lastName + " < 19");
}

switch (age > "20"){
    case true:
        console.log(lastName + " > 20");
        break;
    case false:
        console.log(lastName + " < 20");
        break;
}

