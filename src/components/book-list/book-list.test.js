import { render, screen } from '@testing-library/react';

import BookList from "./index";
import React from 'react';
const books = ['sdfds', 'sdfdfsf']
const onAddedToCart = jest.fn()
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers';
import BookstoreService from "../../services/bookstore-service";

const bookstoreService = new BookstoreService();
import {BookstoreServiceProvider} from '../bookstore-service-context';
import {BrowserRouter as Router} from "react-router-dom";
import App from "../app";


it('render loading',()=>{
    let store = createStore(reducer);
    render(
        <Provider store={store}>
            <BookstoreServiceProvider value={bookstoreService}>
                <BookList books={books} onAddedToCart={onAddedToCart}/>
            </BookstoreServiceProvider>


        </Provider>
    )

    expect(screen.getByText(/loading/i))


})