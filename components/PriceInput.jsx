import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// When sanity renders this component, it will pass in a bunch of props that we can use
const PriceInput = ({ type, value, onChange, inputComponent }) => {
  function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
  }

  return (
    <div>
      <h2>{type.title}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => createPatchFrom(event.target.value)}
      />
    </div>
  );
};
export default PriceInput;
