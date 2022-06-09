import CommonButton from 'components/CommonButton';
import React, { FC, AllHTMLAttributes } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CommonButtonType, RoutePath } from 'types/enum';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const SetupAccountPage: FC<IProps> = (props) => {
  const { step } = useParams();

  const ACCOUNT_STEP = {
    INTRO: 1,
  };

  return (
    <div className="h-full flex content-between flex-wrap px-4 pb-10">
      <div className="font-medium">
        <div className="pt-20 pb-10">
          <div className="text-5xl">Let’s setup your account!</div>
        </div>
        <div className="text-xl">Account can be your bank, credit card or your wallet.</div>
      </div>
      <Link className="w-full" to={RoutePath.ADD_ACCOUNT}>
        <CommonButton type={CommonButtonType.PRIMARY}>Let's go</CommonButton>
      </Link>
    </div>
  );
};

export default SetupAccountPage;
