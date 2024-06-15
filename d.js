const form = document.getElementById("form-info")

function getData(){
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const otherName = document.getElementById("other-name").value
    const email = document.getElementById("email").value
    const phoneNum = document.getElementById("phone-number").value
    const dropDown = document.getElementById("dropdown").value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^[0-9]{10}$/

    const error = document.querySelector(".error")
    const error1 = document.querySelector(".error1")
    const error2 = document.querySelector(".error2")
    const error3 = document.querySelector(".error3")
    const error4 = document.querySelector(".error4")
    const error5 = document.querySelector(".error5")

    const data = {
        firstName, lastName, otherName, email, phoneNum, dropDown
    }




    if(firstName === ""){
        error.textContent = "Enter Firstname"
    }else if(firstName.length < 1){
        error.textContent = "Firstname should not be less than 1 character"
    } else if(/\d/.test(firstName)){
        error.textContent = "FirstName should not contain numbers"
    }else{
        error.textContent = ""
    }
    

    if(lastName === ""){
        error1.textContent = "Enter Lastname"
    }else if(lastName.length < 1){
        error1.textContent = "Lastname should not be less than 1 character"
    } else if(/\d/.test(lastName)){
        error1.textContent = "LastName should not contain numbers"
    }else{
        error1.textContent = ""
    }

    

    if(email === ""){
        error3.textContent = "Enter Email"
    }else if(!emailPattern.test(email)){
        error3.textContent = "Invalid Email"
    }else{
        error3.textContent = ""
    }

    
    if(phoneNum === ""){
        error4.textContent = "Enter Phone Number"
    }else if(!phonePattern.test(phoneNum)){
        error4.textContent = "Number Format is 8147510665"
    }else{
        error4.textContent = ""
    }

    if(dropDown === ""){
        error5.textContent = "Select an Option"
    }else{
        error5.textContent = ""
    }

    try {
        fetch("https://working-with-forms-and-files.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response =>response.json())
        .then(data =>{
            window.location = "database.json"
            console.log("good", data);
        })
        
    } catch (error) {
        if(error) throw error;
    }
}





form.addEventListener("submit", (event)=>{
    event.preventDefault()
    getData()
   

})



