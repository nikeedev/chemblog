let posts = document.querySelector("#posts");

async function main() {
   fetch("posts.json").then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       console.log(json)
       for (const post of json) {
           let elem = document.createElement("div");
           elem.classList.add("post");
           elem.innerHTML = `<h3><a href="${post.post}">${post.name}</a></h3><p>${post.desc}</p>`;
           posts.appendChild(elem);
       }
   })
   .catch(function (err) {
       console.log(err)
   })
}

main();
