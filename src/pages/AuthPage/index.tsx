import CommonButton from 'components/CommonButton';
import React from 'react';
import { CommonButtonType, RoutePath } from 'types/enum';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import FirstIllustration from 'assets/svg/FirstIllustration';
import SecondIllustration from 'assets/svg/SecondIllustration';
import ThirdIllustration from 'assets/svg/ThirdIluustration';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: false,
    pauseOnFocus: true,
  };

  return (
    <div className="h-full max-w-5xl mx-auto">
      {/* Container */}
      <div className="h-full px-4 flex flex-col">
        {/* Slider */}
        <div className="pb-8 h-full min-h-[35rem] whitespace-pre-wrap">
          <Slider className="pb-1 h-full" {...settings}>
            <div className="h-full">
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="h-full flex justify-center items-center">
                  <FirstIllustration />
                </div>
                {/* Summary */}
                <div className="text-center">
                  <div className="font-bold text-[2rem] leading-10">{t('auth.txtTitle1')}</div>
                  <div className="h-4 w-full"></div>
                  <div className="text-gray-500 text-base leading-5">{t('auth.txtSubtitle1')}</div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="h-full flex justify-center items-center">
                  <SecondIllustration />
                </div>
                {/* Summary */}
                <div className="text-center">
                  <div className="font-bold text-[2rem] leading-10">{t('auth.txtTitle2')}</div>
                  <div className="h-4 w-full"></div>
                  <div className="text-gray-500 text-base leading-5">{t('auth.txtSubtitle2')}</div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="h-full flex justify-center items-center">
                  <ThirdIllustration />
                </div>
                {/* Summary */}
                <div className="text-center">
                  <div className="font-bold text-[2rem] leading-10">{t('auth.txtTitle3')}</div>
                  <div className="h-4 w-full"></div>
                  <div className="text-gray-500 text-base leading-5">{t('auth.txtSubtitle3')}</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* Footer */}
        <div className="w-full pb-4 flex justify-center items-end">
          <div className="w-full">
            <div className="py-1.5 flex w-full">
              <div className="w-1/2 pr-1.5">
                <Link to={RoutePath.SIGN_UP} className="py-1.5">
                  <CommonButton type={CommonButtonType.SECONDARY}>
                    {t('auth.lblSignUp')}
                  </CommonButton>
                </Link>
              </div>
              <div className="w-1/2 pl-1.5">
                <Link to={RoutePath.LOGIN} className="py-1.5">
                  <CommonButton type={CommonButtonType.PRIMARY}>{t('auth.lblLogin')}</CommonButton>
                </Link>
              </div>
            </div>
            <div className="py-1.5">
              <Link to={RoutePath.GUEST}>
                <CommonButton type={CommonButtonType.SECONDARY}>{t('auth.lblGuest')}</CommonButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
