import styled from "styled-components";

export const HeaderContainer = styled.div`
background: rgb(34,193,195);
border:1px solid #111;
box-shadow:0px 4px 5px rgba(0, 0, 0, 0.75);
background: linear-gradient(90deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%);;
grid-area: header;
font-family: 'Raleway', sans-serif;
justify-content: right;
align-items: center;
display: flex;
justify-content: space-around;
flex-direction: row;
`;

export const UserButton = styled.button`
font-size: 1.3rem;
border-radius: 25px;
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

export const UserPicture = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

export const HeaderHeader = styled.h1`
  color: #fb6b90;
  font-family: "Roboto", sans-serif;
`;

export const HeaderItem = styled.div`
  color: #efebe0;
  font-size: 1.5em;
  margin: 1rem;
`;