import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset};

*{
    box-sizing:border-box;
}
li{
    list-style:none;
}
a{
    text-decoration:none;
    color:inherit;
}
body{
    font-family: 'Song Myung', serif;
    font-size:20px;
    background-color:rgba(20,20,20,1);
    color:white;
    padding-top:50px;
}
`;
export default GlobalStyles;
