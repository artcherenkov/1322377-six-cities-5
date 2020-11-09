import React, {PureComponent} from "react";

const withUserInput = (Component) => {
  class WithUserInput extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      evt.preventDefault();

      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onFieldChange={this.handleFieldChange}
          comment={this.state}
        />
      );
    }
  }

  return WithUserInput;
};


export default withUserInput;
