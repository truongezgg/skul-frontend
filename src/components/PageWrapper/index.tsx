import ArrowLeft from 'assets/svg/ArrowLeft';
import React, { FC, AllHTMLAttributes } from 'react';
import { cutLongString } from 'utils';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  onClose: () => void;
}

const PageWrapper: FC<IProps> = ({ onClose, title, ...props }) => {
  return (
    <div {...props}>
      <div className="h-16 flex justify-center items-center py-4">
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0" onClick={onClose}>
            <ArrowLeft />
          </div>
          <div className="flex justify-center items-center font-semibold text-lg">
            {cutLongString(title, 30)}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default PageWrapper;
