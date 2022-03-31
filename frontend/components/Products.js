import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components/';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading); // we did get undefined beacuse loading state happens server side
  if (loading) return <p>loading...</p>;
  if (error) return <p>error:{error.message}</p>;
  return (
    <div>
      <ProductListStyles>
        {data.allProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </ProductListStyles>
    </div>
  );
}
