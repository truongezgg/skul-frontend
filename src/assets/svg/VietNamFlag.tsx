import React, { FC } from 'react';

const VietNamFlag: FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="32" height="32" fill="url(#vietnam-flag-icon)" />
      <defs>
        <pattern
          id="vietnam-flag-icon"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_1450_4462" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_1450_4462"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default VietNamFlag;
