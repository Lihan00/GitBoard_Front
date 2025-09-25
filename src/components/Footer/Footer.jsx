import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme, { StyledLink } from "../../style/theme";
import Licence from "./Licence";

const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${(props) => props.theme.primaryColor.background.black};
`;

const FooterContent = styled.div`
    padding: 50px 5vw 50px 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 300;
`;

const DevInfos = styled.div`
    text-align: right;
`;

const LegalDocs = styled.div`
    text-align: left;
    margin-left: 10px;
    margin-right: 10px;
`;

const LogoCopyright = styled.div`
    text-align: left;
`;

const Logo = styled.div`
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 50px;
`;

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <StyledFooter>
                <FooterContent>
                    <DevInfos>
                        <div className="name">Developer: WeAreAUNAE</div>
                        <div className="contact">
                            <StyledLink>
                                Contact: oss.aunae@gmail.com
                            </StyledLink>
                        </div>
                    </DevInfos>

                    <LegalDocs>
                        <div className="terms">
                            <StyledLink target="_blank">
                                Terms of Service
                            </StyledLink>
                        </div>
                        <div className="policy">
                            <StyledLink target="_blank">
                                Privacy Policy
                            </StyledLink>
                        </div>
                    </LegalDocs>

                    <LogoCopyright>
                        <Logo>GitBoard</Logo>
                        <Licence />
                    </LogoCopyright>
                </FooterContent>
            </StyledFooter>
        </ThemeProvider>
    );
};

export default Footer;
