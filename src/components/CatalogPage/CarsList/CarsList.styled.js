import styled from "styled-components";

export const CarsListWrapper = styled.ul`
  display: flex;
  gap: 50px 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`;

export const LoadMoreButton = styled.button`
color: #3470FF;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              text-decoration-line: underline;
              border: none;
              background: transparent;
              margin: 0 auto 150px;
              cursor: pointer;
              display: block;
              &:is(:hover, :focus) {
                background: #0B44CD;
              };
              transition: background 200ms linear;
`