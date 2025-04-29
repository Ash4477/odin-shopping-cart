import styled from "styled-components";
import CONSTANTS from "../data/constants";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { ImageHolder, Image, Button } from "../components/UIComponents";
import LoginImage from "../assets/login.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  gap: 1rem;
`;

const Form = styled.form`
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const handleSubmit = (e) => {
  e.preventDefault();
  toast.success("YOU ARE LOGGED IN !", {
    position: "top-center",
    style: {
      background: CONSTANTS.primaryColor,
      color: CONSTANTS.secodaryColor,
      fontWeight: "bold",
      borderRadius: "8px",
    },
    icon: <FaCheckCircle style={{ fontSize: "1.5rem" }} />,
  });
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <ImageHolder style={{ flex: "1" }}>
        <Image src={LoginImage} alt="login image" />
      </ImageHolder>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "2rem" }}>Login</h1>
        <label htmlFor="inp-email">Enter Email: </label>
        <Input
          id="inp-email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="inp-pass">Enter Password:</label>
        <Input
          id="inp-pass"
          type="password"
          minLength={8}
          value={password}
          onChange={handlePassChange}
        />
        <Button style={{ marginBottom: "2rem" }}>LOGIN</Button>
        <p>
          Don't have an account?{" "}
          <Link style={{ textDecoration: "underline" }} to="/signup">
            Sign Up Here
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
