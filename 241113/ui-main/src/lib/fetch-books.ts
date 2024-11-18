import { BookData } from "@/types";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = "https://onebite-books-server-eight-chi.vercel.app/book";

  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default fetchBooks;
