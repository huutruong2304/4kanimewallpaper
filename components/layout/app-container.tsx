import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return <div className="container mx-auto min-h-screen px-4 py-4 pb-12">{children}</div>;
};

export default AppContainer;
