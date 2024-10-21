const url= "https://jsonplaceholder.typicode.com/posts/1";
// async function Post1() {
//   try {
//     const response = await fetch(url);
//     const post = await response.json();
//     const Details = `
//       <h2>${post.title}</h2>
//       <p>${post.body}</p>
//     `;
//     document.getElementById("result").innerHTML = Details;
//   } catch (error) {
//     console.error("Error fetching post:", error);
//   }
// }

// Post1();

function Posts() {
    fetch(url)
      .then((response) => response.json())
      .then((post) => {
        const Details = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
            `;
        document.getElementById("result2").innerHTML = Details;
      })
      .catch((error) => console.error("Error fetching post:", error));
  }
  
  Posts();