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
  gap: 2rem;
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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("SIGN UP FAILED!", {
        position: "top-center",
        style: {
          background: CONSTANTS.primaryColor,
          color: CONSTANTS.secodaryColor,
          fontWeight: "bold",
          borderRadius: "8px",
        },
      });
      return;
    }
    toast.success("YOU HAVE SIGNED UP !", {
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePass2Change = (e) => {
    setPassword2(e.target.value);
  };

  return (
    <Container>
      <ImageHolder style={{ flex: "1" }}>
        <Image src={LoginImage} alt="login image" />
      </ImageHolder>
      <Form onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: "2rem" }}>Sign Up</h1>
        <label htmlFor="inp-name">Enter Name: </label>
        <Input
          id="inp-name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
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

        <label htmlFor="inp-pass2">Re-Enter Password:</label>
        <Input
          id="inp-pass2"
          type="password"
          minLength={8}
          value={password2}
          onChange={handlePass2Change}
        />
        <Button style={{ marginBottom: "2rem" }}>SIGN UP</Button>
        <p>
          Already have an account?{" "}
          <Link style={{ textDecoration: "underline" }} to="/login">
            Login Here
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
