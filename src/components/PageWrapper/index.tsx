import ArrowLeft from 'assets/svg/ArrowLeft';
import React, { FC, AllHTMLAttributes } from 'react';
import { cutLongString } from 'utils';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  onClose: () => void;
}

const PageWrapper: FC<IProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="h-16 flex justify-center items-center py-4">
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0" onClick={props.onClose}>
            <ArrowLeft />
          </div>
          <div className="flex justify-center items-center font-semibold text-lg">
            {cutLongString(props.title, 30)}
          </div>
        </div>
      </div>
      <div className="w-full h-full">{props.children}</div>
    </div>
  );
};

export default PageWrapper;
