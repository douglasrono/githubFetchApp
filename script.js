
// let profName = document.querySelector(".profile-name");
// let user_Name = document.querySelector(".user-name");
// let followers = document.querySelector(".followers span");
// let following = document.querySelector(".following span");
let searchBtn = document.querySelector(".btn");
let inputControl = document.querySelector(".inputControl");
 


// the click event on the search button
searchBtn.addEventListener("click",()=> {
    
    if (inputControl.value.length <= 0) {
        alert("Username Can't be blank!");
        return;
        
    } else {
        fetchAccount();
    }
});
//github api
const fetchAccount=() =>{
      let user_img = document.querySelector(".user-img");
    fetch(`https://api.github.com/users/itsdaglas`)
        .then(response => response.json())
        .then(function (data) {
            if (data.message === "Not Found") {
                alert("Account Not Availabe");
                return false;
            } else {
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                profName.innerHTML = data.name;
                user_Name.innerHTML = data.login;
                followers.innerHTML = data.followers;

                const link = data.html_url;

                visitBtn.setAttribute("href", link);

            }
        });

}    
