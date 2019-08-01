import React from "react"

const RenderUser = props => (
    <section>
      <img src={props.imageUrl} alt={props.firstName}/>
      <p>{props.firstName} {props.lastName}</p>
    </section>
  );

export default RenderUser;