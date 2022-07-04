import Config from "../common/constants.js";

const container = document.querySelector(".blogs");

const searchForm = document.querySelector("form");

window.addEventListener("DOMContentLoaded", () => renderPost());

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPost(searchForm.term.value);
});

const renderPost = async (term) => {
  let uri = Config.json_server_uri + "posts";
  console.log("URI here:", uri);
  // sorted fetch
  // let uri = Config.json_server_uri + "/posts?_sort=likes&_order=desc";

  if (term) {
    uri += `?&q=${term}`;
  }

  const res = await fetch(uri);

  const posts = await res.json();

  console.log(posts);

  let template = "";

  posts.forEach((post) => {
    template += `
<div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes}</small></p>
    <p>${post.body.slice(0, 200)}</p>
    <a href="/details.html?id=${post.id}">read more...</a>
</div>
    `;
  });

  container.innerHTML = template;
};
