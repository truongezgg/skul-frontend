import React, { FC, AllHTMLAttributes } from 'react';
import cls from 'classnames';
import { CommonButtonType } from 'types/enum';

interface IProps extends AllHTMLAttributes<HTMLButtonElement> {
  type: CommonButtonType;
}

const CommonButton: FC<IProps> = ({ type, children, ...props }) => {
  const BTN_BG = {
    [`${CommonButtonType.PRIMARY}`]: 'bg-violet-500',
    [`${CommonButtonType.SECONDARY}`]: 'bg-violet-200',
  };
  const BTN_TEXT_COLOR = {
    [`${CommonButtonType.PRIMARY}`]: 'text-white',
    [`${CommonButtonType.SECONDARY}`]: 'text-violet-500',
  };
  const defaultClassName =
    'w-full h-14 rounded-2xl font-semibold flex justify-center items-center text-lg outline-none select-none';

  return (
    <button className={cls(defaultClassName, BTN_BG[type], BTN_TEXT_COLOR[type])} {...props}>
      {children}
    </button>
  );
};

export default CommonButton;
