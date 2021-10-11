import styled from "styled-components";

export const MainContainer = styled.div`
grid-area: formcontainer;
width: 100vw;
`
export const FormContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background: rgb(34,193,195);
  background: linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%);
  font-family: "Roboto", sans-serif;
  width: 40vw;
  justify-content: center;
  align-items: center;
  height: 60%;
  margin: 100px auto;
  border:1px solid #111;
  box-shadow:0px 4px 5px rgba(0, 0, 0, 0.75);
  background-color: #FFFFFF;
  border-radius: 25px;
`;

export const Header = styled.h1`
text-align: center;
  font-family: 'open sans', sans-serif;
  padding: 2rem 0;
  margin: 0;
  font-size: 2rem;
`
export const Links = styled.a`
font-family: 'Raleway', sans-serif;
color: black;
text-decoration: none;
transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
`

export const FormInput = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  max-width: 40%;
`

export const Input = styled.input`
width: 100%;
box-sizing: border-box;
border: none;
font-size: 1.3rem;
border-radius: 25px;
padding-left: 1.5rem;
padding-bottom: 1rem;
padding-top: 1rem;
box-shadow: inset 0px -3px 0px 0px rgba(187,187,187,0.2);
transition: box-shadow 0.2s ease-in;
&:focus {
  box-shadow: inset 0px -3px 0px 0px rgba(34,193,195,0.7);
   outline: none;
}
&::-webkit-input-placeholder{
  opacity: 1;
  transition: opacity 0.25s ease-out;
}
&:hover::-webkit-input-placeholder,
&:focus::-webkit-input-placeholder{
  opacity: 0;
}
`;


export const InputBtn = styled.input`
border-radius: 25px;
width: 80%;
align-text: center;
height: 40px;

font-size: 1.3rem;
color: white;
font-weight: 700;
background: rgb(34,193,195);
background: linear-gradient(90deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%);
border: 0px;
cursor: pointer;
transition: opacity 0.25s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;