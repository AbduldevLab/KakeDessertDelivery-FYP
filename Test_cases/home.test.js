import React from "react";
import { render } from "@testing-library/react";
import Home from "../src/pages/Home";

test('renders hero section with title and image', () => {
  const { getByAltText, getByText } = render(<Home />);
  const heroImg = getByAltText('hero section');
  const title = getByText('Craving? Just wait kake at your door');
  const subtitle = getByText('An easy way to place an order right now!');
  
  expect(heroImg).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});

test('renders category section with categories', () => {
  const { getAllByTestId } = render(<Home />);
  const categories = getAllByTestId('category');
  
  expect(categories).toHaveLength(3);
});

test('renders feature section with feature data', () => {
  const { getAllByTestId } = render(<Home />);
  const featureTitles = getAllByTestId('feature-title');
  const featureDescriptions = getAllByTestId('feature-description');
  
  expect(featureTitles).toHaveLength(3);
  expect(featureDescriptions).toHaveLength(3);
});

test('renders product section with product data', () => {
  const { getAllByTestId } = render(<Home />);
  const productCards = getAllByTestId('product-card');
  
  expect(productCards).toHaveLength(8);
});

