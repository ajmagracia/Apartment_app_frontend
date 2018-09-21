import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Apartment from '../Apartment'

Enzyme.configure({ adapter: new Adapter() });
let apartment = {
    id: 1,
    street1: "street1",
    city: "city",
    postal_code: 23524,
    state: "state",
    country: "country"
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Apartment apartment={apartment}/>, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it('has and displays an address', ()=>{
  const component = mount(<Apartment apartment={apartment}/>)
  expect(component.find('li.address').text()).toContain("Address:")
  expect(component.props()).toHaveProperty('apartment')
  expect(component.props().apartment).toHaveProperty('city')
  expect(component.props().apartment).toHaveProperty('postal_code')
  expect(component.props().apartment).toHaveProperty('state')
  expect(component.props().apartment).toHaveProperty('country')
})

it('displays an image', ()=>{
  const component = mount(<Apartment apartment={apartment}/>)
  expect(component.find('img').length).toBe(1)
})
