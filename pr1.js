let s;
document.getElementById('name').addEventListener('keyup',getpost);
function  getpost(e)
{
 s=e.target.value;
console.log(s);
}

document.getElementById('btn1').addEventListener('click',getresult);
function getresult(e)
{
    const xhr =new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${s}`,true);
    xhr.onload=function()
    {
      if(this.status === 200)
      {
          const s=JSON.parse(this.responseText);
          document.getElementById('output').innerHTML=`
          <h3>NAME: ${s.name}</h3>
          <br>
          <hr>
          <br>
          <h3>LOGIN: ${s.login}</h3>
          <br>
          <hr>
          <br>
          <img src=${`https://avatars2.githubusercontent.com/u/${s.id}?v=4`}>
          <br>
          <hr>
          <br>
          <h3>FOLLOWERS: ${s.followers}</h3>
          <br>
          <hr>
          <br>
          <h3>FOLLOWING: ${s.following}</h3>
          <br>
          <hr>
          <br>
          <h3>HOMETOWN: ${s.location}</h3>
          <br>
          <hr>
          <br>
          <h3>BIODATA: ${s.bio}<h3>
          <br>
          <hr>
          <br>
          <h3>REPOSITORY: ${s.public_repos}
          <br>
          <hr>
          <br>`;
      }  
    }
    xhr.send();
}