import styled from '@emotion/styled';

const StyledButton = styled.button`
  border: 1px solid currentColor;
  background: ${({ variant }) => (variant === 'filled' ? '#171717' : 'transparent')};
  color: ${({ variant }) => (variant === 'filled' ? '#fff' : 'inherit')};
  padding: 0.85rem 1.1rem;
  min-height: 46px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.73rem;
  transition: 180ms ease;

  &:hover { opacity: 0.72; }
  &:disabled { opacity: 0.45; cursor: not-allowed; }
`;

export function Button({ variant = 'outline', ...props }) {
  return <StyledButton variant={variant} {...props} />;
}
