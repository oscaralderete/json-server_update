import Config from "../common/constants.js";

const id = new URLSearchParams(window.location.search).get("id");

const container = document.querySelector(".details");

const buttonDelete = document.querySelector(".btn-delete");

const buttonEdit = document.querySelector(".btn-edit");

window.addEventListener("DOMContentLoaded", () => renderDetails());

buttonDelete.addEventListener("click", async (e) => {
  const res = await fetch(`${Config.json_server_uri}posts/${id}`, {
    method: "DELETE",
  });

  window.location.replace("/index.html");
});

buttonEdit.addEventListener("click", () =>
  window.location.replace(`/edit.html?id=${id}`)
);

const renderDetails = async () => {
  const res = await fetch(`${Config.json_server_uri}posts/${id}`);
  const post = await res.json();

  console.log(post);

  const template = `
<h1>${post.title}</h1>
<div>${post.body}</div>
  `;

  container.innerHTML = template;
};
