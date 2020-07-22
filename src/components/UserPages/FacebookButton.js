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
          cssClass="btn btn-primary facebook-button"
          // based on your id in facebook developers website, just go to "your app navbar".
          appId="567549550589857"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

export default Facebook;
