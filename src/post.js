import { Posts } from "../Models/posts";

export function getPost(){

fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.joson())
    .then((posts) =>
        posts.map(
            (post) => new Post(
                post.postId,
                post.id,
                post.title,
                post.body

            )

        )
    )
    .then(posts => {
     const tbody = document.querySelector('table > tbody');

     tbody.innerHTML = "";

     for(post of posts) { 
         tbody.innerHTML += `
         <tr>
              <td>${post.postId}</td>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
              
         </tr>
         ` 
        
     }

    })} 