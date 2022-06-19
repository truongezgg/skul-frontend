import Email from 'assets/svg/Email';
import CommonButton from 'components/CommonButton';
import CommonInput from 'components/CommonInput';
import PageWrapper from 'components/PageWrapper';
import React, { FC, AllHTMLAttributes } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CommonButtonType, RoutePath } from 'types/enum';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const ForgotPasswordPage: FC<IProps> = (props) => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  };
  return (
    <div className="h-full px-4 flex flex-col">
      <div className="h-full">
        <div className="flex justify-center">
          <Email />
        </div>
        <div className="flex justify-center items-center font-bold text-xl">
          Login by your social account and reset the password
        </div>
      </div>
      <Link className="py-8" to={RoutePath.LOGIN}>
        <CommonButton type={CommonButtonType.PRIMARY}>Back to Login</CommonButton>
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
