import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('');
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          name="name"
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          name="price"
          type="text"
          id="pice"
          placeholder="pice"
          value={price}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}
