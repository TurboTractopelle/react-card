import React, { Component } from "react";
import Scheader from "./Scheader";
import Sccontent from "./Sccontent";
import Scsocial from "./Scsocial";

class SocialCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      status: { talk: false, reply: false, like: false }
    };
  }

  render() {
    const { title, author, social, content } = this.state.data;
    const { status } = this.state;

    return (
      <article>
        <Scheader title={title} author={author} />
        <Sccontent content={content} />
        <Scsocial social={social} status={status} />
      </article>
    );
  }
}

export default SocialCard;
