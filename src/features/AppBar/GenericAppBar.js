import React from 'react';
import { Appbar, H2 } from '@app/styles';

function AppBarComponent({ scene, navigation }) {
  const {
    descriptor: {
      options: { title },
    },
  } = scene;

  return (
    <Appbar>
      <H2>{title}</H2>
    </Appbar>
  );
}

export default AppBarComponent;
