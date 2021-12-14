function validateform(){
   let returnval = true;
    let name = document.forms['VikForm']["fname"].value;
    let last = document.forms['VikForm']["lname"].value;
    let phoneN = document.forms['VikForm']["phone"].value;
    let email = document.forms['VikForm']["mail"].value;    
    
    if(name.length<3){
        alert("Length of First Name is Too Short");
        //seterror(name,"Length of Name is too Short");
        returnval = false;
    }
    
    let letters = /^[A-Za-z]+$/;
   
    if (name.match(letters)){
        returnval = true;
    }
    else{
        alert ("Kindly enter only Alphabets in First Name")
        returnval = false;
    }

    if(last.length<3){
        alert("Length of Last Name is Too Short");
        returnval = false;
    }
    if (last.match(letters)){
        returnval = true;
    }
    else{
        alert ("Kindly enter only Alphabets in Last Name")
        returnval = false;
}
}

