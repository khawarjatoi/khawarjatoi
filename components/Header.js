import React, { Component } from "react";
import Nav from "./Nav";

import MainSidebar from "./styles/Sidebar/MainSidebar";
import ToggleIcon from './styles/Sidebar/ToggleIcon';
import ToggleButton from './styles/Sidebar/ToggleButton';

class Header extends Component {
  state = {
    showSidebar: true,
    isTablet: false
  };

  updateViewState = () => {
    if (!this.state.isTablet && window.innerWidth < 831) {
      this.setState({
        isTablet: true,
        showSidebar: false
      });
    } else if (window.innerWidth > 831) {
      this.setState({
        isTablet: false,
        showSidebar: true
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateViewState);
    this.updateViewState();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState);
  }

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
    // OR
    // this.setState(prev => ({ showSidebar: !prev.showSidebar }));
  };
  render() {
    const { showSidebar } = this.state;

    return (
      <MainSidebar isVisible={showSidebar}>
        <Nav />
        <ToggleButton onClick={this.toggleSidebar}>
          <ToggleIcon isVisible={showSidebar}>
            <span className="line line-angle1"></span>
            <span className="line line-angle2"></span>
          </ToggleIcon>
        </ToggleButton>
      </MainSidebar>
    );
  }
}

export default Header;
