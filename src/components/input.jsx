import React, { useEffect, useState } from "react";
import img from "../asserts/groww-logo-light.svg";
const Input = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(12);
  const [repaymentYears, setRepaymentYears] = useState(36);
  const [emi, setEmi] = useState();
  const [isAdd, setIsAdd] = useState(false);
  const onChange = (e) => {
    setLoanAmount(e.target.value);
  };
  const onClick = () => {
    let r = parseFloat(rateOfInterest / 1200);
    let n = parseFloat(
      loanAmount *
        r *
        (Math.pow(r + 1, repaymentYears) /
          (Math.pow(r + 1, repaymentYears) - 1))
    );
    setEmi(n);
    setIsAdd(() => (isAdd ? false : true));
  };
  useEffect(() => {
    let r = parseFloat(rateOfInterest / 1200);
    let n = parseFloat(
      loanAmount *
        r *
        (Math.pow(r + 1, repaymentYears) /
          (Math.pow(r + 1, repaymentYears) - 1))
    );
    setEmi(n);
  }, [loanAmount, rateOfInterest, repaymentYears]);
  return (
    <>
      <image src={img} alt="yui"></image>
      <h4>Loan Amount:</h4>
      <input
        type="text"
        onChange={onChange}
        value={loanAmount}
        name="loanAmount"
      ></input>
      <h4>Rate Of Interest:</h4>
      <input
        type="text"
        value={rateOfInterest}
        onChange={(e) => setRateOfInterest(e.target.value)}
        name="rateOfInterest"
      ></input>
      <h4>Repayment Tenure(in months):</h4>
      <input
        value={repaymentYears}
        type="text"
        onChange={(e) => setRepaymentYears(e.target.value)}
        name="repaymentYears"
      ></input>
      <h4>EMI:{Math.round(emi) ? Math.round(emi) : 0}</h4>
    </>
  );
};

export default Input;
