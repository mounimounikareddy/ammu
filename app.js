let main=document.getElementById("java")

function taxcalculate(){
    let actualSalary =document.getElementById("para")
    let tax =document.getElementById("tax")
    let hand =document.getElementById("hand")
    let salary=document.getElementById("your-sal").value
     let a=salary*0.1
     let b=salary-a
    
     actualSalary.innerHTML="total salary:"+salary
     tax.innerHTML="tax:"+a
     hand.innerHTML="hand salary:"+b

}