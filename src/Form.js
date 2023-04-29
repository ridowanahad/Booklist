import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      publisherName: "",
      publisherAge: "",
      pageNumber: "",
      publishDate: "",
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, publisherName, publisherAge, pageNumber, publishDate } =
      this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label for="publisherName">Publisher Name</label>
        <input
          type="text"
          name="publisherName"
          id="publisherName"
          value={publisherName}
          onChange={this.handleChange}
        />
        <label for="publisherAge">Publisher Age</label>
        <input
          type="number"
          name="publisherAge"
          id="publisherAge"
          value={publisherAge}
          onChange={this.handleChange}
        />
        <label for="pageNumber">Page Number</label>
        <input
          type="number"
          name="pageNumber"
          id="pageNumber"
          value={pageNumber}
          onChange={this.handleChange}
        />
        <label for="publishDate">Publish Date</label>
        <input
          type="date"
          name="publishDate"
          id="publishDate"
          value={publishDate}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
