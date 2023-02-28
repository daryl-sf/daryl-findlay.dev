import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../lib/firebase";

const SignInButton = ({ redirect = () => null }: { redirect?: () => void}) => {
  const handleSignIn = () => {
    signInWithPopup(useAuth(), new GoogleAuthProvider()).then(redirect);
  };

  return (
    <button type="button" onClick={handleSignIn}>Sign In With Google</button>
  );
};

export default SignInButton;
