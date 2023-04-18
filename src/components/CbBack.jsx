import creditCardFront from '../assets/images/bg-card-front.png'
import logoCb from '../assets/images/card-logo.svg'

import styles from './CbBack.module.css';


function CbBack() {
  return (
    <div className={styles.container}>
      <img className={styles.logoCb} src={logoCb} alt="logo cb" />
      <img className={styles.cardBack} src={creditCardFront} alt="" />
        
    </div>
  );
}
  
  export default CbBack;
  