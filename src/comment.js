import {Comment} from "../Models/comments";

export function getComment(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((comments) => 
        comments.map(
            (comment) => new Comment(
                comment.postId,
                comment.id,
                comment.name,
                comment.email,
                comment.body
            )
        )
    )
    .then(comments =>{
        const tbody = document.querySelector('table > tbody');
        tbody.innerHTML = "";

        for (const comment of comments) {
            tbody.innerHTML += `
                <tr>
                    <td>${comment.postId}</td>
                    <td>${comment.id}</td>
                    <td>${comment.name}</td>
                    <td>${comment.email}</td>
                    <td>${comment.body}</td>
                </tr>
            `
        }
    })
} 