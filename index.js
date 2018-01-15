const app = "I don't do much.";

const token = "74dbe2d85f1f180eff2dc6d9e06aa8977abdcdd9"
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
