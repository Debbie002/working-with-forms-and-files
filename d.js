const form = document.getElementById("form-info")


form.addEventListener("submit", (event)=>{
    event.preventDefault()
    validation(event)

   

})

async function validation(event){
    let valid = true;
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
    const error3 = document.querySelector(".error3")
    const error4 = document.querySelector(".error4")
    const error5 = document.querySelector(".error5")



    if(firstName === ""){
        error.textContent = "Enter FirstName"
        valid = false;
    }else if(firstName.length < 1){
        error.textContent = "FirstName should not be less than 1 character"
        valid = false;
    } else if(/\d/.test(firstName)){
        error.textContent = "FirstName should not contain numbers"
        valid = false;
    }else{
        error.textContent = ""

    }
    

    if(lastName === ""){
        error1.textContent = "Enter LastName"
        valid = false;
    }else if(lastName.length < 1){
        error1.textContent = "LastName should not be less than 1 character"
        valid = false;
    } else if(/\d/.test(lastName)){
        error1.textContent = "LastName should not contain numbers"
        valid = false;
    }else{
        error1.textContent = ""
    }

    

    if(email === ""){
        error3.textContent = "Enter Email"
        valid = false;
    }else if(!emailPattern.test(email)){
        error3.textContent = "Invalid Email"
        valid = false;
    }else{
        error3.textContent = ""
    }

    
    if(phoneNum === ""){
        error4.textContent = "Enter Phone Number"
        valid = false;
    }else if(!phonePattern.test(phoneNum)){
        error4.textContent = "Number Format is 8147510665"
        valid = false;
    }else{
        error4.textContent = ""
    }

    if(dropDown === ""){
        error5.textContent = "Select an Option"
        valid = false;
    }else{
        error5.textContent = ""
    }

    if(!valid){
        return;
    }

    const data = {
        firstName, lastName, otherName, email, phoneNum, dropDown
    }

        try {


            const response = await fetch("https://working-with-forms-and-files.onrender.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response =>response.json())
        .then(data =>{
            
            console.log("good", data);
            window.location = "database.json"
        })
        
        
        
        
        } catch (error) {
            if (error) throw error;
        }


}
















