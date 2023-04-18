import { useRef } from "react";

import styles from './Form.module.css';


function Form() {
  const ref = useRef();
  return (
  <form className={styles.form} >
    <div classNameName="form">
      <label for="name">Cardholder name </label>
      <input type="text" name="name" id="name" placeholder='John Doe' required/>
    </div>
    <div className="number">
      <label for="email">Card number </label>
      <input type="number" name="number" id="number" placeholder='5454 5454 5454 5454' required/>
    </div>
    <div className="date">
      <label for="email">Exp. Date </label>
      <input ref={ref} type="text" name="date" id="date" onFocus={() => (ref.current.type = "date")} placeholder='JJ/MM/YYY'  required/>
    </div>
    <div className="jdfni">
      <input type="submit" value="Confirm"/>
    </div>
  </form>

  );
}

export default Form;
