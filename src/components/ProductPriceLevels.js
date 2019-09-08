import React from 'react';
import { FormField, TextInput, MaskedInput, Button } from 'grommet';
import Card from '../components/Card';

const ProductPriceLevels = ({
  priceLevels,
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
  variantIdx,
}) => {
  return (
    <Card>
      {priceLevels.map((level, idx) => (
        <>
          <FormField
            label='Name'
            htmlFor={`priceLevelName${idx}`}
            // error={
            //   errors.priceLevels[idx].name &&
            //   touched.priceLevels[idx].name &&
            //   errors.priceLevels[idx].name
            // }
          >
            <TextInput
              id={`priceLevelName${idx}`}
              type='text'
              name={`priceLevelName${idx}`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.variants[variantIdx].priceLevels[idx].name}
            />
          </FormField>
          <FormField
            label='Price'
            htmlFor={`priceLevelPrice${idx}`}
            // error={
            //   errors.priceLevels[idx].price &&
            //   touched.priceLevels[idx].price &&
            //   errors.priceLevels[idx].price
            // }
          >
            <MaskedInput
              mask={[
                { fixed: '$' },
                { regexp: /^[0-9]+$/, placeholder: '0' },
                { fixed: '.' },
                { regexp: /^[0-9]+$|^[0-9]+$/, placeholder: '00' },
              ]}
              id={`priceLevelPrice${idx}`}
              name={`priceLevelPrice${idx}`}
              value={values.variants[variantIdx].priceLevels[idx].price}
            />
          </FormField>
        </>
      ))}
      <Button label='Add another price level' />
    </Card>
  );
};

export default ProductPriceLevels;
