import styled from "styled-components";

export const ModalClose = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const ModalHeaders = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43; 
  margin-bottom: 8px;
`;
export const CarDescription = styled.p`
color: #121417;
font-size: 14px;
font-weight: 400;
line-height: 1.43;
margin-bottom: 24px;
`
export const RentalLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;

export const RentalConditionsWrap = styled.div`
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`
export const RentalCondition = styled.p`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;


