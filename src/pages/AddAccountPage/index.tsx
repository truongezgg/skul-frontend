import PageWrapper from 'components/PageWrapper';
import React, { FC, AllHTMLAttributes, useEffect } from 'react';
import { changeThemeColor } from 'utils';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const AddAccountPage: FC<IProps> = (props) => {
  useEffect(() => {
    changeThemeColor('#7F3DFF');
    return () => {
      changeThemeColor('#ffffff');
    };
  }, []);
  return (
    <PageWrapper onClose={() => {}} title="Add new page">
      <div className="">Add Account page</div>
    </PageWrapper>
  );
};

export default AddAccountPage;
