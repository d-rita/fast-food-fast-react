import React from 'react';
import { shallow } from 'enzyme';
import { LoginView } from '../LoginView';


describe('Login View', () => {
  it('should render without crashing', () => {
    const props = {};
    const instance = new LoginView(props);
    const wrapper = shallow(instance.render());
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the login action', () => {
    const props = { loginAction: jest.fn() };
    const wrapper = shallow(<LoginView {...props} />);

    const event = {
      preventDefault: jest.fn(),
      target: {
        email: {
          value: 'testemail@mail.com',
        },
        password: {
          value: 'Password1',
        },
      }
    };
    wrapper.instance().handleSubmit(event);
    expect(wrapper.instance().props.loginAction).toHaveBeenCalled();
  });

  it('should call the set state action', () => {
    const props = { loginAction: jest.fn() };
    const wrapper = shallow(<LoginView {...props} />);

    const event = {
      preventDefault: jest.fn(),
      target: {
        email: {
          value: 'testemail@mail.com',
        },
        password: {
          value: 'Password1',
        },
      }
    };
    wrapper.instance().handleChange(event);
    wrapper.instance().setState = jest.fn();
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().setState).toHaveBeenCalled();
  });

  it('should call the login action', () => {
    const props = { loginAction: jest.fn() };
    global.setTimeout = jest.fn();
    const wrapper = shallow(<LoginView {...props} />);

    const event = {
      preventDefault: jest.fn(),
      target: {
        email: {
          value: 'testemail@mail.com',
        },
        password: {
          value: 'Password1',
        },
      }
    };
    wrapper.instance().handleSubmit(event);
    wrapper.instance().props.loginAction();
    expect(global.setTimeout).toHaveBeenCalled();
  });
});
