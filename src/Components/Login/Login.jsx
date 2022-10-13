import google from "../../Assects/google.png";
import github from "../../Assects/github.png";
import "./Login.css";
import { React, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState({});

  const hendelSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // -------------------------- Google Sign In --------------------------
  const googleProvider = new GoogleAuthProvider();

  const hendelGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  //------------------------------ goole sign in ------------------------------

  return (
    <>
      <div className="loginPage">
        <div className="loginContainer">
          <h1>Sign in to Slack</h1>
          <div className="signInOpctions">
            {user.uid ? (
              <button className="signInBtn" onClick={() => hendelSignOut()}>
                Sign Out
              </button>
            ) : (
              <>
                <button
                  className="signInBtn"
                  onClick={() => hendelGoogleSignIn()}
                >
                  <span>
                    <img src={google} alt="google" />
                  </span>
                  Sign In By Google
                </button>
                <button className="signInBtn">
                  <span>
                    <img src={github} alt="github" />
                  </span>{" "}
                  Sign In By Github
                </button>
              </>
            )}
          </div>
          {user.uid && (
            <>
              <div className="userInfo">
                <h3>User Info</h3>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
