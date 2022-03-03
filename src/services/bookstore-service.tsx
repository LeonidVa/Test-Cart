import {bookAddedToCart} from "../actions";

interface book {
  id: number,
  title: string,
  author: string,
  price: number,
  coverImage: string
}

interface books extends Array<book>{}


export default class BookstoreService<book> {

  data = [
    {
      id: 1,
      title: 'Name 1',
      author: 'Author 1',
      price: 32,
      coverImage: ''},
    {
      id: 2,
      title: 'Name 2',
      author: 'Author 2',
      price: 45,
      coverImage: ''},
    {
      id: 3,
      title: 'Name 3',
      author: 'Author 3',
      price: 50,
      coverImage: ''},
    {
      id: 4,
      title: 'Name 4',
      author: 'Author 4',
      price: 100,
      coverImage: ''},
    {
      id: 5,
      title: 'Name 5',
      author: 'Author 5',
      price: 200,
      coverImage: ''},
    {
      id: 6,
      title: 'Name 6',
      author: 'Author 6',
      price: 301,
      coverImage: ''}
  ];

  getBooks() {
    return new Promise<books>((resolve, reject) => {
      setTimeout(() => {

          resolve(this.data);

      }, 700);
    });
  }
}

