import React, {PureComponent} from "react";

const withUserInput = (Component) => {
  class WithUserInput extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
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
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  return WithUserInput;
};


export default withUserInput;
