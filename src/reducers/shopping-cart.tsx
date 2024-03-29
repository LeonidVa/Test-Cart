const updateCartItems = (cartItems: any, item: any, idx: any) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book: any, item: any = {}, quantity: any) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (state: any, bookId: any, quantity: any) => {

  const { bookList: { books }, shoppingCart: { cartItems }} = state;

  const book = books.find(({id}:{id:any}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}:{id:any}) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  const items = updateCartItems(cartItems, newItem, itemIndex)
  let total = 0;
  items.forEach((item)=>{
    total += item.total

  })

  return {
    orderTotal: total,
    cartItems: items
  };


};

const updateShoppingCart = (state: any, action: any) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }

  switch(action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}:{id:any}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
