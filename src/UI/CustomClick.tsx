import { ReactNode } from 'react';
import { ClickSpark } from '@/Reactbits';

interface CustomClickProps {
  children: ReactNode;
}

export const CustomClick = ({ children }: CustomClickProps): ReactNode => {
  return (
    <ClickSpark
      sparkColor='#EFBF04'
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
};
