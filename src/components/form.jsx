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
    <div className="w-full h-full md:h-auto flex flex-col justify-center items-center">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="absolute top-32 flex flex-col justify-between w-full mx-auto h-full py-4 px-5 lg:w-[80%] md:w-[100%] md:relative md:top-0 md:p-4"
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
          <div className="flex justify-between items-center mt-8 bg-neutralWhite py-4 px-8 -mx-8 -mb-4 md:bg-transparent md:p-0 md:m-0 md:mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => prevStep()}
                className="text-neutralGray text-sm hover:text-primaryBlue font-semibold transition-all md:text-base"
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
                className="bg-primaryBlue text-sm text-white px-5 py-3 rounded-md font-semibold hover:bg-primaryPurple transition-all disabled:opacity-30 disabled:cursor-not-allowed md:px-8 md:py-4 md:rounded-lg md:text-base"
              >
                {step === 3 ? "Review" : "Next Step"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isValid}
                className="bg-primaryBlue text-sm text-white px-5 py-3 rounded-md font-semibold hover:bg-primaryPurple transition-all disabled:opacity-30 disabled:cursor-not-allowed md:px-8 md:py-4 md:rounded-lg md:text-base"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="absolute top-36 flex flex-col justify-center items-center px-6 py-16 w-[90%] h-fit bg-neutralWhite shadow-md  rounded-lg  mx-auto  space-y-4 opacity-0 animate-fadeIn  md:relative md:top-0 md:bg-transparent md:shadow-none md:rounded-none md:h-full md:p-4 md:w-[100%] lg:w-[80%]">
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
              href="mailto:promcode01@gmail.com"
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
