import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    if (response) {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      });
      this.props.getDataUserFacebook(response);
    } else {
      return <> </>;
    }
  };

  componentClicked = () => console.log("login using facebook");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          className="mb-2"
          style={{
            width: "100%",
            background: "#f4f4f4",
            padding: "15px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h5 className="my-0">Welcome {this.state.name} !</h5>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          cssClass="btn btn-primary w-100 py-2 mb-2"
          appId="280111876594452"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        >
          <i className="fab fa-google fa-lg text-white mr-3" />
        </FacebookLogin>
      );
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
