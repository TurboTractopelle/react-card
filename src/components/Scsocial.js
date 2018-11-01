import React from "react";

const Scsocial = ({ social, status, handleSocial }) => {
  const handleState = param => e => {
    handleSocial(param);
  };

  return (
    <footer>
      <div className={status.talk && "active"} onClick={handleState("talk")}>
        talk <span>{social.talk}</span>
      </div>
      <div className={status.reply && "active"} onClick={handleState("reply")}>
        reply <span>{social.reply}</span>
      </div>
      <div className={status.like && "active"} onClick={handleState("like")}>
        like <span>{social.like}</span>
      </div>
    </footer>
  );
};

export default Scsocial;
