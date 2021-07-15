import styled from "styled-components";
import { Button } from "reactstrap";

export const CustomButton = styled(Button)`
  border: none;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(0, 123, 255, 1) 100%
  );
  font-weight: bold;
`;
