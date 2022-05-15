import React, { AllHTMLAttributes, FC } from 'react';
import CreditCardSkeleton from './CreditCardSkeleton';
import cls from 'classnames';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}
const CreditCard: FC<IProps> = (props) => {
  return (
    <CreditCardSkeleton className={cls('blur-[1px]', props.className)}>
      <div className="h-10 w-full">
        <div className="w-18 h-full flex justify-center items-center">
          <div className="flex w-8 relative">
            <div className="absolute left-0 top-0 w-5 h-5 border border-white rounded-full"></div>
            <div className="absolute right-0 top-0 w-5 h-5 border border-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="h-25 flex justify-center items-center">
        <div className="text-[2rem] text-white font-bold">*** *** *** ₫</div>
      </div>
      {/* <div className='bg-[#008EFF]'></div> */}
    </CreditCardSkeleton>
  );
};

export default CreditCard;
