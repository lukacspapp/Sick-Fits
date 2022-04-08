import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # which variables are getting passed in? and what types are they?
    $name: String! # ! means that this is a required field
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Sandor',
    price: 10,
    description: 'Budos Macska',
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // submit the input fields to the backend
        const res = await createProduct();
        console.log(res);
        clearForm();
        // go to that product page
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <Error error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            name="image"
            type="file"
            id="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            name="name"
            type="text"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            name="price"
            type="number"
            id="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        {/* <button type="button" onClick={clearForm}>
          Clear Form
        </button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button> */}
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
