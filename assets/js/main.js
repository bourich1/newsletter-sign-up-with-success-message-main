let patren = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let input_email = document.getElementById("inputEmail");
let btnSubmit = document.querySelector(".submit")
let dismissBtn = document.getElementById("dismiss-btn");


input_email.addEventListener("input" , ()=>{
    if(input_email.value.match(patren)){
        valid();
    }else{
        error();
    }
});
btnSubmit.addEventListener("click" , ()=>{
    if(input_email.value.match(patren)){
        document.querySelector(".form").style.display="none";
        document.getElementById("email").textContent = input_email.value;
        document.querySelector(".sucsses-item").style.display="block";
        setInterval(() => {
            document.querySelector(".time").textContent += "."
        }, 1000);
        
        setTimeout(() => {
            clearInterval(1)
            dismissBtn.classList.remove("time");
            dismissBtn.textContent = "Dismiss message";
            dismissBtn.classList.add("active-btn");
        }, 3000);
        
    }else{
        error();
    }
    
});
dismissBtn.onclick = ()=>{
    if(dismissBtn.classList.contains("active-btn")){
        window.location.reload();
    }else{
        console.log(false);
    }
}


function valid(){
    btnSubmit.classList.add("active-btn")
        document.querySelector("#error-msg").style.display="none";
        input_email.classList.remove("error-input");
}
function error(){
        document.querySelector("#error-msg").style.display="block";
        input_email.classList.add("error-input");
}