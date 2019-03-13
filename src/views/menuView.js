import React, { Component } from 'react';
import { connect } from 'react-redux';
import menuAction from '../actions/menuAction';
import MenuCard from '../components/MenuCard';

export class MenuView extends Component {
  componentWillMount = () => {
    this.props.menuAction();
  };

  render() {
    const { menu } = this.props;
    return (
      <div>
        {menu.map((food, index) => <MenuCard key={index} food={food} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menuReducer.menu,
  message: state.menuReducer.message
});

export default connect(mapStateToProps, { menuAction })(MenuView);
