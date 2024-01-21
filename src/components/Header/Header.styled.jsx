
import styled from "styled-components";
import { theme } from "../theme";
export const HeaderWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px 0px;
    background-color: ${theme.colors.blue};
    margin-bottom: 30px;
    position: relative;
`;

export const HeaderLink = styled.p`
  color: ${theme.colors.white};
font-size: 18px;
`;

