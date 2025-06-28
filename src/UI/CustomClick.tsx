import { ReactNode } from 'react';
import { ClickSpark } from '@/Reactbits';

interface CustomClickProps {
  children: ReactNode;
}

export const CustomClick = ({ children }: CustomClickProps): ReactNode => {
  return (
    <ClickSpark
      sparkColor='#EFBF04'
      sparkSize={50}
      sparkRadius={50}
      sparkCount={20}
      duration={400}
    >
      {children}
    </ClickSpark>
  );
};
