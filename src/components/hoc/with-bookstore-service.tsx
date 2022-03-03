import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const withBookstoreService = () => (Wrapped: React.ComponentClass<any>) => {

  return (props: Props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props}
                     bookstoreService={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;
