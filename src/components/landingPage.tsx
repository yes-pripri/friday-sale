import { ReactElement } from "react";
import {Off50} from "./off50";

export const LandingPage = (): ReactElement => {

    const styles: React.CSSProperties = {
        "display": "flex",
        "flexDirection": "column",
        "gap": "0px",
        "width": "100%",
        "maxWidth":"100%",
        "minHeight":"100vh",
        "height": "100%",
        "background": "#33CAAF",
    }

       return (
        <div style={styles}>
            <Off50 />
        </div>
    
    )};