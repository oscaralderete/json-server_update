import Config from "../common/constants.js";

const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch(Config.json_server_uri + "posts/", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("/index.html");
};

form.addEventListener("submit", createPost);
