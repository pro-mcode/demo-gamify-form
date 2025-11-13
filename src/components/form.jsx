import PersonalInfo from "./personal-info";
import Plans from "./plans";
import AddOns from "./add-ons";
import Summary from "./summary";

export default function BillingForm({
  register,
  handleSubmit,
  errors,
  step,
  nextStep,
  prevStep,
  billingType,
  setBillingType,
  getValues,
  isSubmitted,
  isValid,
}) {
  return (
    <div className="form-component">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="form-container">
          {step === 1 && (
            <PersonalInfo
              register={register}
              errors={errors}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <Plans
              register={register}
              errors={errors}
              billingType={billingType}
              setBillingType={setBillingType}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <AddOns
              register={register}
              billingType={billingType}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <Summary
              formData={getValues()}
              billingType={billingType}
              prevStep={prevStep}
            />
          )}
          {/* Navigation buttons */}
          <div className="navigation">
            {step > 1 && (
              <button
                type="button"
                onClick={() => prevStep()}
                className="nav-prev"
              >
                Go Back
              </button>
            )}
            {step === 1 && <div></div>}

            {step < 4 ? (
              <button
                type="button"
                onClick={step < 3 ? nextStep : () => nextStep()}
                disabled={!isValid}
                className="nav-next"
              >
                {step === 3 ? "Review" : "Next Step"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isValid}
                className="nav-next-submit"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="submit-message">
          <img
            src="assets/images/icon-thank-you.svg"
            alt="thank-you-checkmark"
            className="message-image"
          />
          <h3 className="message-heading">Thank you!</h3>
          <p className="message-content">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at{" "}
            <a href="mailto:promcode01@gmail.com" className="message-link">
              support@gamify.com
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
