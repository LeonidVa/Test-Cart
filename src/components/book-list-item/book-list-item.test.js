import {render, screen} from '@testing-library/react';
import React from "react";
import BookListItem from "./book-list-item";
import userEvent from "@testing-library/user-event";


const book =
    {
        id: 1,
        title: 'Name 1',
        author: 'Author 1',
        price: 32,
    }


const onAddedToCart = jest.fn()

describe('book-list-item', () => {
    it('render book-list-item', () => {

        render(<BookListItem book={book} onAddedToCart={onAddedToCart}/>)
    })

    it('get by text', () => {
        render(<BookListItem book={book} onAddedToCart={onAddedToCart}/>)

        expect(screen.getByText('Add to cart'))
        expect(screen.getByText('Author 1'))
    })

    it('get by role', () => {
        render(<BookListItem book={book} onAddedToCart={onAddedToCart}/>)
        screen.getByRole('book-list-item')
    })

    it('add to cart works', () => {
        render(<BookListItem book={book} onAddedToCart={onAddedToCart}/>)

        userEvent.click(screen.getByText('Add to cart'))
        expect(onAddedToCart).toHaveBeenCalled()
        expect(onAddedToCart.mock.calls.length).toEqual(1);

    })

})



