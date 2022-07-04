import Config from "../common/constants.js";

const id = new URLSearchParams(window.location.search).get("id");

const detailsUri = "/details.html?id=" + id;

// set href of anchor CANCEL
document.getElementById("back").href = detailsUri;

const form = document.querySelector("form");

const buttonUpdate = document.querySelector("button");

window.addEventListener("DOMContentLoaded", () => {
  fetch(`${Config.json_server_uri}posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      form.title.value = data.title;
      form.body.value = data.body;
      form.likes.value = data.likes;
    })
    .catch((er) => console.error("error:", er));
});

buttonUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${Config.json_server_uri}posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: form.title.value,
      body: form.body.value,
      likes: form.likes.value,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => window.location.replace(detailsUri));
});
