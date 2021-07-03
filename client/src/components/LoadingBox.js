import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import styled from 'styled-components';


const SBox = styled(Box)`
  margin: 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;

  display: flex;
  flex-flow: column;
  align-items: center;

  *:first-child {
    margin-bottom: 20px;
  }

  * {
    color: inherit;
    display: block;
  }
`

const LoadingBox = ({ loadingMsg }) => {
  return (
    <SBox>
      <Typography variant={'body1'}>{loadingMsg}</Typography>
      <CircularProgress />
    </SBox>
  );
};

export default LoadingBox;
