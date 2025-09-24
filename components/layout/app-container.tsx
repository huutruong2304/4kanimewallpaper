import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return <div className="container mx-auto min-h-screen">{children}</div>;
};

export default AppContainer;
