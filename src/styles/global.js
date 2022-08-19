import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
    }

    body{
        font-family: 'Poppins' , sans-serif ;
        background-image: linear-gradient( 83.2deg,  rgba(128,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% );
    }
`;

export default Global;
