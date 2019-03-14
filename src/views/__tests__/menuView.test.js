import React from 'react';
import { shallow } from 'enzyme';
import { MenuView } from '../menuView';


describe('Register View', () => {
  const props = {
    menuAction: jest.fn(),
    menu: [],
    message: ''
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<MenuView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
