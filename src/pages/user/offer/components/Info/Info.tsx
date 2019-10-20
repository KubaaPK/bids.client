/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { Price, Seller, Title, Wrapper } from './styled';
import SellerRating from '../SellerRating/SellerRating';

type Props = {
  title: string;
  seller: {
    id: string;
    username: string;
  };
  price: string;
};

const Info: React.FunctionComponent<Props> = (props: Props) => {
  const { seller, price, title } = props;
  const splitedPrice = price.split('.');
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Seller>
        od
        <span>
          <Link to="/">{seller.username}</Link>
        </span>
      </Seller>
      <SellerRating sellerId={seller.id} />
      <Price>
        <span>{splitedPrice[0]},</span>
        <span>{splitedPrice[1]}zł</span>
      </Price>
    </Wrapper>
  );
};

export default Info;
