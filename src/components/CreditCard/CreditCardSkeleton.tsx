import React, { FC, AllHTMLAttributes } from 'react';
import cls from 'classnames';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  bgClassName?: string;
}

const CreditCardSkeleton: FC<IProps> = ({ bgClassName, className, children }) => {
  return (
    <div className={`shadow w-81 h-50 rounded-3xl ${cls(bgClassName || 'bg-blue-500', className)}`}>
      {children}
    </div>
  );
};

export default CreditCardSkeleton;
