const fetchButton = document.querySelector('#available-posts button')
const postTemp = document.getElementById('single-post');
const listElement = document.querySelector('.posts');

function httpRequests(metod, url, data){
    return fetch(url, {
        metod:metod,
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
          return response.json();
        })
} 


async function fetchPosts(){
    try{ 
       const responseData = await httpRequests("GET", "https://fakestoreapi.com/products")
    const listOfPosts = responseData
    for (const post of listOfPosts){
        const postEl = document.importNode(postTemp.content, true);
        postEl.querySelector("h2").textContent = post.title
        postEl.querySelector("p").textContent = post.body
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl)
    } 
    } catch (error) {
        alert(error.message);
      }
}

fetchButton.addEventListener("click", fetchPosts)