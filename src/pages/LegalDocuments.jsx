import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import Footer from "../components/Footer/Footer";

const LegalDocuments = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="content">
                <h1>Terms of Service</h1>
                <p>BlaBlaBla</p>
                <hr />
                <h1>Privacy Policy document</h1>
                <p>BlaBlaBla</p>
            </div>
            <Footer></Footer>
        </ThemeProvider>
    );
};

export default LegalDocuments;
