import styled from "styled-components";
import { StyledLink } from "../../style/theme";

const name = "MIT Licence";
const url = "https://opensource.org/license/mit/";

const LicenceLink = styled(StyledLink)`
    color: #63a1ff;
    &:visited {
        color: #bc43be;
    }
`;

const Licence = () => {
    return (
        <>
            <p>
                Copyright &copy; {new Date().getFullYear()} GitBoard. Licensed
                under the{" "}
                <LicenceLink href={url} target="_blank">
                    {name}
                </LicenceLink>
                .
            </p>
        </>
    );
};

export default Licence;
