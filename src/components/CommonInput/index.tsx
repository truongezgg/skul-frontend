import React, { FC, AllHTMLAttributes, useState } from 'react';
import cls from 'classnames';
import IconEye from 'assets/svg/IconEye';

interface IProps extends AllHTMLAttributes<HTMLInputElement> {}

const CommonInput: FC<IProps> = (props) => {
  const [isHide, setIsHide] = useState(true);

  if (props.type === 'password') {
    return (
      <div className="relative w-full flex">
        <input
          className="pl-4 w-full rounded-2xl border border-gray-300 h-14 text-gray-500 text-base outline-none"
          {...props}
          name="password"
          autoComplete="current-password"
          type={isHide ? 'password' : 'text'}
        />
        <div
          className="absolute right-0 top-0 h-full flex justify-center items-center px-2"
          onClick={() => setIsHide(!isHide)}
        >
          <IconEye isHide={isHide} />
        </div>
      </div>
    );
  }

  if (props.type === 'checkbox') {
    return <input className="h-6 w-6 rounded-md" {...props} />;
  }

  const autoComplete = {
    email: 'email',
    username: 'username',
  } as any;

  return (
    <input
      className="pl-4 w-full rounded-2xl border border-gray-300 h-14 text-gray-500 text-base outline-none"
      {...props}
      autoComplete={props.type ? autoComplete[props.type] : undefined}
    />
  );
};

export default CommonInput;
