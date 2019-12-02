import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const LoadingIconBase = styled.span`
  color: ${(props) => props.theme.colors.greyScale.black};
  animation: ${rotate} 2s linear infinite;
`;

const LoadingIconFixed = styled(LoadingIconBase)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading = () => {
  return (
    <LoadingIconFixed>
      <FontAwesomeIcon icon="circle-notch" size="4x" />
    </LoadingIconFixed>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(${(props) => props.theme.colors.overlay}, 0.4);
`;

export const LoadingOverlay = () => {
  return (
    <Overlay>
      <LoadingIconBase>
        <FontAwesomeIcon icon="circle-notch" size="4x" />
      </LoadingIconBase>
    </Overlay>
  );
};
