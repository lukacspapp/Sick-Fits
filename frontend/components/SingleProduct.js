import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const SINGLE_PRODUCT_QUERY = gql`
  query {
    Product(where: { id: "624ec82ee4f79fb05ef13f94" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY);
  return <p>Single Product</p>;
}
