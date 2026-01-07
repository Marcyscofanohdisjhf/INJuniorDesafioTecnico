const booksByCategory = [
    {
        category: "Romance",
        books: [
            { title: "O Sol Também é Uma Estrela", author: "Nicola Yoon" },
            { title: "O Noivo da Minha Melhor Amiga", author: "Emily Giffin" },
            { title: "Orgulho e Preconceito", author: "Jane Austen" }
        ]
    },
    {
        category: "Fantasia",
        books: [
            { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling" },
            { title: "O Hobbit", author: "J.R.R. Tolkien" },
            { title: "Eragon", author: "Christopher Paolini" },
            { title: "O Nome do Vento", author: "Patrick Rothfuss" }
        ]
    },
    {
        category: "Suspense",
        books: [
            { title: "A Garota no Trem", author: "Paula Hawkins" },
            { title: "O Silêncio dos Inocentes", author: "Thomas Harris" }
        ]
    },
    {
        category: "Ficção Científica",
        books: [
            { title: "Duna", author: "Frank Herbert" },
            { title: "Neuromancer", author: "William Gibson" },
            { title: "Fundação", author: "Isaac Asimov" },
            { title: "1984", author: "George Orwell" },
            { title: "O Fim da Infância", author: "Arthur C. Clarke" }
        ]
    }
];

function authors(lista) {
    let autores = [];

    for (let i = 0; i < lista.length; i++){
        let livros = lista[i].books;

        for (let j = 0; j < livros.length; j++){
            let autor = livros[j].author;

            if (!autores.includes(autor)){
                autores.push(autor);
            }
        }
    }

    return autores;
}

let listaAutores = authors(booksByCategory);
console.log(listaAutores);
