import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../lib/firebase";

const SignInButton = () => {
  const handleSignIn = () => {
    signInWithPopup(useAuth(), new GoogleAuthProvider()).then(console.log);
  };

  return (
    <button type="button" onClick={handleSignIn}>Sign In With Google</button>
  );
};

export default SignInButton;
