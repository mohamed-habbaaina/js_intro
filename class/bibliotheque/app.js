class Book{

    #page = 1; // page = 1 propriété privé
    constructor(titel, pages){
        this.titel = titel;
        this.pages = pages;

    }
    // Getteurs
    get page(){
        return this.#page;
    }

    // Methodes
    nextPage(){
        if(this.page < this.pages){ // if not last page

            this.#page++;
        }
    }

    close(){
        this.#page = 1;
    }
}


class Library{
    
    #books = [];

    addBook(book){  // add livre
        this.#books.push(book);
    }

    addBooks(books){
        for(let book of books){
            this.addBook(book);
        }
    }

    findBooksByLetter(letter){

        return this.#books.filter((book) => book.titel[0].toLowerCase() === letter.toLowerCase())
        
        //? deuxieme façon de faire
        //const found = [];
        //for(let book of this.#books){
        //    if(book.titel[0].toLowerCase() === letter.toLowerCase){
        //        found.push(book);
        //    }
        //}
        //return found;
    }
}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page);
b.nextPage();
b.nextPage();
b.nextPage();
b.nextPage();

console.log(b.page);
b.close();
console.log(b.page);

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Candide ou l\'Optimisme', 200),
    new Book('Zadig ou la Destinée', 190),
    new Book('Micromégas', 210),
    new Book('L\'Ingénu', 200),
    new Book('Traité sur la tolérance', 180),
    new Book('Cosi-Sancta', 160),
    new Book('La Princesse de Babylone', 210)
])


console.log(l);
console.log(l.findBooksByLetter('Z'))

