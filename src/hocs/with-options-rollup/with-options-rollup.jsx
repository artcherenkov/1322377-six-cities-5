import React, {PureComponent} from "react";

const withOptionsRollup = (Component) => {
  class WithOptionsRollup extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false
      };

      this.handleRollupToggle = this.handleRollupToggle.bind(this);
    }

    handleRollupToggle(evt) {
      evt.preventDefault();
      this.setState({
        isOpened: !this.state.isOpened
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isOpened={this.state.isOpened}
          onRollupToggle={this.handleRollupToggle}
        />
      );
    }
  }

  return WithOptionsRollup;
};


export default withOptionsRollup;
