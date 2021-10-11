import styled from "styled-components";

export const DashboardContainer = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
gap: 20px;
width: 100vw;
height: 100vh auto;
`
export const Title = styled.h1`
font-family: 'Raleway', sans-serif;
`



export const Charts = styled.div`
height: 30vh;
width: 30vh;
padding-bottom: 5vw auto;
`

export const Work = styled.div`
height: 30vh auto;
width: 30vw auto;
padding-left: 10vw auto;
`

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`