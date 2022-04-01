import { Post} from "../Models/posts";

export function getPost(){

fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) =>
        posts.map(
            (post) => new Post(
                post.userId,
                post.id,
                post.title,
                post.body

            )

        )
    )
    .then(posts => {
     const tbody = document.querySelector('table > tbody');

     tbody.innerHTML = "";

     for(const post of posts) { 
         tbody.innerHTML += `
         <tr>
              <td>${post.userId}</td>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
              
         </tr>
         ` 
     }

    })
} 