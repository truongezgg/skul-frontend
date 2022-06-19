import React, { FC } from 'react';

const UnitedKingdomFlag: FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#united-kingdom-flag-icon)" />
      <defs>
        <pattern
          id="united-kingdom-flag-icon"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1451_4464" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_1451_4464"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default UnitedKingdomFlag;
