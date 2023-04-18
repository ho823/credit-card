import backgroundImgMobile from '../assets/images/bg-main-mobile.png'
import backgroundImgDesktop from '../assets/images/bg-main-desktop.png'
import creditCardBack from '../assets/images/bg-card-back.png'

import CbBack from './CbBack';
import styles from './HeaderForm.module.css';


function HeaderForm() {
  return (
    <div className={styles.header}>
      <img className={styles.bg} src={backgroundImgMobile} alt="" />

      <img className={styles.bgDesktop} src={backgroundImgDesktop} alt="" />
      <img className={styles.cardFront} src={creditCardBack} alt="" />
      <CbBack />

        
    </div>
  );
}
  
  export default HeaderForm;
  