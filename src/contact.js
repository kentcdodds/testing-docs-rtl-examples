import React from "react";
import Map from "./map";
function Contact(props) {
  return (
    <div>
      <address>
        Contact {props.name} via <a href={"mailto:" + props.email}>email</a>
        or on their <a href={props.site}>website</a>.
      </address>
      <Map center={props.center} />
    </div>
  );
}

export default Contact;
