import { useNavigate } from "react-router";
import SignInButton from "../../components/SignInButton";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <section>
      <SignInButton redirect={() => navigate("/")}/>
    </section>
  );
};

export default SignIn;
