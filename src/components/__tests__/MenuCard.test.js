import React from 'react';
import { shallow } from 'enzyme';
import MenuCard from '../MenuCard';


describe('Menu Card', () => {
  let props;
  it('should render without crashing', () => {
    props = {
      food: {
        food_name: 'chicken',
        food_price: 12000
      }
    };
    const wrapper = shallow(<MenuCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
