import React from 'react';
import { shallow } from 'enzyme';
import { RegisterView } from '../registerView';


describe('Register View', () => {
  let wrapper;
  const mockRegisterfn = jest.fn();
  const historyMock = { push: jest.fn() };

  afterEach(() => {
    mockRegisterfn.mock.calls = [];
  });
  describe('When form is submitted', () => {
    wrapper = shallow(
      <RegisterView
        registerAction={mockRegisterfn}

        history={historyMock}
      />
    );
    it('Should register a user', () => {
      wrapper.find('Register').dive().find('#registerUser').simulate('change', { target: { username: 'rita' } });
      wrapper.find('Register').dive().find('#registerUser').simulate('submit', { preventDefault() {} });
      expect(mockRegisterfn.mock.calls.length).toBe(1);
    });
  });
});

describe('Register View', () => {
  const props = {
    username: 'diana',
    email: 'diana@gmail.com',
    password: 'asdqwert',
    admin: false,
  };
  it('should render without crashing', () => {
    const wrapper = shallow(<RegisterView {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        value: 'username',
        name: 'diana',
      }
    };
    const wrapper = shallow(<RegisterView {...props} />);
    wrapper.instance().handleChange(event);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().setState).toBeCalled();
  });
});
