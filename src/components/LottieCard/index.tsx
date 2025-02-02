
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LogoBadran from '../LogoBadran';

import styles from './LottieCard.module.css'
import { useEffect, useRef, useState } from 'react';

const LottieCard = () => {
  const [time, setTime] = useState(20)
  const timeout = useRef(0)
  // User agent string method
  // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Screen resolution method


  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setTime(prevTime => prevTime - 1)
    }, 1000)

    if(time <= 0) {       
        window.location.assign('https://www.facebook.com/agencybadran')
        
    }         
 
    return  () =>  clearTimeout(timeout.current)
  }, 
  [time])

  return (
    <div className={styles.card}>
      <div className={styles.firstRow}>
        <div className={styles.colA}>
          <LogoBadran />
        </div>
        <div className={styles.colB}>
          <h2 className={styles.title}>Em breve teremos um site Novinho para Você 😎</h2>
          <span className={styles.span}>Você será redirecionado em: {time}s</span>
        </div>
      </div>
      <DotLottieReact
        src="https://lottie.host/cffc2d12-7ee1-4767-b75a-8dc7e499e997/TSHonVnELZ.lottie"
        loop
        autoplay
      />
    </div>
  );
};


export default LottieCard