import BigArrow from 'assets/svg/BigArrow';
import CountDown from 'components/CountDown';
import React, { FC, AllHTMLAttributes, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from 'state';
import { useUpdateBlockEnterPin, useUpdatePin } from 'state/setting/hooks';
import { RoutePath } from 'types/enum';
import { changeThemeColor } from 'utils';

interface IProps extends AllHTMLAttributes<HTMLDivElement> {}

const SetupPinPage: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const PIN_LENGTH = 4;
  const MAX_WRONG_TIME = 5;
  const STEP = {
    COMMON: 0,
    ONE: 1,
    TWO: 2,
  };
  const TITLE = {
    [`${STEP.COMMON}`]: t('pin.lblTitle'),
    [`${STEP.ONE}`]: t('pin.lblTypeTitle'),
    [`${STEP.TWO}`]: t('pin.lblReTypeTitle'),
  };

  const [pins, setPins] = useState<number[]>([]);
  const [tempPins, setTempPin] = useState<number[]>([]);
  const [step, setStep] = useState<number>(STEP.COMMON);
  const [tryTime, setTryTime] = useState<number>(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const { pin, blockEnterPinTo } = useSelector((state: AppState) => state.setting);
  const updatePin = useUpdatePin();
  const navigate = useNavigate();
  const updateBlockEnterPinTo = useUpdateBlockEnterPin();

  useEffect(() => {
    const current = titleRef.current;
    changeThemeColor('#7F3DFF');
    return () => {
      changeThemeColor('#ffffff');
      current?.classList?.remove('animate-[bounceX_0.250s_ease]');
    };
  }, []);

  useEffect(() => {
    if (blockEnterPinTo && blockEnterPinTo > Date.now()) {
    }
  }, [blockEnterPinTo]);

  useEffect(() => {
    if (!pin) setStep(STEP.ONE);

    if (pin) setStep(STEP.COMMON);
  }, [pin, STEP.ONE, STEP.COMMON]);

  const onPressNumber = (num: number) => {
    const current = Date.now();

    if (blockEnterPinTo && blockEnterPinTo > current) {
      return;
    }

    if (pins.length < PIN_LENGTH) {
      if (step === STEP.COMMON) {
        const results = [...pins, num];
        setPins(results);

        if (pins.length === PIN_LENGTH - 1) {
          if (!pin) {
            setStep(STEP.ONE);
          }

          const isValidPin = results.join('') === pin;
          // TODO: Home
          if (isValidPin) {
            navigate(RoutePath.SETUP_ACCOUNT);
          }

          if (!isValidPin) {
            const tryCount = tryTime + 1;
            setTryTime(tryCount);
            if (tryCount >= MAX_WRONG_TIME) {
              updateBlockEnterPinTo(Date.now() + 1000 * 60 * 5);
            }

            onWrongPIN();
            setTimeout(() => setPins([]), 125);
          }
        }
      }

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
          const userPin = results.join('');
          if (userPin === tempPins.join('')) {
            updatePin(userPin);
            // TODO: navigate to next step
            navigate(RoutePath.SETUP_ACCOUNT);
          }
          if (userPin !== tempPins.join('')) {
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

  const onCountDownFinished = () => {
    updateBlockEnterPinTo(undefined);
    setTryTime(0);
  };

  const onWrongPIN = () => {
    if (titleRef) {
      const isContainer = titleRef.current?.classList.contains('animate-[bounceX_0.250s_ease]');
      if (isContainer) {
        titleRef.current?.classList.remove('animate-[bounceX_0.250s_ease]');
      }

      titleRef.current?.classList.add('animate-[bounceX_0.250s_ease]', 'text-red-400');
      setTimeout(() => {
        titleRef.current?.classList.remove('animate-[bounceX_0.250s_ease]', 'text-red-400');
      }, 250);
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
          <circle opacity="0.4" cx="16" cy="16" r="14" stroke="#EEE5FF" strokeWidth="4" />
        )}
      </svg>
    );
  };

  return (
    <div className="h-full min-h-[30rem] w-full bg-[#7F3DFF] flex flex-col">
      <div className="h-full flex justify-center items-center">
        <div className="text-white">
          <div ref={titleRef} className="h-16 text-lg flex items-start justify-center font-medium">
            {TITLE[step]}
          </div>

          <div className="flex items-center justify-center">
            <div className="flex">
              {new Array(PIN_LENGTH).fill(null).map((item, index: number) => (
                <div key={index} className="px-3">
                  <Point isActive={pins.length >= index + 1} />
                </div>
              ))}
            </div>
          </div>
          <div className="h-10 px-4 text-xs flex items-end justify-center">
            {blockEnterPinTo && (
              <div>
                {t('pin.lblWrongTooManyTime')}{' '}
                <CountDown endTime={blockEnterPinTo} onFinished={onCountDownFinished} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Keyboard */}
      <div className="text-white font-medium text-5xl select-none pb-5">
        <div className="flex w-full h-22.5">
          <button
            onClick={() => onPressNumber(1)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            1
          </button>
          <button
            onClick={() => onPressNumber(2)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            2
          </button>
          <button
            onClick={() => onPressNumber(3)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            3
          </button>
        </div>
        <div className="flex w-full h-22.5">
          <button
            onClick={() => onPressNumber(4)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            4
          </button>
          <button
            onClick={() => onPressNumber(5)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            5
          </button>
          <button
            onClick={() => onPressNumber(6)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            6
          </button>
        </div>
        <div className="flex w-full h-22.5">
          <button
            onClick={() => onPressNumber(7)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            7
          </button>
          <button
            onClick={() => onPressNumber(8)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            8
          </button>
          <button
            onClick={() => onPressNumber(9)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            9
          </button>
        </div>
        <div className="flex w-full h-22.5">
          <div className="rounded-lg w-1/3 h-full flex justify-center items-center">
            {step === STEP.TWO && (
              <div onClick={onReset} className="rotate-180">
                <BigArrow />
              </div>
            )}
          </div>
          <div
            onClick={() => onPressNumber(0)}
            className="rounded-lg w-1/3 h-full flex justify-center items-center"
          >
            0
          </div>
          <div
            onClick={onClear}
            className="rounded-lg w-1/3 h-full flex justify-center items-center text-2xl"
          >
            {t('pin.lblClear')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPinPage;
