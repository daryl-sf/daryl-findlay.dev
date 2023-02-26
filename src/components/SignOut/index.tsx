import { useAuth } from "../../lib/firebase";

const SignOut = () => {
  const handeSignOut = () => {
    useAuth().signOut();
  };

  return (
    <button type="button" onClick={handeSignOut}>Sign Out</button>
  );
};

export default SignOut;
