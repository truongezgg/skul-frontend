import ArrowLeft from 'assets/svg/ArrowLeft';
import IconGoogle from 'assets/svg/IconGoogle';
import CommonButton from 'components/CommonButton';
import CommonInput from 'components/CommonInput';
import PageWrapper from 'components/PageWrapper';
import React, { FC, AllHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { CommonButtonType, RoutePath } from 'types/enum';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const LoginPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClose = () => {
    navigate(-1);
  };
  return (
    <PageWrapper className="px-4" title={t('login.lblLogin')} onClose={onClose}>
      <form action="#" className="pt-14">
        <div className="py-2">
          <CommonInput placeholder={t('login.placeholderEmail')} type="email" inputMode="email" />
        </div>
        <div className="py-2">
          <CommonInput
            placeholder={t('login.placeholderPassword')}
            type="password"
            inputMode="text"
          />
        </div>
        <div className="py-4">
          <CommonButton type={CommonButtonType.PRIMARY}>{t('login.lblLogin')}</CommonButton>
        </div>
      </form>

      <div className="w-full py-4 text-center">
        <Link to={RoutePath.FORGOT_PASSWORD} className="font-semibold text-lg text-violet-500">
          {t('login.lblForgotPassword')}
        </Link>
      </div>
      <div className="w-full py-2 text-center">
        {t('login.lblDontHaveAccount')}
        <Link to={RoutePath.SIGN_UP} className="pl-1 font-semibold text-lg text-violet-500">
          {t('login.lblSignUp')}
        </Link>
      </div>
      <div className="w-full py-2 text-center font-semibold text-gray-400">
        {t('login.lblOrWith')}
      </div>
      <div className="h-14 flex justify-center items-center border border-gray-200 rounded-2xl w-full py-2 text-center font-semibold">
        <IconGoogle />
        <span className="px-1">{t('login.lblSignInWithGoogle')}</span>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
