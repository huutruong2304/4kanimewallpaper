import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const SectionWrapper = ({ title, children }: Props) => {
  return (
    <div className="my-2 md:my-8">
      <h1 className="text-2xl font-bold text-orange-500 uppercase border-l-4 pl-2 border-orange-500  mb-8 w-max pr-4">{title}</h1>
      {children}
    </div>
  );
};

export default SectionWrapper;
