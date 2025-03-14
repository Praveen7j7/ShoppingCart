const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Leave a star on Github if this repository was useful :)</small>
    </p>
    <a
      className="github-button"
      href="https://github.com/Praveen7j7/ShoppingCart"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star https://github.com/Praveen7j7/ShoppingCart on GitHub"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;
