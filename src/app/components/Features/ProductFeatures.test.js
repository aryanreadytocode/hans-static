import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductFeatures from './ProductFeatures';

describe('ProductFeatures', () => {

  it('Should render a list of features with the first part in bold and the rest in normal text', () => {
    const features = [
      'Feature 1 - Description 1',
      'Feature 2 - Description 2',
      'Feature 3 - Description 3',
    ];

    render(<ProductFeatures features={features} />);

    features.forEach((feature, index) => {
      const [title, description] = feature.split(' - ');
      const boldElement = screen.getByText(`${title} -`);
      const normalElement = screen.getByText(description);

      expect(boldElement).toHaveClass('text-lg font-bold');
      expect(normalElement).toHaveClass('text-md');
    });
  });

  it('Should handle empty features array without errors', () => {
    const { container } = render(<ProductFeatures features={[]} />);
    expect(container.firstChild).toBeNull();
  });

});
