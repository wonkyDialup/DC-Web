import styled from "styled-components";
import { Link } from "react-router-dom"

export const SidebarContainer = styled.div`
grid-area: sidebar;
width: 15em;
font-family: 'Raleway', sans-serif;
background: rgb(34,193,195);
background: linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%);
margin:40px auto;
padding:10px 0px 20px 0px;
border:1px solid #111;
border-radius:4px;
box-shadow:0px 4px 5px rgba(0, 0, 0, 0.75);
`;

export const SidebarLink = styled(Link)`
font-size:20px;
font-weight:300;
text-align:center;
color: black;
position:relative;
height:40px;
line-height:40px;
margin-top:20px;
overflow:hidden;
width:90%;
margin-left:5%;
cursor:pointer;
display:flex;
transition:all 0.75s;
transform:translateY(100%) translateZ(0);
transition-delay:all 0.25s;
&:hover,
&:active {
  letter-spacing: 5px;
}
&:after,
&:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}
&:hover:after,
&:hover:before{
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

&:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
`;