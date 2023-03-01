import { useNavigate } from "react-router";
import { Google } from "../../components/SignInButtons";
import SignInForm from "../../components/SignInForm";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <section>
      <SignInForm redirect={() => navigate("/")} />
      <hr />
      <Google redirect={() => navigate("/")} />
    </section>
  );
};

export default SignIn;
