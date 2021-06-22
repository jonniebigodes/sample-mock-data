import React from "react";
import PropTypes from "prop-types";
export default function SampleComponent({ item }) {
  const { userId, id, title, completed } = item;
  return (
    <div>
      <h1>This is a sample component</h1>
      <div>
        <h2>Has the following props and values</h2>
        <div>
          <h3>id: {id}</h3>
          <h3>userId: {userId}</h3>
          <h3>title: {title}</h3>
          <h3>completed:{completed}</h3>
        </div>
      </div>
    </div>
  );
}

SampleComponent.propTypes = {
  item: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

SampleComponent.defaultProps = {
  item: {
    userId: 1,
    id: 1,
    title: "Something",
    completed: false,
  },
};
