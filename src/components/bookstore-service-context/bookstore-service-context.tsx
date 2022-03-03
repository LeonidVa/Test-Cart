import React from 'react';



const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = React.createContext(null);

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};
