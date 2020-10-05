document.querySelector("#searchbtn").addEventListener("click", fetchDetails);

window.addEventListener("load", () => fetchDetails());

function fetchDetails(e) {
  fetch(
    `https://api.github.com/users/${
      document.querySelector("#searchfield").value
    }`
  )
    .then((res) => res.json())
    .then((data) => showOutput(data))
    .catch((err) => console.log(err.message));
}

function showOutput(data) {
  document.getElementById("output").innerHTML = `
   <div class="d-flex flex-column">
   <img class="profile" class="logo" src=${data.avatar_url} alt="profile">
<h1>${data.name}</h1>
<div class="d-flex">
   <span class="badge">Followers : ${data.followers} </span>
   <span class="badge">Following : ${data.following} </span>
</div>      
<a href=${
    data.html_url
  } target="_blank" class="badge badge-3"> View Profile </a>   
<p>Joined : ${data.created_at.slice(0, 10)} </p>
<p>Location : ${data.location}</p>
<p>Repositories  : ${data.public_repos} </p>     
<p>Company: ${data.company} </p>        
</div>

   
   `;
}
