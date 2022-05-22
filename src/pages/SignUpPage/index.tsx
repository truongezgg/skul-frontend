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

const SignUpPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClose = () => {
    navigate(-1);
  };
  return (
    <PageWrapper className="px-4" title={t('signUp.lblSignUp')} onClose={onClose}>
      <form action="#" className="pt-14">
        <div className="py-2">
          <CommonInput placeholder={t('signUp.placeholderName')} type="name" inputMode="text" />
        </div>
        <div className="py-2">
          <CommonInput placeholder={t('signUp.placeholderEmail')} type="email" inputMode="email" />
        </div>
        <div className="py-2">
          <CommonInput
            placeholder={t('signUp.placeholderPassword')}
            type="password"
            inputMode="text"
          />
        </div>
        <div className="py-2 flex justify-start items-center text-sm font-semibold">
          <div className="m-2">
            <CommonInput id="1754956059-checkbox-term-policy" type="checkbox" />
          </div>
          <label htmlFor="1754956059-checkbox-term-policy">
            <span className="px-1">{t('signUp.lblTermPolicy1')}</span>
            <Link to={RoutePath.ROOT} className="text-violet-500">
              {t('signUp.lblTermPolicy2')}
            </Link>
          </label>
        </div>
        <div className="py-4">
          <CommonButton type={CommonButtonType.PRIMARY}>{t('signUp.lblSignUp')}</CommonButton>
        </div>
      </form>
      <div className="w-full py-2 text-center">
        {t('signUp.lblAlreadyHaveAccount')}
        <Link to={RoutePath.LOGIN} className="pl-1 font-semibold text-lg text-violet-500">
          {t('signUp.lblLogin')}
        </Link>
      </div>
      <div className="w-full py-2 text-center font-semibold text-gray-400">
        {t('signUp.lblOrWith')}
      </div>
      <div className="h-14 flex justify-center items-center border border-gray-200 rounded-2xl w-full py-2 text-center font-semibold">
        <IconGoogle />
        <span className="px-1">{t('signUp.lblSignUpWithGoogle')}</span>
      </div>
    </PageWrapper>
  );
};

export default SignUpPage;
