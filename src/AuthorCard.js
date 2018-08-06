import React, { Component } from "react";

import AuthorList from "./AuthorList";

class AuthorCard extends Component {
  render() {
    const authorsNames = this.props.authors.map(author => (
      <AuthorList key={author.first_name} author={author} />
    ));
    return <div className="row">{authorsNames}</div>;
  }
}

export default AuthorCard;
