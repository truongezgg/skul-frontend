import BigArrow from 'assets/svg/BigArrow';
import React, { FC, AllHTMLAttributes, useEffect, useState, useRef } from 'react';
import cls from 'classnames';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const SetupPinPage: FC<IProps> = (props) => {
  const PIN_LENGTH = 4;
  const STEP = {
    ONE: 1,
    TWO: 2,
  };
  const TITLE = {
    [`${STEP.ONE}`]: 'Let setup your PIN',
    [`${STEP.TWO}`]: 'Ok. Re type your PIN again.',
  };
  const [pins, setPins] = useState<number[]>([]);
  const [tempPins, setTempPin] = useState<number[]>([]);
  const [step, setStep] = useState<number>(STEP.ONE);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function changeThemeColor(color: string) {
      const metaThemeColor = document.querySelector('meta[name=theme-color]') as Element;
      metaThemeColor.setAttribute('content', color);
    }
    changeThemeColor('#7F3DFF');

    return () => {
      changeThemeColor('#ffffff');
      titleRef?.current?.classList?.remove('animate-[bounceX_0.125s_ease]');
    };
  }, []);

  const onPressNumber = (num: number) => {
    if (pins.length < PIN_LENGTH) {
      if (step === STEP.ONE) {
        // To next step.
        if (pins.length === PIN_LENGTH - 1) {
          setTempPin([...pins, num]);
          setPins([...pins, num]);

          setTimeout(() => {
            setStep(STEP.TWO);
            setPins([]);
          }, 125);
        } else {
          setPins([...pins, num]);
        }
      }

      if (step === STEP.TWO) {
        const results = [...pins, num];
        setPins(results);

        if (pins.length === PIN_LENGTH - 1) {
          if (results.join('') === tempPins.join('')) {
          }
          if (results.join('') !== tempPins.join('')) {
            onWrongPIN();
            setTimeout(() => setPins([]), 125);
          }
        }
      }
    }
  };

  const onClear = () => {
    setPins([]);
  };

  const onReset = () => {
    setPins([]);
    setStep(STEP.ONE);
    setTempPin([]);
  };

  const onWrongPIN = () => {
    if (titleRef) {
      titleRef.current?.classList.add('animate-[bounceX_0.125s_ease]');
      setTimeout(() => {
        titleRef.current?.classList.remove('animate-[bounceX_0.125s_ease]');
      }, 100);
    }
  };

  const Point = (props: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        {props.isActive ? (
          <circle cx="16" cy="16" r="16" fill="#FCFCFC" />
        ) : (
          <circle opacity="0.4" cx="16" cy="16" r="14" stroke="#EEE5FF" stroke-width="4" />
        )}
      </svg>
    );
  };

  return (
    <div className="h-full min-h-[30rem] w-full bg-[#7F3DFF] flex flex-col">
      <div className="h-full flex justify-center items-center">
        <div>
          <div ref={titleRef} className={'h-16 text-white text-xl flex items-start justify-center'}>
            {TITLE[step]}
          </div>
          <div className="flex">
            {new Array(PIN_LENGTH).fill(null).map((item, index: number) => (
              <div className="px-3">
                <Point isActive={pins.length >= index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Keyboard */}
      <div className="text-white font-medium text-5xl select-none pb-5">
        <div className="flex w-full h-22.5">
          <div
            onClick={() => onPressNumber(1)}
            className="focus:bg-gray-500 w-1/3 h-full flex justify-center items-center"
          >
            1
          </div>
          <div
            onClick={() => onPressNumber(2)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            2
          </div>
          <div
            onClick={() => onPressNumber(3)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            3
          </div>
        </div>
        <div className="flex w-full h-22.5">
          <div
            onClick={() => onPressNumber(4)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            4
          </div>
          <div
            onClick={() => onPressNumber(5)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            5
          </div>
          <div
            onClick={() => onPressNumber(6)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            6
          </div>
        </div>
        <div className="flex w-full h-22.5">
          <div
            onClick={() => onPressNumber(7)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            7
          </div>
          <div
            onClick={() => onPressNumber(8)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            8
          </div>
          <div
            onClick={() => onPressNumber(9)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            9
          </div>
        </div>
        <div className="flex w-full h-22.5">
          <div className="w-1/3 h-full flex justify-center items-center">
            {step === STEP.TWO && (
              <div onClick={onReset} className="rotate-180">
                <BigArrow />
              </div>
            )}
          </div>
          <div
            onClick={() => onPressNumber(0)}
            className="w-1/3 h-full flex justify-center items-center"
          >
            0
          </div>
          <div onClick={onClear} className="w-1/3 h-full flex justify-center items-center text-2xl">
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPinPage;
