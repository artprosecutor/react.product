import React from "react";
import Star from "./Star";

class StarRaitingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  render() {
    return (
      <>
        {[...new Array(5)].map((star, index) => {
          return (
            <Star
              key={index}
              className={`stars ${
                index <= this.state.rating ? "active" : null
              }`}
              onClick={() => {
                this.setState({ ...this.state, rating: index });
              }}
            ></Star>
          );
        })}
      </>
    );
  }
}

export default StarRaitingClass;
