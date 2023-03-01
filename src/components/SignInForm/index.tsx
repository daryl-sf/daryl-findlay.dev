import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { useAuth } from "../../lib/firebase";

const SignInForm = ({ redirect = () => null }: { redirect?: () => void}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    createUserWithEmailAndPassword(useAuth(), email, password)
      .then(redirect);
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(useAuth(), email, password);
  };

  return (
    <form>
      <label htmlFor="email">Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleSignUp}>Sign Up</button>{" "}
      <button type="button" onClick={handleSignIn}>Sign In</button>
    </form>
  );
};

export default SignInForm;
