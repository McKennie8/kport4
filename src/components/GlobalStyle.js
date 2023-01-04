import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html {
    @media (max-width: 1700px) {
        font-size: 75%;
    }
    
}


body{
    background: #282727;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;

}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #4e8183;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Poppins', sans-serif;
    &:hover{
        background-color: white;
        color: #4e8183;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
       
    }
    h5 {
        padding-top: 20rem;
    }
    a{
        font-size: 1.1rem;
        font-family: 'Poppins', sans-serif;
       
            

        }
    
    span{
        font-weight: bold;
        color:#4e8183
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    @media (max-width: 480px) {
        h2{
        font-weight: lighter;
        font-size: 2rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
       
    }
    h5 {
        padding-top: 20rem;
    }
    a{
        font-size: 3rem;
        padding: 0rem 0rem;
        text-decoration: none;
            color: white;
            font-family: 'Poppins', sans-serif;
            
            
    }
    
    span{
        font-weight: bold;
        color:#4e8183
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.1rem;
        line-height: 150%;
    }
    button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #4e8183;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Poppins', sans-serif;
    &:hover{
        background-color: white;
        color: #4e8183;
    }
}
    }

`;

export default GlobalStyle;
