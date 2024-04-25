let main=document.getElementById("java")

function votevalidation(){
    let paragraph =document.getElementById("para")
    let age=document.getElementById("age-num").value
    // console.log(age)
    if(age>=18){
        paragraph.innerHTML="eligble for vote"
    }
    else if(age==""){
paragraph.innerHTML="please enter your age"
    }
    else{
        paragraph.innerHTML="not eligble for vote"
    }
}
