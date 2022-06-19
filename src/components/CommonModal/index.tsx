import React, { FC, AllHTMLAttributes } from 'react';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  visible: boolean;
  onClose: () => void;
}

const CommonModal: FC<IProps> = (props) => {
  return (
    <>
      {props.visible && (
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-full justify-center items-center flex flex-col"
          aria-hidden="true"
        >
          <div
            className="h-full w-full bg-gray-800 opacity-50 absolute"
            onClick={props.onClose}
          ></div>
          <div className="relative p-4 w-full max-w-md h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={props.onClose}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                  className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                >
                  <path
                    d="M64 16C54.5065 16 45.2262 18.8152 37.3326 24.0895C29.4391 29.3638 23.2868 36.8603 19.6538 45.6312C16.0208 54.402 15.0702 64.0532 16.9223 73.3643C18.7744 82.6754 23.346 91.2282 30.0589 97.9411C36.7718 104.654 45.3246 109.226 54.6357 111.078C63.9468 112.93 73.598 111.979 82.3688 108.346C91.1397 104.713 98.6362 98.5609 103.911 90.6674C109.185 82.7738 112 73.4935 112 64C112 51.2696 106.943 39.0606 97.9411 30.0589C88.9394 21.0571 76.7304 16 64 16ZM86.64 54.36L64 76.96C61.75 79.2072 58.7 80.4694 55.52 80.4694C52.34 80.4694 49.29 79.2072 47.04 76.96L41.36 71.32C40.9871 70.947 40.6912 70.5043 40.4894 70.017C40.2875 69.5297 40.1836 69.0074 40.1836 68.48C40.1836 67.9526 40.2875 67.4303 40.4894 66.943C40.6912 66.4557 40.9871 66.013 41.36 65.64C41.733 65.267 42.1757 64.9712 42.663 64.7694C43.1503 64.5675 43.6726 64.4636 44.2 64.4636C44.7275 64.4636 45.2497 64.5675 45.737 64.7694C46.2243 64.9712 46.6671 65.267 47.04 65.64L52.68 71.32C53.0519 71.6949 53.4943 71.9925 53.9817 72.1956C54.4691 72.3986 54.992 72.5032 55.52 72.5032C56.0481 72.5032 56.5709 72.3986 57.0583 72.1956C57.5458 71.9925 57.9882 71.6949 58.36 71.32L80.96 48.68C81.333 48.307 81.7757 48.0112 82.263 47.8094C82.7503 47.6075 83.2726 47.5036 83.8 47.5036C84.3275 47.5036 84.8497 47.6075 85.337 47.8094C85.8243 48.0112 86.2671 48.307 86.64 48.68C87.013 49.053 87.3088 49.4957 87.5107 49.983C87.7125 50.4703 87.8164 50.9926 87.8164 51.52C87.8164 52.0474 87.7125 52.5697 87.5107 53.057C87.3088 53.5443 87.013 53.987 86.64 54.36Z"
                    fill="#00A86B"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {props.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonModal;
