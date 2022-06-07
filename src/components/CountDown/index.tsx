import moment from 'moment';
import React, { FC, AllHTMLAttributes, useEffect, useState } from 'react';

interface IProps extends AllHTMLAttributes<HTMLButtonElement> {
  endTime: number;
  onFinished: () => void;
}

const CountDown: FC<IProps> = (props) => {
  const [count, setCount] = useState(moment(props.endTime).diff(moment(), 'second'));

  useEffect(() => {
    const countTimeout = setTimeout(() => {
      const remains = moment(props.endTime).diff(moment(), 'second');
      if (remains >= 0) {
        setCount(remains);
      }
    }, 1000);

    if (count === 0) {
      props.onFinished();
      clearInterval(countTimeout);
    }

    return () => {
      clearInterval(countTimeout);
    };
  }, [props.endTime, count]);

  const minutes = Math.floor(count / 60);
  const seconds = Math.floor(count % 60);

  return (
    <>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </>
  );
};

export default CountDown;
