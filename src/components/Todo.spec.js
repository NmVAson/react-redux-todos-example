import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

/*
 * For more details on mount and render,
 * https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8
 */
describe('Todo', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<Todo text={"Homework"} />).contains("Homework")).toBe(true);
    });
});
