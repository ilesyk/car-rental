import styled from "styled-components";
import { theme } from "../../theme";

export const ListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  position: relative;
`;

export const ModelImageWrap = styled.div`
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const ModelName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const ModelNameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const ModelInfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  margin-bottom: 28px;
`;
export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  &:is(:hover, :focus){
    transform: scale(1.15);
  };
  transition: transform 200ms linear;
`;
export const ModelInfo = styled.p`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.colors.secondaryText};
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: -6px;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const SeeMoreButton = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${theme.colors.white};
  border-radius: 12px;
  border: none;
  background: ${theme.colors.blue};
  position: absolute;
  bottom: 0;
  cursor: pointer;
  &:is(:hover, :focus){
    background: #0B44CD;
  };
  transition: background 200ms linear;
`;
