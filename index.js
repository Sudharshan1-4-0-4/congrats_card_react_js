const element = (
  <div className="background">
    <div className="inner">
      <h1 className="heading">Congratulations</h1>
      <div className="innerBackground">
        <div className="content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
            className="image"
          />
          ><h3>Kiran V</h3>
          <p>
            Vishnu institute of Computer Education and Technology Bhimavaram
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="image"
          />
          >
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
