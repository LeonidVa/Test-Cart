import {render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import {BookstoreServiceProvider} from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();


describe('initial state page render', () => {
    it('render cart', () => {
        render(<Provider store={store}>
            <ErrorBoundry>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <App/>
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        </Provider>);
    })
    it('render loading shop', () => {
        render(<Provider store={store}>
            <ErrorBoundry>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <App/>
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        </Provider>);

        expect(screen.getByText(/loading/i))
    })

    it('render initial state table', () => {
        render(<Provider store={store}>
            <ErrorBoundry>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <App/>
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundry>
        </Provider>);

        expect(screen.getByText(/Item/i))
        expect(screen.getByText(/Count/i))
        expect(screen.getByText(/Price/i))
        expect(screen.getByText(/Action/i))
    })


});