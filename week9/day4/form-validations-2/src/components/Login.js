import React, { useState } from "react";
import {FormContainer, Input, InputBtn, FormInput, Header, MainContainer, Links} from "../styled-components/FormStyle";
import { createClient } from '@supabase/supabase-js'
import { useHistory } from "react-router-dom";

const supabase = createClient("https://vljtwukvlmvxxrjptktf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA1Njg3NSwiZXhwIjoxOTQ5NjMyODc1fQ.P7IDG9a28x07fqBmdYDsDzkeHu0uezgRDWSgVXPgObc");
    


export default function Form(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  console.log(formData);



  const login = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: formData.username,
      password: formData.password,
    });
    if (session) {
      history.push("/dashboard");
    } else {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email: formData.username,
      password: formData.password,
    });
    if (user) {
      history.push("/login");
    } else {
      alert(error.message);
    }
  }


  return (
  <MainContainer>
    <FormContainer>
      <Header>Login to the site asshole</Header>
      <FormInput>
        <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="email"
          placeholder="dumb ass username"
          name="username"
          value={formData?.username}
        />
        <Input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          type="password"
          placeholder="dumb ass password"
          name="password"
          value={formData?.password}
        />
      
      {props?.register ? (
            <InputBtn
              onClick={(e) => register(e)}
              type="submit"
              value="Register"
            />
              
          ) : (
            <InputBtn onClick={(e) => login(e)} type="submit" value="Log In"/>  
          )}
          
        
          <br />
        <Links href="">Forgot Password?</Links>
        <p>New User? <Links href="/register">Sign Up!</Links></p>
      </FormInput>
      </FormContainer>
    </MainContainer>
    
  );
}