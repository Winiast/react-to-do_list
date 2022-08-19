import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
    }

    body{
        font-family: 'Poppins' , sans-serif ;
        background-color: rgb(10,1,1, 0.2);
        background-image: linear-gradient( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% );
    }
`;

export default Global;
