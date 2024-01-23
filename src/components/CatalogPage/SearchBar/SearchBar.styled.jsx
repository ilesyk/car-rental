import styled from "styled-components";
export const ResetFiltersButton = styled.button`
color: #3470FF;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.5;
              text-decoration-line: underline;
              border: none;
              background: transparent;
              cursor: pointer;
              display: block;
              &:is(:hover, :focus) {
                color: #0B44CD;
              };
              transition: color 200ms linear;
`;

export const SearchButton = styled.button`
display: flex;
          max-width: 136px;
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
          transition: background 200ms linear;`;