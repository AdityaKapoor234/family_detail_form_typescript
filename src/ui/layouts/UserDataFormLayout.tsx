import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import StepperComponent from "../components/stepper-detail";
import PersonalForm from "../components/forms/personal-detail-form";
import FamilyForm from "../components/forms/family-form";
import FamilyMemberBox from "../components/family-members/family-members-box";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function Home() {
  const navigate = useNavigate();
  const [validateError, setValidateError] = useState<unknown>();
  const [tab, setTab] = useState(0);
  const [openFamilyMember, setOpenFamilyMember] = useState(false);
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

  const ValidateEmail = (mail: string) => {
    return /^[a-zA-Z]{1}\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      mail
    );
  };

  function validateData(famMember: boolean, input: unknown) {
    let isValid = true;
    const errors = {
      first_name: "",
      last_name: "",
      father_name: "",
      mother_name: "",
      relation: "",
      phone_no: "",
      email: "",
      address: "",
      family_members: "",
    };

    console.log(input,"input");

    if (!input?.first_name || input?.first_name.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.first_name = "Please enter your first name";
    }

    if (!input?.last_name || input?.last_name.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.last_name = "Please enter your last name";
    }

    if (famMember === true) {
      if (input?.family_members && input?.family_members.length < 1) {
        isValid = false;
        errors.family_members = "Please enter the details of your family members";
      }

      if (!input?.relation || input?.relation === "-" || input?.relation.replace(/\s/g, "").length <= 0) {
        isValid = false;
        errors.relation = "Please enter your relation";
      }
    } else {
      if (!input?.father_name || input?.father_name.replace(/\s/g, "").length <= 0) {
        isValid = false;
        errors.father_name = "Please enter your father name";
      }

      if (!input?.mother_name || input?.mother_name.replace(/\s/g, "").length <= 0) {
        isValid = false;
        errors.mother_name = "Please enter your mother name";
      }
    }

    if (input?.phone_no.replace(/\s/g, "").length < 10) {
      isValid = false;
      errors.phone_no = "Please enter atleast 10 digits";
    } else if (input?.phone_no.replace(/\s/g, "").length > 10) {
      isValid = false;
      errors.phone_no = "Please enter valid phone no";
    }

    if (!input?.phone_no || input?.phone_no.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.phone_no = "Please enter your phone no";
    }

    if (!input?.email || input?.email.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.email = "Please enter your email id";
    }

    if (!ValidateEmail(input?.email)) {
      isValid = false;
      errors.email = "Please enter valid email id";
    }

    if (!input?.address || input?.address.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.address = "Please enter your address";
    }

    setValidateError(errors);

    return isValid;
  }

  const OnSave = (famMember: boolean) => {
    if (validateData(famMember, personalDetails)) {
      if (tab == 0) {
        setTab(1);
      } else if (tab == 1) {
        const data = {
          first_name: personalDetails?.first_name?.trim(),
          last_name: personalDetails?.last_name?.trim(),
          father_name: personalDetails?.father_name?.trim(),
          mother_name: personalDetails?.mother_name?.trim(),
          phone_no: personalDetails?.phone_no?.trim(),
          email: personalDetails?.email?.trim(),
          address: personalDetails?.address?.trim(),
          family_members: personalDetails?.family_members,
        };
        localStorage.setItem("personalDetails", JSON.stringify(data));
        navigate('relatives');
      }
    }
  };
  const handleFirstNameChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, first_name: event.target.value });
  };
  const handleLastNameChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, last_name: event.target.value });
  };
  const handleFatherNameChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, father_name: event.target.value });
  };
  const handleMotherNameChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, mother_name: event.target.value });
  };
  const handlePhoneNoChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, phone_no: event.target.value });
  };
  const handleEmailChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, email: event.target.value });
  };
  const handleAddressChange = (event: { target: { value: string } }) => {
    setPersonalDetails({ ...personalDetails, address: event.target.value });
  };
  const handleFamilyMemberChange = (value: unknown) => {
    if (validateData(true, value)) {
      const input = personalDetails?.family_members;
      input.push(value);
      setPersonalDetails({ ...personalDetails, family_members: input });
      setOpenFamilyMember(false);
    }
  };
  const handleFamilyMemberRemove = (value: any) => {
    let input = personalDetails?.family_members?.filter((elem: any) => elem?.id != value);
    setPersonalDetails({ ...personalDetails, family_members: input });
  };

  return (
    <div>

      <main>
        <div
          data-component="policy-setup"
          className="d-flex justify-content-between flex-column"
        >
          <div className="policy-head">
            <div className="container">
              {tab === 0 ? "Personal Information" : "Family Details"}
            </div>
          </div>
          <div className="hr" />
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div style={{ width: "80%", paddingTop: "1.5rem" }}>
              <StepperComponent stepValue={tab} />
            </div>
          </div>
          {
            tab === 0 ?
              <div className="container" style={{ marginBottom: "100px" }}>
                <PersonalForm
                  personalDetails={personalDetails}
                  validateError={validateError}
                  view={false}
                  handleFirstNameChange={handleFirstNameChange}
                  handleLastNameChange={handleLastNameChange}
                  handleFatherNameChange={handleFatherNameChange}
                  handleMotherNameChange={handleMotherNameChange}
                  handlePhoneNoChange={handlePhoneNoChange}
                  handleEmailChange={handleEmailChange}
                  handleAddressChange={handleAddressChange}
                />
              </div>
              :
              <div data-component="family-detail">
                {
                  personalDetails?.family_members.length > 0 ?
                    <div className="container">
                      <div className="row">
                        <FamilyMemberBox
                          personalDetails={personalDetails}
                          edit={true}
                          handleFamilyMemberRemove={handleFamilyMemberRemove}
                        />
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                          <div className="familyDetailBox point-text">
                            <div className="addMore" onClick={() => setOpenFamilyMember(true)}>
                              <div>
                                <ControlPointIcon className="icon" />
                                <div>Add More</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-5">&nbsp;</div>
                    </div>
                    :
                    <div className="container">
                      <FamilyForm
                        personalDetails={personalDetails}
                        validateError={validateError}
                        handleFamilyMemberChange={handleFamilyMemberChange}
                        handleFamilyMemberRemove={handleFamilyMemberRemove}
                      />
                    </div>
                }
              </div>
          }
          <div
            className="final-next mt-5 "
            style={{ boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.15)", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
          >
            <div className="hr" />
            <div className="d-flex justify-content-end px-2">
              <div className="d-flex justify-content-center align-items-center">
                {tab === 1 &&
                  <div
                    aria-disabled={tab === 1 ? true : false}
                    role="button"
                    onClick={() => {
                      setTab(0);
                      setValidateError({
                        first_name: "",
                        last_name: "",
                        father_name: "",
                        mother_name: "",
                        relation: "",
                        phone_no: "",
                        email: "",
                        address: "",
                        family_members: [],
                      });
                    }}
                    className="previous bottom-btn mt-3"
                    style={{ marginRight: "1.5rem" }}
                  >
                    Previous
                  </div>
                }
                <div
                  aria-disabled={tab === 0 ? true : false}
                  role="button"
                  onClick={() => {
                    tab == 0 ?
                      OnSave(false) :
                      personalDetails?.family_members.length < 1 ?
                        null :
                        OnSave(false)
                  }}
                  className={personalDetails?.family_members.length < 1 && tab == 1 ? "next-disable next bottom-btn mt-3" : "next bottom-btn mt-3"}
                  style={{ marginRight: "1.5rem" }}
                >
                  {tab == 0 ? "Next" : "Save"}
                </div>
              </div>
            </div>
          </div>
          <Dialog
            open={openFamilyMember} maxWidth="lg" fullWidth
            onClose={() => setOpenFamilyMember(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <div className="d-flex justify-content-between">
                <span style={{ color: "#012169" }}>
                  Add Family Member
                </span>
                <Box position="absolute" right={0}>
                  <Button style={{ cursor: "pointer", color: "#012169" }} onClick={() => setOpenFamilyMember(false)}>
                    {<CloseIcon />}
                  </Button>
                </Box></div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ color: "#012169" }} >
                <div
                  data-component="policy-setup"
                  className="d-flex justify-content-between flex-column"
                >
                  <FamilyForm
                    personalDetails={personalDetails}
                    validateError={validateError}
                    handleFamilyMemberChange={handleFamilyMemberChange}
                    handleFamilyMemberRemove={handleFamilyMemberRemove}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </main >
    </div >
  );
}
