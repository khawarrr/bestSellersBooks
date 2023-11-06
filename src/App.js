import "./App.css";
import Book from "./Book";
import books from "./books";

function App() {
  return (
    <>
      <h2>Amazon Best Sellers in Books</h2>
      <section className="bookList">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

export default App;
