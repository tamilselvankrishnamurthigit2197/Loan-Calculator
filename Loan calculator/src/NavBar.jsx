import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function NavBar() {
    return(
        <>
        <Link to="/">
            <Button> HOME</Button>
        </Link>
        <Link to="/exchange">
            <Button> EXCHANGE RATES (LIVE)</Button>
        </Link>
        <Link to="/about">
            <Button> ABOUT</Button>
        </Link>
        <Link to="*">
            <Button> ERROR PAGE</Button>
        </Link>
        </>
    )
}