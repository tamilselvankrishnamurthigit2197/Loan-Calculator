import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./Pages/Home";
import Exchange from "./Pages/Exchange";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";

export function Route1(){
    return(
        <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
        </>
    )
}
    