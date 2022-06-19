import CommonButton from 'components/CommonButton';
import CommonInput from 'components/CommonInput';
import PageWrapper from 'components/PageWrapper';
import React, { FC, AllHTMLAttributes, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CommonButtonType, RoutePath } from 'types/enum';
import { changeThemeColor } from 'utils';
import CommonModal from 'components/CommonModal';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const AddAccountPage: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [initialBalance, setInitialBalance] = useState<number>();
  const [popup, setPopup] = useState({
    visible: false,
    title: 'Create account success!',
  });

  useEffect(() => {
    changeThemeColor('#7F3DFF');
    return () => {
      changeThemeColor('#ffffff');
    };
  }, []);

  const handlePrevPage = () => {
    navigate(RoutePath.SETUP_ACCOUNT);
  };

  const handleShowPopup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPopup({ ...popup, visible: true });
  };

  const handleCloseModal = () => {
    setPopup({ ...popup, visible: false });
  };

  const handleChangeInitialBalance = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;

    setInitialBalance(value);
  };

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 1,
    minimumIntegerDigits: 2,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <PageWrapper
      className="bg-[#7F3DFF] h-full text-white relative flex flex-col justify-between"
      onClose={handlePrevPage}
      title={t('addAccount.lblTitle')}
    >
      <CommonModal
        title={popup.title}
        visible={popup.visible}
        onClose={handleCloseModal}
        className="h-full w-full relative"
      />
      <div className="w-full">
        <label htmlFor="initial-balance">
          <div className="px-4">
            <div className="text-lg font-semibold text-gray-300">Balance</div>
            <div className="font-semibold text-6xl pb-4 relative">
              {formatter.format(Number(initialBalance || 0))}
            </div>
          </div>
        </label>
        <form onSubmit={handleShowPopup} className="bg-white px-4 pb-10 rounded-t-3xl">
          <div className="pb-2 pt-4">
            <CommonInput
              name="initial-balance"
              id="initial-balance"
              placeholder={t('Initial balance')}
              type="number"
              inputMode="numeric"
              value={initialBalance}
              onChange={handleChangeInitialBalance}
              required={true}
            />
          </div>
          <div className="py-2">
            <CommonInput
              name="account-name"
              placeholder={t('Account name')}
              type="text"
              required={true}
            />
          </div>
          <div className="pt-2">
            <CommonButton type={CommonButtonType.PRIMARY}>Continue</CommonButton>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default AddAccountPage;
