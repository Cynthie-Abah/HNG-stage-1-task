// TIMER 
const timeDiv = document.getElementById("time");
setInterval(()=>{
    const currentTime = Date.now();
    timeDiv.textContent = "TIME: " + currentTime;
}, 1050)

// AVATAR CHANGE 
const button = document.querySelector(".edit-icon");
const avatarInput = document.querySelector(".avatar-input")
const avatar = document.querySelector(".avatar img");

button.addEventListener("click", ()=>{
    avatarInput.click()
})

avatarInput.addEventListener("change", (event)=>{
    const file = event.target.files[0];
    if(file){
        const url = URL.createObjectURL(file);
        avatar.src = url;
    }
})