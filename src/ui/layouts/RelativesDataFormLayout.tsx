import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PersonalForm from "../components/forms/personal-detail-form";
import FamilyMemberBox from "../components/family-members/family-members-box";

export default function Home(props: unknown) {
  const navigate = useNavigate();
  const [validateError, setValidateError] = useState<unknown>();
  const [personalDetails, setPersonalDetails] = useState<unknown>({
    first_name: "",
    last_name: "",
    father_name: "",
    mother_name: "",
    relation: "-",
    phone_no: "",
    email: "",
    address: "",
    family_members: [],
  });

  useEffect(() => {
    const storedData = localStorage.getItem("personalDetails");
    if (storedData) {
      setPersonalDetails(JSON.parse(storedData));
    }
  }, []);


  return (
    <div>

      <main>
        <div
          data-component="policy-setup"
          className="d-flex justify-content-between flex-column"
        >
          <div className="policy-head">
            <div className="container">
              Personal Details
            </div>
          </div>
          <div className="hr" />
          <div className="container" style={{ marginBottom: "50px" }}>
            <PersonalForm
              personalDetails={personalDetails}
              validateError={validateError}
              view={true}
            />
          </div>
          <div className="hr" />
          <div className="policy-head mt-3">
            <div className="container">
              Family Details
            </div>
          </div>
          <div className="hr" />
          <div className="mb-3">&nbsp;</div>
          <div data-component="family-detail">
            <div className="container">
              <div className="row">
                <FamilyMemberBox personalDetails={personalDetails} edit={false} />
              </div>
              <div className="mb-5">&nbsp;</div>
            </div>
          </div>
        </div>
        <div
          className="final-next mt-5 "
          style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.15)", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <div className="hr" />
          <div className="d-flex justify-content-end px-2">
            <div className="d-flex justify-content-center align-items-center">
              <div
                aria-disabled={true}
                role="button"
                onClick={() => navigate("/")}
                className="previous bottom-btn mt-3"
                style={{ marginRight: "1.5rem" }}
              >
                Go Back
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}
