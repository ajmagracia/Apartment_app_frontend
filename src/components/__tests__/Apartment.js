import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Apartment from '../Apartment'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Apartment />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it('shows a list of apartments', () => {
    const component = mount(<ApartmentIndex />);
    expect(component.find('Apartment').length).toBeGreaterThanOrEqual(1);
})
