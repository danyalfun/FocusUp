
const form = document.getElementById("save");
form.addEventListener("click", function(e) {
    e.preventDefault(); 
    
    const email = document.querySelector("#email").value;
    const username = document.querySelector("#username").value;
    const tel = document.querySelector("#tel").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    if (username.length <= 3) {
        alert("username min lengh is 3");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("not corect email")
    }

    if (tel.length < 10) {
        alert("tel min is 10 numbers");
    }

    if (title.length <= 5) {
        alert("titel max lengh 5");
    }

    if (content.length<=10 ) {
        alert("content max lengh 10");
    }
})