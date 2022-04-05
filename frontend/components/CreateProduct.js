import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Sandor',
    price: 10,
    description: 'Budos Macska',
  });
  return (
    <form>
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
        <input
          name="description"
          type="text"
          id="description"
          placeholder="description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  );
}
