import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

type Data = {
  personalDetails: object;
  validateError: object;
  view: boolean;
  handleFirstNameChange: () => void;
  handleLastNameChange: () => void;
  handleFatherNameChange: () => void;
  handleMotherNameChange: () => void;
  handlePhoneNoChange: () => void;
  handleEmailChange: () => void;
  handleAddressChange: () => void;
}

export default function PersonalForm(props: Data) {

  return (
    <div className="d-flex flex-column justify-content-end h-100">
      <div className="mx-3">
        <div className="row mt-4">
          <div className="col-md-3 d-flex align-items-center">
            <div className="input-label mb-2">
              First Name
              <span className="text-danger">*</span>
            </div>
          </div>
          <div className="col-md-9">
            {
              props?.view == true ?
                <span>{props?.personalDetails?.first_name}</span>
                :
                <div className="input">
                  <input
                    style={{ paddingLeft: "0.9rem" }}
                    placeholder={`Enter your first name`}
                    type="text"
                    value={props?.personalDetails?.first_name}
                    onChange={props?.handleFirstNameChange}
                    className="input-tag"
                  />
                </div>
            }
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
            {
              props?.view == true ?
                <span>{props?.personalDetails?.last_name}</span>
                :
                <div className="input">
                  <input
                    style={{ paddingLeft: "0.9rem" }}
                    placeholder={`Enter your last name`}
                    type="text"
                    value={props?.personalDetails?.last_name}
                    onChange={props?.handleLastNameChange}
                    className="input-tag"
                  />
                </div>
            }
            <small className="text-danger">{props?.validateError?.last_name}</small>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 d-flex align-items-center">
            <div className="input-label mb-2">
              Father Name
              <span className="text-danger">*</span>
            </div>
          </div>
          <div className="col-md-9">
            {
              props?.view == true ?
                <span>{props?.personalDetails?.father_name}</span>
                :
                <div className="input">
                  <input
                    style={{ paddingLeft: "0.9rem" }}
                    placeholder={`Enter your father name`}
                    type="text"
                    value={props?.personalDetails?.father_name}
                    onChange={props?.handleFatherNameChange}
                    className="input-tag"
                  />
                </div>
            }
            <small className="text-danger">{props?.validateError?.father_name}</small>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 d-flex align-items-center">
            <div className="input-label mb-2">
              Mother Name
              <span className="text-danger">*</span>
            </div>
          </div>
          <div className="col-md-9">
            {
              props?.view == true ?
                <span>{props?.personalDetails?.mother_name}</span>
                :
                <div className="input">
                  <input
                    style={{ paddingLeft: "0.9rem" }}
                    placeholder={`Enter your mother name`}
                    type="text"
                    value={props?.personalDetails?.mother_name}
                    onChange={props?.handleMotherNameChange}
                    className="input-tag"
                  />
                </div>
            }
            <small className="text-danger">{props?.validateError?.mother_name}</small>
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
              {
                props?.view == true ?
                  <span>{props?.personalDetails?.phone_no}</span>
                  :
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
                    value={props?.personalDetails?.phone_no}
                    onChange={props?.handlePhoneNoChange}
                    required={true}
                  />
              }
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
            {
              props?.view == true ?
                <span>{props?.personalDetails?.email}</span>
                :
                <div className="input">
                  <input
                    style={{ paddingLeft: "0.9rem" }}
                    placeholder={`Enter your email id`}
                    type="text"
                    value={props?.personalDetails?.email}
                    onChange={props?.handleEmailChange}
                    className="input-tag"
                  />
                </div>
            }
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
              {
                props?.view == true ?
                  <span>{props?.personalDetails?.address}</span>
                  :
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
                    value={props?.personalDetails?.address}
                    onChange={props?.handleAddressChange}
                  />
              }
            </div>
            <small className="text-danger">{props?.validateError?.address}</small>
          </div>
        </div>

      </div>
    </div>

  );
}
