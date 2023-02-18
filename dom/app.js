/**
 * @param {{title: string, body: string}} post
 * @returns {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement("article");

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.innerText = post.title;  //! innerText pour securisé les data de l'API
    p.innerText = post.body;
    article.append(h2, p);

    return article;

    //? deuxième façon de faire:
    //! Moins sécurisé, si dans la data de l'API on reçoi de JS, notre navigateur va l'exicuté 
    // article.innerHTML = `
    //     <h2>${post.title}</h2>
    //     <p>${post.body}</p>
    // `;
    // return article;
}


async function main(){
const wrapper = document.querySelector('#lastPosts');
const loader = document.createElement("p");
// loader.innerText = "Chargement..."
// wrapper.append(loader);
try{

    const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
        headers: {
            Accept: "application/json"
        }
    })
    // capturé les erreurs
    if(!r.ok){
        throw new Error('Erreur serveur')
    }

    const posts = await r.json();
    loader.remove();
    for(let post of posts){
        wrapper.append(createArticle(post));
    }

} catch(err){
    loader.innerText = "Impossible de contacter l'API !";
    loader.style.color = 'red';
    return
}
}
main();