import React from "react";
import Stepper from "../stepper/Stepper";

export default function Profile({ tab, mobileMenu, setMobileMenu }: any) {
  return (
    <div className="w-full">
      <Stepper
        strokeColor="#17253975"
        fillStroke="#172539"
        activeColor="#172539"
        activeProgressBorder="2px solid #17253975"
        submitBtn={<button className="stepperBtn">Submit</button>}
        continueBtn={<button className="stepperBtn">Next</button>}
        backBtn={<button className="stepperBtn">Back</button>}
        onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
      >
        <div className="stepperSubDiv">
          <h1>Welcome to Awesome React Stepper</h1>
        </div>
        <div className="stepperSubDiv">
          <h1>Add your content here!!!</h1>
        </div>
        <div className="stepperSubDiv">
          <h1>Thank you for using Awesome React Stepper</h1>
        </div>
      </Stepper>
    </div>
  );
}
