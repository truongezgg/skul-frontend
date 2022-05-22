import React, { AllHTMLAttributes, FC } from 'react';

interface IProps extends AllHTMLAttributes<HTMLOrSVGElement> {
  isHide?: boolean;
}

const IconEye: FC<IProps> = (props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 8.5C13.7892 8.50203 11.622 9.11475 9.73736 10.2706C7.85276 11.4264 6.32409 13.0804 5.32002 15.05C5.16751 15.3434 5.08789 15.6693 5.08789 16C5.08789 16.3307 5.16751 16.6566 5.32002 16.95C6.32704 18.9156 7.85698 20.5652 9.74136 21.7171C11.6257 22.869 13.7915 23.4785 16 23.4785C18.2086 23.4785 20.3743 22.869 22.2587 21.7171C24.1431 20.5652 25.673 18.9156 26.68 16.95C26.8325 16.6566 26.9122 16.3307 26.9122 16C26.9122 15.6693 26.8325 15.3434 26.68 15.05C25.676 13.0804 24.1473 11.4264 22.2627 10.2706C20.3781 9.11475 18.2108 8.50203 16 8.5V8.5Z"
        stroke="#91919F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5Z"
        stroke="#91919F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {props.isHide && (
        <line
          x1="3.61538"
          y1="21.0769"
          x2="27.6154"
          y2="11.0769"
          stroke="#91919F"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

export default IconEye;
