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
    <div className="w-full h-full md:h-auto">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full lg:w-[80%] md:w-[100%] mx-auto h-full p-4 bg-neutralWhite shadow-md md:bg-transparent md:shadow-none md:rounded-none"
        >
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
          <div className="flex justify-between items-center mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => prevStep()}
                className="text-neutralGray hover:text-primaryBlue font-semibold transition-all"
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
                className="bg-primaryBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-primaryPurple transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {step === 3 ? "Review" : "Next Step"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isValid}
                className="bg-primaryBlue text-white px-8 py-4 rounded-lg font-semibold hover:bg-primaryPurple transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="flex flex-col justify-center items-center lg:w-[80%] md:w-[100%] mx-auto h-full p-4 space-y-4 opacity-0 animate-fadeIn">
          <img
            src="assets/images/icon-thank-you.svg"
            alt=""
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-primaryBlue text-3xl font-bold">Thank you!</h3>
          <p className="text-neutralGray text-base text-center font-medium">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at{" "}
            <a
              href="mailto:support@gamify.com"
              className="text-primaryPurple underline"
            >
              support@gamify.com
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
