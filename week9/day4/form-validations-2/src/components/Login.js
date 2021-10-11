import React, { useState } from "react";
import {FormContainer, Input, InputBtn, FormInput, Header, MainContainer, Links} from "../styled-components/FormStyle";

export default function Form() {
  const [formData, setFormData] = useState({});

  return (
  <MainContainer>
    <FormContainer>
      <Header>Please Log In to Continue!</Header>
      <FormInput>
        <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="username"
          name="username"
          value={formData?.username}
        />
        {/* <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          name="email"
          value={formData?.email}
        /> */}
        <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="password"
          name="password"
          value={formData?.password}
        />
        {/* <FormContainer> */}
          <InputBtn type="submit" />
        {/* </FormContainer> */}
          <br />
        <Links href="">Forgot Password?</Links>
        <p>New User? <Links href="">Sign Up!</Links></p>
      </FormInput>
      </FormContainer>
    </MainContainer>
    
  );
}