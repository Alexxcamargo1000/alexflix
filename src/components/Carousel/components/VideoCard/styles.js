import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition:  .3s;

  &:hover span,
  &:focus span{
    opacity: 1;
    text-shadow:#000 4px;
    text-shadow:#000 1px -1px 2px, #000 -1px 1px 2px, #000 1px 1px 2px, #000 -1px -1px 2px;
      }

  &:hover ,
  &:focus {
    transform:scale(1.1);
    border: 0;
    border-radius:0;
    opacity:0.9

  }

  
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px){
    opacity:1;
  }
`;

