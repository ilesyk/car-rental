import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
export const HeaderWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${theme.colors.blue};
  padding: 20px;
  margin-bottom: 30px;
  position: relative;
`;

export const HeaderLink = styled(NavLink)`
  color: ${theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  position: relative;
  &.active {
    &::after {
      content: '';
      display: block;
      height: 4px;
      background-color: white;
      position: absolute;
      border-radius: 2px;
      top: 28px;
      left: 0;
      right: 0;
    }
  }
`;

export const HeaderLinkWrap = styled.div`
display: flex;
 gap:10px;
 @media (min-width: 768px) {
  gap: 30px;
}
`

