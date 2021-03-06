import Spin from 'assets/svg/Spin';
import SplashLogo from 'assets/svg/SplashLogo';
import UnitedKingdomFlag from 'assets/svg/UnitedKingdomFlag';
import VietNamFlag from 'assets/svg/VietNamFlag';
import CreditCard from 'components/CreditCard';
import CreditCardSkeleton from 'components/CreditCard/CreditCardSkeleton';
import React, { AllHTMLAttributes, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language, SyncStatus } from 'types/enum';
import cls from 'classnames';
import { changeLanguage } from 'i18next';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  syncStatus: SyncStatus;
}
const Splash: FC<IProps> = (props) => {
  const { t, i18n } = useTranslation();
  const [isShowAllLanguage, setIsShowAllLanguage] = useState<boolean>(false);

  const languages = [
    {
      key: Language.ENGLISH,
      icon: UnitedKingdomFlag,
    },
    {
      key: Language.VIETNAMESE,
      icon: VietNamFlag,
    },
  ];

  const onChangeLanguage = async (language: Language) => {
    await changeLanguage(language);
  };

  const onShowPopupChangeLanguage = (isShow: boolean) => {
    setIsShowAllLanguage(isShow);
  };

  return (
    <div className="h-full bg-gray-100 select-none relative">
      {/* Background */}

      <div className="h-full w-full absolute top-0 lef-0 overflow-hidden z-0">
        {/* Bottom */}
        <div className="shadow blur-[1px] absolute -bottom-64 md:-bottom-80 -left-10 md:-left-5 w-128 sm:w-160 md:w-200 h-112 md:h-140 bg-white rounded-[120px] -rotate-[25deg]"></div>
        {/* Top */}
        <div className="shadow absolute -top-20 -left-14 w-84 h-50 bg-white rounded-3xl blur-[1px] -rotate-[25deg]"></div>
        {/* Cards */}
        <div className="w-full absolute -top-5 -right-36 -rotate-[25deg] h-104 xl:-right-160">
          <div className="absolute flex justify-end bottom-0 right-0">
            <div className="blur-[2px] shadow w-[405px] h-[250px] bg-[#FFD05C] rounded-[150px] flex justify-center items-center">
              <div className="w-[285px] h-[130px] bg-gray-100 rounded-[150px]"></div>
            </div>
            <div className="w-20 md:w-36 xl:w-140"></div>
            <div className="w-8 md:w-16 xl:w-44"></div>
          </div>
          <div className="relative h-75 w-full top-0 right-0">
            <div className="absolute bottom-0 right-0 flex justify-end">
              <CreditCardSkeleton className="bg-white blur-[1px] opacity-60" />
              <div className="w-25 md:w-50 xl:w-160"></div>
            </div>
            <div className="absolute top-0 right-0 flex justify-end">
              <CreditCard />
              <div className="md:w-25 xl:w-140"></div>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0 h-80 lg:h-120 flex justify-center text-gray-400 ">
          {/* <div className="flex justify-center items-baseline font-bold">
            <div className="text-[160px] text-violet-600">S</div>
            <div className="text-[120px] text-blue-600">k</div>
            <div className="text-[120px] text-yellow-400">u</div>
            <div className="text-[120px] text-gray-400">l</div>
          </div> */}
          <div className="w-full">
            <div className="w-full flex justify-center">
              <SplashLogo />
            </div>
            <div className="text-lg pt-4 text-center">{t('splash.slogan')}</div>
            <div className="h-8 w-full pt-1">
              {props.syncStatus !== SyncStatus.COMPLETED && (
                <div className="text-sm h-full animate-pulse rounded-md flex items-center justify-center">
                  <Spin /> <div>{t('splash.syncing')}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-center text-violet-400 pb-5">
          @truongezgg
          <div
            onClick={() => onShowPopupChangeLanguage(!isShowAllLanguage)}
            className="absolute right-0 bottom-0 flex justify-center items-center flex-col px-1"
          >
            {languages.map((item) => {
              const isActive = i18n.language === item.key;
              const isShow = isActive || isShowAllLanguage;
              const className = cls(!isActive && 'opacity-30');

              return (
                isShow && (
                  <div key={item.key} className={className}>
                    <div onClick={() => onChangeLanguage(item.key)}>
                      <item.icon />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 z-1">Hi</div> */}
    </div>
  );
};

export default Splash;
