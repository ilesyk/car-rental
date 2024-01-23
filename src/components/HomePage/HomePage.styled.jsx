import styled from "styled-components";

export const HomePageWrap = styled.div`
  padding: 20px;
  width: 100%;
`;

export const HomePageHead = styled.h1`
  max-width: 250px;
  font-size: 48px;
`;
export const HeadWrap = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const HomePageTags = styled.h2`
  margin: 0 auto 40px;
  max-width: 300px;
  line-height: 1.5;
  text-align: center;
`;

export const HomePageText = styled.p`
  max-width: 500px;
  line-height: 1.5;
  margin-bottom: 90px;
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
`;

export const GoToCatalogButton = styled.button`
margin: 0 auto;
              display: flex;
              height: 48px;
              padding: 14px 44px;
              justify-content: center;
              border: none;
              align-items: center;
              border-radius: 12px;
              background: #3470FF;
              color: white;
              cursor: pointer;
              &:is(:hover, :focus) {
                background: #0B44CD;
              };
              transition: background 200ms linear;
`