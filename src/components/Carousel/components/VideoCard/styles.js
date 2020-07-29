import styled from 'styled-components';
import {VideoTitle} from '../../styles'
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
    opacity: 1

  }
  &:hover ,
  &:focus {
    transform:scale(1.1);
    border: 0;
    border-radius:0;
    opacity:0.8

  }

  
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

