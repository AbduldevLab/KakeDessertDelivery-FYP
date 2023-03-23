
import '../../setupTests.js'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import Tc from '../../pages/T&C';

afterEach(() => {
    cleanup();
});

describe('Tc component', () => {
    it('renders without crashing', () => {
      render(<Tc />);
    });
});
