import React from 'react';
import { connect } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart } from '../../actions';

import './shopping-cart-table.css';

interface book {
    id: number,
    title: string,
    author: string,
    price: number,
    count: number,
    total: number
}

interface books extends Array<book>{}


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }:
                               {items: books, total: number, onIncrease: any, onDecrease: any, onDelete: any}) => {

  const renderRow = (item: book, idx: number) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>

          <button
            onClick={() => onIncrease(id)}
            className="button increase">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="button decrease">
            <i className="fa fa-minus-circle" />
          </button>
            <button
                onClick={() => onDelete(id)}
                className="button trash">
                <i className="fa fa-trash-o" />
            </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table" role='table-cart'>
        <thead className='theadTableCart'>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}:{shoppingCart: any}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
