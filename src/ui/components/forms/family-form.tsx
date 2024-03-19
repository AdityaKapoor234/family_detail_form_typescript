import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type Data = {
  personalDetails: object;
  validateError: object;
  handleFamilyMemberChange: () => void;
  handleFamilyMemberRemove: () => void;
}

export default function FamilyForm(props: Data) {
  const [familyDetails, setFamilyDetails] = useState<unknown>({
    id: props?.personalDetails?.family_members.length < 1 ? 1 : props?.personalDetails?.family_members[props?.personalDetails?.family_members.length - 1]?.id + 1,
    first_name: "",
    last_name: "",
    relation: "-",
    phone_no: "",
    email: "",
    address: "",
  });


  return (
    <div>
      <div
        className="d-flex flex-column justify-content-end h-100 scroll"
        style={{ marginBottom: "100px" }}
      >
        <small className="text-danger">{props?.validateError?.family_members}</small>
        <div className="mx-3">
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                First Name
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="input">
                <input
                  style={{ paddingLeft: "0.9rem" }}
                  placeholder={`Enter your first name`}
                  type="text"
                  value={familyDetails?.first_name}
                  onChange={(event) => setFamilyDetails({ ...familyDetails, first_name: event.target.value })}
                  className="input-tag"
                />
              </div>
              <small className="text-danger">{props?.validateError?.first_name}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Last Name
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="input">
                <input
                  style={{ paddingLeft: "0.9rem" }}
                  placeholder={`Enter your last name`}
                  type="text"
                  value={familyDetails?.last_name}
                  onChange={(event) => setFamilyDetails({ ...familyDetails, last_name: event.target.value })}
                  className="input-tag"
                />
              </div>
              <small className="text-danger">{props?.validateError?.last_name}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Relation
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={familyDetails?.relation}
                    onChange={(event) => setFamilyDetails({ ...familyDetails, relation: event.target.value })}
                    className="input"
                  >
                    <MenuItem value={"-"} disabled>Enter your relation</MenuItem>
                    <MenuItem value={"Mother"}>Mother</MenuItem>
                    <MenuItem value={"Father"}>Father</MenuItem>
                    <MenuItem value={"Brother"}>Brother</MenuItem>
                    <MenuItem value={"Sister"}>Sister</MenuItem>
                    <MenuItem value={"Husband"}>Husband</MenuItem>
                    <MenuItem value={"Wife"}>Wife</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <small className="text-danger">{props?.validateError?.relation}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Phone Number
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Enter your phone no"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onKeyPress: (e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    },
                  }}
                  InputProps={{
                    style: {
                      paddingRight: 2,
                    },
                    sx: {
                      borderRadius: "4px",
                      height: "40px",
                      "&.Mui-disabled": {
                        bgcolor: "#e0e0e0",
                      },
                    },

                    startAdornment: (
                      <InputAdornment
                        sx={{
                          "& .MuiTypography-root": {
                            color: "#004E66",
                          },
                        }}
                        position="start"
                      >
                        +91
                      </InputAdornment>
                    ),
                  }}
                  value={familyDetails?.phone_no}
                  onChange={(event) => setFamilyDetails({ ...familyDetails, phone_no: event.target.value })}
                  required={true}
                />
              </div>
              <small className="text-danger">{props?.validateError?.phone_no}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Email Id
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="input">
                <input
                  style={{ paddingLeft: "0.9rem" }}
                  placeholder={`Enter your email id`}
                  type="text"
                  value={familyDetails?.email}
                  onChange={(event) => setFamilyDetails({ ...familyDetails, email: event.target.value })}
                  className="input-tag"
                />
              </div>
              <small className="text-danger">{props?.validateError?.email}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Address
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  sm-size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Enter your address"
                  InputProps={{
                    sx: {
                      borderRadius: "4px",
                      height: 108,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                  }}
                  multiline
                  rows={4}
                  value={familyDetails?.address}
                  onChange={(event) => setFamilyDetails({ ...familyDetails, address: event.target.value })}
                />
              </div>
              <small className="text-danger">{props?.validateError?.address}</small>
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-end px-2">
          <div className="d-flex justify-content-center align-items-center">
            <div
              aria-disabled={true}
              role="button"
              onClick={() => props?.handleFamilyMemberChange(familyDetails)}
              className="next bottom-btn mt-3"
              style={{ marginRight: "1.5rem" }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
