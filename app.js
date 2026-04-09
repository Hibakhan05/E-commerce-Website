var allBooks = {
    fiction: {
        fantasy: {
            "JK Rowling": {
                "philosophers stone": {
                    name: "Harry Potter and the Philosopher's Stone",
                    price: 10.99,
                    src: "https://www.pottermorepublishing.com/wp-content/covers/web/9781781100219.jpg",
                    description: "Harry Potter and the Philosopher's Stone (1997) by J.K. Rowling is a fantasy novel introducing an orphaned boy who discovers on his 11th birthday that he is a wizard. He escapes his abusive relatives to attend Hogwarts School of Witchcraft and Wizardry, where he makes friends, learns magic, and faces the dark wizard who murdered his parents."
                },
                "chamber of secrets": {
                    name: "Harry Potter and the Chamber of Secrets",
                    price: 11.99,
                    src: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855669.jpg",
                    description: "Harry Potter and the Chamber of Secrets (1998), by J.K. Rowling, is the second installment in the fantasy series, focusing on Harry's second year at Hogwarts. After mysterious warnings from a house-elf named Dobby, Harry returns to school to find students being petrified, leading him to uncover a dark, ancient secret hidden within the school."
                },
                "prisoner of azkaban": {
                    name: "Harry Potter and the Prisoner of Azkaban",
                    price: 12.99,
                    src: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855676.jpg",
                    description: "Harry Potter and the Prisoner of Azkaban is a fantasy novel by British author J. K. Rowling. The third novel in the Harry Potter series, it follows the young wizard Harry Potter during his third year at Hogwarts School of Witchcraft and Wizardry."
                }
            }
        },
        realLifeBased: {
            "Khaled Hosseini": {
                "the kite runner": {
                    name: "The Kite Runner",
                    price: 12.99,
                    src: "https://www.libertybooks.com/image/cache/catalog/The%20Kite%20Runner-626x974.jpg?q60",
                    description: "The Kite Runner (2003) by Khaled Hosseini is a poignant novel set in Afghanistan, following the life of Amir, a privileged boy from Kabul. The story explores themes of friendship, betrayal, and redemption as Amir navigates his complex relationship with his loyal friend Hassan amidst the backdrop of political turmoil and personal guilt."
                },
                "a thousand splendid suns": {
                    name: "A Thousand Splendid Suns",
                    price: 13.99,
                    src: "https://i.guim.co.uk/img/static/sys-images/Books/Pix/covers/2007/05/31/splendidsuns.jpg?width=465&dpr=1&s=none&crop=none",
                    description: "A Thousand Splendid Suns (2003) by Khaled Hosseini is a powerful novel set in Afghanistan, following the lives of two women, Mariam and Laila, whose paths intersect in a story of love, loss, and resilience."
                },
                "and the mountains echoed": {
                    name: "And the Mountains Echoed",
                    price: 11.99,
                    src: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9789382951001.jpg",
                    description: "And the Mountains Echoed (2013) by Khaled Hosseini is a novel that follows the lives of three generations of a family in Afghanistan, exploring themes of love, loss, and the impact of war."
                }
            }
        }
    },
    nonFiction: {
        selfHelp: {
            "Dale Carnegie": {
                "how to win friends": {
                    name: "How to Win Friends and Influence People",
                    price: 9.99,
                    src: "https://accessorytosuccess.com/cdn/shop/articles/How_to_Win_Friends_and_Influence_People_Book_Summary_600x.png?v=1611035176",
                    description: "How to Win Friends and Influence People (1936) by Dale Carnegie is a classic self-help book that teaches readers how to improve their social skills and influence others."
                },
                "how to stop worrying": {
                    name: "How to Stop Worrying and Start Living",
                    price: 10.99,
                    src: "https://static-ppimages.freetls.fastly.net/nielsens/9780749307233.jpg?canvas=600,600&fit=bounds&height=600&mode=max&width=600&404=default.jpg",
                    description: "How to Stop Worrying and Start Living (1952) by Dale Carnegie is a self-help book that provides practical advice on how to reduce anxiety and live a more fulfilling life."
                },
                "the art of public speaking": {
                    name: "The Art of Public Speaking",
                    price: 11.99,
                    src: "https://img.drz.lazcdn.com/static/np/p/a43ae1479a25365565810875c95f7c78.jpg_720x720q80.jpg",
                    description: "The Art of Public Speaking (1937) by Dale Carnegie is a self-help book that provides guidance on improving public speaking skills and delivering effective presentations."
                }
            }
        },
        pschology: {
            "Malcolm Gladwell": {
                "outliers": {
                    name: "Outliers: The Story of Success",
                    price: 11.99,
                    src: "https://covers.openlibrary.org/b/id/7342494-L.jpg",
                    description: "Outliers: The Story of Success (2008) by Malcolm Gladwell explores the factors that contribute to success, challenging the notion that individual talent is the primary determinant."
                },
                "blink": {
                    name: "Blink: The Power of Thinking Without Thinking",
                    price: 10.99,
                    src: "https://m.media-amazon.com/images/I/81wdCn9ap7L.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg",
                    description: "Blink: The Power of Thinking Without Thinking (2005) by Malcolm Gladwell examines the concept of snap judgments and how they can be both helpful and harmful."

                },

                "talking to strangers": {
                    name: "Talking to Strangers",
                    price: 12.99,
                    src: "https://www.books2door.com/cdn/shop/products/B2D3661TalkingtoStrangers-Front.jpg?v=1633979996",
                    description: "Talking to Strangers (2019) by Malcolm Gladwell explores the complexities of human interaction and the assumptions we make when communicating with others."
                }
            }
        }
    },
    horror: {
        adultHorror: {
            "Stephen King": {
                "IT": {
                    name: "IT",
                    price: 12.99,
                    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg",
                    description: "IT (1986) by Stephen King is a horror novel about a mysterious entity that targets children in the town of Derry, Maine."
                },
                "the shining": {
                    name: "The Shining",
                    price: 11.99,
                    src: "https://thelibraryladies.com/wp-content/uploads/2019/08/11588.jpg",
                    description: "The Shining (1977) by Stephen King is a horror novel about a family trapped in an isolated hotel."
                },
                "carrie": {
                    name: "Carrie",
                    price: 10.99,
                    src: "https://m.media-amazon.com/images/I/71HZ66gq3gL._AC_UF894,1000_QL80_.jpg",
                    description: "Carrie (1974) by Stephen King is a horror novel about a bullied teenager with telekinetic powers."
                }
            }
        },
        childrenHorror: {
            "RL Stine": {
                "goosebumps": {
                    name: "Goosebumps",
                    price: 8.99,
                    src :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8ohQk8DyDRG2enPHBWr439lilW_YKh0wFA&s" ,
                    description: "Goosebumps (1992) by RL Stine is a series of horror novels aimed at young readers."
                },
                "fear street": {
                    name: "Fear Street",
                    price: 9.99,
                    src: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534482913/the-surprise-party-9781534482913.jpg",
                    description: "Fear Street (1989) is an iconic young adult horror series by R.L. Stine, set primarily in the cursed town of Shadyside, focusing on teenagers facing deadly, often supernatural, threats"
                },
                "the haunting hour": {
                    name: "The Haunting Hour",
                    price: 8.99,
                    src: "https://m.media-amazon.com/images/I/51ZrHAtzciL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg",
                    description: "The Haunting Hour (2005) by R.L. Stine is a collection of horror stories for children, featuring tales of ghosts, monsters, and other spooky creatures."
                }
            }
        }
    },
    crime: {
        detective: {
            "Agatha Christie": {
                "murder on orient express": {
                    name: "Murder on the Orient Express",
                    price: 10.99,
                    src: "https://minoa.com/cdn/shop/files/1_de496125-b55e-4f63-b47d-33c8cd54ed63_1200x1200.png?v=1756463749",
                    description: "Murder on the Orient Expressby (1934) Agatha Christie is a classic detective novel featuring Hercule Poirot, who investigates the stabbing of an American tycoon, Samuel Ratchett, aboard the snow-trapped Orient Express."
                },
                "and then there were none": {
                    name: "And Then There Were None",
                    price: 11.99,
                    src: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg",
                    description: "And Then There Were None (1939) by Agatha Christie is a classic detective novel featuring Hercule Poirot, who investigates the mysterious deaths of ten guests invited to a remote island."
                },
                "the abc murders": {
                    name: "The ABC Murders",
                    price: 12.99,
                    src: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/s/w/r/the-abc-murders-original-imagwztxauggqvfa.jpeg?q=20",
                    description: "The ABC Murders (1936) by Agatha Christie is a detective novel featuring Hercule Poirot as he investigates a series of murders following a pattern."
                }
            }
        },
        thriller: {
            "James Patterson": {
                "along came a spider": {
                    name: "Along Came a Spider",
                    price: 10.99,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrYG8DkWoQte_J1qLUchEI7L3hD72h9gwCw&s",
                    description: "Along Came a Spider (1993) by James Patterson is a thriller novel featuring detective Alex Cross, who investigates the kidnapping of two children from an elite private school."
                },
                "jack and jill": {
                    name: "Jack and Jill",
                    price: 12.99,
                    src: "https://m.media-amazon.com/images/I/61nJAVr2l9L._AC_UF894,1000_QL80_.jpg",
                    description: " Jack and Jill (1996) is the third, fast-paced thriller in James Patterson’s Alex Cross series, featuring a pair of assassins terrorizing Washington, D.C.. Detective Alex Cross hunts killers who target celebrities and politicians, including the President, while balancing a separate, horrifying case of murdered children."

                },
                "cat and mouse": {
                    name: "Cat and Mouse",
                    price: 10.99,
                    src: "https://m.media-amazon.com/images/I/81eX97zL6+L.jpg",
                    description: "Cat & Mouse (1997) is the fourth Alex Cross thriller by James Patterson, featuring the detective facing two terrifying killers simultaneously"
                }
            }
        },
    },
}
var allItems = document.getElementById("allItems");
for (var categories in allBooks) {
    // console.log(books);
    for (var genre in allBooks[categories]) {
        // console.log(genre);
        for (var author in allBooks[categories][genre]) {
            // console.log(author);
            for (var title in allBooks[categories][genre][author]) {
                // console.log(title);
                console.log(allBooks[categories][genre][author][title]);
            }
        }
    }
}
var categoryDropdown = document.getElementById("categoryDropdown");
for (var category in allBooks) {
    categoryDropdown.innerHTML += `
        <option value="${category}">${category}</option>
    `;
}
var genreDropdown = document.getElementById("genreDropdown");
function displayGenre() {
    genreDropdown.innerHTML = `<option value="">Select Genre</option>`;
    for (var genre in allBooks[categoryDropdown.value]) {
        genreDropdown.innerHTML += `
            <option value="${genre}">${genre}</option>
        `;
    }
}
var authorDropdown = document.getElementById("authorDropdown");
function displayAuthor() {
    authorDropdown.innerHTML = `<option value="">Select Author</option>`;
    for (var author in allBooks[categoryDropdown.value][genreDropdown.value]) {
        authorDropdown.innerHTML += `
            <option value="${author}">${author}</option>
        `;
    }
}
var booksDisplay = document.getElementById("booksDisplay");
function displayBooks() {
    var selectedCategory = categoryDropdown.value;
    var selectedGenre = genreDropdown.value;
    var selectedAuthor = authorDropdown.value;
    booksDisplay.innerHTML = "";
    // console.log(allBooks[selectedCategory][selectedGenre][selectedAuthor]);
    for (var book in allBooks[selectedCategory][selectedGenre][selectedAuthor]) {
        var b = allBooks[selectedCategory][selectedGenre][selectedAuthor][book];
        booksDisplay.innerHTML += `
        <div class="col">
    <div class="card h-100">
      <img src="${b.src}" class="card-img-top" alt="${b.name}">
      <div class="card-body">
        <h5 class="card-title">${b.name}</h5>
        <p class="card-text">${b.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-between align-items-center">
    <small class="text-muted">Price: Rs.${b.price}</small>
    <button class="btn btn-sm" style="background-color:#5c3d2e; color:white;">Add to Cart</button>
</div>
    </div>
  </div>`;
    }
    booksDisplay.scrollIntoView({ behavior: "smooth" });

}
function showAll() {
    booksDisplay.innerHTML = "";
    for (var category in allBooks) {
        for (var genre in allBooks[category]) {
            for (var author in allBooks[category][genre]) {
                for (var book in allBooks[category][genre][author]) {
                    var b = allBooks[category][genre][author][book];
                    // console.log(showAll);
                    booksDisplay.innerHTML += `
                        <div class="col">
                            <div class="card h-100">
                                <img src="${b.src}" class="card-img-top" alt="${b.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${b.name}</h5>
                                    <p class="card-text">${b.description}</p>
                                </div>
                                <div class="card-footer d-flex justify-content-between align-items-center">
                                    <small class="text-muted">Price: Rs.${b.price}</small>
                                    <button class="btn btn-sm" style="background-color:#5c3d2e; color:white;">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
        }
    }
        booksDisplay.scrollIntoView({ behavior: "smooth" });

}
function showCategory(category) {
    booksDisplay.innerHTML = "";
    for (var genre in allBooks[category]) {
        for (var author in allBooks[category][genre]) {
            for (var book in allBooks[category][genre][author]) {
                var b = allBooks[category][genre][author][book];
                booksDisplay.innerHTML += `
                    <div class="col">
                        <div class="card h-100">
                            <img src="${b.src}" class="card-img-top" alt="${b.name}">
                            <div class="card-body">
                                <h5 class="card-title">${b.name}</h5>
                                <p class="card-text">${b.description}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between align-items-center">
                                <small class="text-muted">Price: Rs.${b.price}</small>
                                <button class="btn btn-sm" style="background-color:#5c3d2e; color:white;">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    }
    booksDisplay.scrollIntoView({ behavior: "smooth" });

}

    
    
