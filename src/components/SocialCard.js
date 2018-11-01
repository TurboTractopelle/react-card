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

  handleSocial = param => {
    this.setState(prevState => {
      let modif = 0;
      prevState.status[param] ? (modif = -1) : (modif = +1);

      return {
        data: {
          ...prevState.data,
          social: {
            ...prevState.data.social,
            [param]: prevState.data.social[param] + modif
          }
        },
        status: { ...prevState.status, [param]: !prevState.status[param] }
      };
    });
  };

  render() {
    const { title, author, social, content } = this.state.data;
    const { status } = this.state;

    return (
      <article>
        <Scheader title={title} author={author} />
        <Sccontent content={content} />
        <Scsocial
          social={social}
          status={status}
          handleSocial={this.handleSocial}
        />
      </article>
    );
  }
}

export default SocialCard;
