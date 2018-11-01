import React from "react";

const Scsocial = ({ social, status }) => {
  console.log(status);
  return (
    <footer>
      <div>
        talk <span>{social.talk}</span>
      </div>
      <div>
        reply <span>{social.reply}</span>
      </div>
      <div>
        like <span>{social.like}</span>
      </div>
    </footer>
  );
};

export default Scsocial;
