const contentPostForm = document.querySelector("#content-post")


//collects all data from post form and calls a post_request 
contentPostForm.addEventListener("submit",(data)=>{
    data.preventDefault()
    const title = document.querySelector("#content-post-title");
    const content = document.querySelector("#content-post-content");
    const chat = document.querySelector("#content-post-chat");
    const titleValue = title.value;
    const contentValue = content.value;
    const chatValue = chat.value;
    title.value = ''
    content.value = ''
    post_request('anon',titleValue,contentValue,chatValue);
    
})

function post_request(username, title, content,chat){
    console.log(`${username} wants to post on ${chat}:\n\n${title}\n${content}`);
    build_post_card(username,title,content,chat)
}

function build_post_card(username,title,content,chat){
    const postCard = document.createElement("div");
    const newsfeed = document.querySelector("#newsfeed");
    // postCard.setAttribute("class","card m-2 p-2")
    postCard.classList.value="card m-2 p-2";
    postCard.innerHTML=
    `<h4>${title}</h4>
    <h6>${chat}</h6>
    <h6><em>a/${username}</em></h6>
    <p class="m-0">${content}
        <br>
        <span class="container">
            <button class="btn btn-danger float-right m-1">&#128078;</button>
            <button class="btn btn-success float-right m-1">&#128077;</button>
            <button id="comment" class="btn btn-primary float-right m-1">Comment</button>
        </span>
    </p>`;

    console.dir(postCard);
    newsfeed.prepend(postCard);

    refresh_comment_button_listeners()
}

// function refresh_comment_button_listeners(){
//     const commentButtons = document.querySelectorAll("#comment");
//     for(const commentButton of commentButtons){
//         console.log("hi");
//     }
// }