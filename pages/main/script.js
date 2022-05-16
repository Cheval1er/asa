// make navbar with welcome page (home)book catalog and order form
let newDiv = document.createElement("div"); // creates div
newDiv.className = 'topnav';

let homeTag = document.createElement("a"); //creates first "a" tag in div for home
homeTag.className = 'avtive';
homeTag.setAttribute('href', '../main/welcomePage.html');
let homeText = document.createTextNode("Home");
homeTag.appendChild(homeText);

newDiv.appendChild(homeTag);

// second "a" for books

let bookTag = document.createElement("a");
bookTag.className = 'avtive';
bookTag.setAttribute('href', '#');
let bookText = document.createTextNode("Books");
bookTag.appendChild(bookText);

newDiv.appendChild(bookTag);
// third "a" for order
let orderTag = document.createElement("a");
orderTag.className = 'avtive';
orderTag.setAttribute('href', '../form page/form.html');
let orderText = document.createTextNode("Order Form");
orderTag.appendChild(orderText);

newDiv.appendChild(orderTag);

document.body.appendChild(newDiv);


// get books data
async function getBooks () {
    const response = await fetch('books.json');
    const data = await response.json();
    const { author, title} = data;
    console.log(author);
    console.log(title);

}
getBooks();