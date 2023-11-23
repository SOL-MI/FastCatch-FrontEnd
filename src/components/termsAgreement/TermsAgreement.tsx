import { useState, useEffect, useContext } from "react";

import TermsAgreementItem from "../termsAgreementItem/TermsAgreementItem";
import { TermsAgreementContext } from "context/TermsAgreementContext";

import "./termsAgreement.scss";

const TermsAgreement = () => {
  const { isAllCheck, setIsAllCheck } = useContext(TermsAgreementContext);
  const [isCheckRule, setIsCheckRule] = useState(false);
  const [isCheckUse, setIsCheckUse] = useState(false);
  const [isCheckProvision, setIsCheckProvision] = useState(false);
  const [isCheckAge, setIsCheckAge] = useState(false);

  useEffect(() => {
    if (isAllCheck) {
      setIsCheckRule(isAllCheck);
      setIsCheckUse(isAllCheck);
      setIsCheckProvision(isAllCheck);
      setIsCheckAge(isAllCheck);
    } else {
      if (isCheckRule && isCheckUse && isCheckProvision && isCheckAge) {
        setIsCheckRule(isAllCheck);
        setIsCheckUse(isAllCheck);
        setIsCheckProvision(isAllCheck);
        setIsCheckAge(isAllCheck);
      }
    }
  }, [isAllCheck]);

  useEffect(() => {
    if (!isCheckRule || !isCheckUse || !isCheckProvision || !isCheckAge) {
      setIsAllCheck(false);
    }
    if (isCheckRule && isCheckUse && isCheckProvision && isCheckAge) {
      setIsAllCheck(true);
    }
  }, [isCheckRule, isCheckUse, isCheckProvision, isCheckAge]);

  return (
    <div className="terms-agreement">
      <div className="terms-agreement__header">
        <TermsAgreementItem
          state={isAllCheck}
          setState={setIsAllCheck}
          labelText={"필수약관 전체 동의"}
          className={"text-subtitle4"}
          id={"allCheck"}
        />
      </div>
      <div className="terms-agreement__body">
        <TermsAgreementItem
          state={isCheckRule}
          setState={setIsCheckRule}
          labelText={"숙소이용규칙 및 취소/환불규정 동의 (필수)"}
          className={"text-body1"}
          id={"checkRule"}
        />
        <TermsAgreementItem
          state={isCheckUse}
          setState={setIsCheckUse}
          labelText={"개인정보 수집 및 이용 동의 (필수)"}
          className={"text-body1"}
          id={"checkUse"}
        />
        <TermsAgreementItem
          state={isCheckProvision}
          setState={setIsCheckProvision}
          labelText={"개인정보 제 3자 제공 동의 (필수)"}
          className={"text-body1"}
          id={"checkProvision"}
        />
        <TermsAgreementItem
          state={isCheckAge}
          setState={setIsCheckAge}
          labelText={"만 14세 이상 확인 (필수)"}
          className={"text-body1"}
          id={"checkAge"}
        />
      </div>
    </div>
  );
};

export default TermsAgreement;
