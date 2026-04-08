
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
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("not corect email")
        return;
    }

    if (tel.length < 10) {
        alert("tel min is 10 numbers");
        return;
    }

    if (title.length <= 5) {
        alert("titel min lengh 5");
        return;
    }

    if (content.length<=10 ) {
        alert("content min lengh 10");
        return;
    }
    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username , email: email , tel: tel , title: title , content: content  })
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => console.error(err));
})
