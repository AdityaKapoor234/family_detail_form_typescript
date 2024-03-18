import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepLabel from '@mui/material/StepLabel';
import { useEffect } from 'react';

type Data = {
  stepValue: number;
}

export default function StepperComponent(props: Data) {
  const [activeStep, setActiveStep] = React.useState(props?.stepValue);

  const steps = [{ name: "Personal Information" }, { name: "Family Details" }]

  useEffect(() => {
    setActiveStep(props?.stepValue);
  }, [props?.stepValue]);

  return (
    <div>
      <div>
        <div className="row">
          <div>
            <Box sx={{ width: '100%' }}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                sx={{
                  '& .MuiSvgIcon-root': {
                    height: '16px',
                    width: '100%',
                    color: '#CCCCCC',
                  },
                  '& .MuiSvgIcon-root.Mui-active': {
                    color: '#14A066',
                  },
                  '& .MuiSvgIcon-root.Mui-completed ': {
                    color: '#14A066',
                  },

                  '& .MuiStepConnector-line': {
                    borderTopWidth: '2px',
                  },
                  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
                    marginTop: "4px"
                  },
                  '& .MuiStepLabel-label.Mui-completed ': {

                    color: '#14A066',
                    fontSize: '15px',
                    lineHeight: '18px'
                  },

                  '& .MuiStepLabel-label.Mui-active ': {
                    color: '#14A066',
                    fontSize: '15px',
                    fontFamily: "Lato",
                    lineHeight: '18px'
                  },
                  '& .MuiStepLabel-label.Mui-disabled ': {
                    color: '#7E7E7E',
                    fontSize: '15px',
                    fontFamily: "Lato",
                    lineHeight: '18px'
                  },
                  '& .MuiStepConnector-root': {
                    top: '7px',
                    left: 'calc(-50% + 12px)',
                    right: 'calc(50% + 12px)',
                  },
                  '& .MuiStepConnector-root.Mui-disabled .MuiStepConnector-line':
                  {
                    borderColor: '#CCCCCC',
                  },
                  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line':
                  {
                    borderColor: '#14A066',
                  },
                  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
                  {
                    borderColor: '#14A066',
                  },
                }}
              >
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepButton color="inherit" >
                      <StepLabel >{label?.name}</StepLabel>
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
