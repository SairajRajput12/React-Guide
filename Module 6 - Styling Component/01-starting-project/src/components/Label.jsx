import { styled } from "styled-components"; 

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:${({invalid})=> invalid ? '#f87171' : '#6b7280'};
`

export default Label; 