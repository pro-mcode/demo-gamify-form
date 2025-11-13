export default function Plans({
  register,
  errors,
  billingType,
  setBillingType,
}) {
  const isMonthly = billingType === "monthly";

  const plans = [
    { name: "Arcade", monthly: 9, yearly: 90 },
    { name: "Advanced", monthly: 12, yearly: 120 },
    { name: "Pro", monthly: 15, yearly: 150 },
  ];

  return (
    <div className="personal-info flex flex-col justify-between h-auto px-6 py-10 bg-neutralWhite shadow-md md:bg-transparent rounded-lg md:shadow-none md:rounded-none md:p-0 md:h-full">
      {/* Contents */}
      <div className="space-y-6">
        {/* Heading */}
        <div className="component-heading mb-4">
          <h2 className="text-lg font-bold">Select your plan</h2>
          <p className="text-sm text-neutralGray">
            You have the option of monthly or yearly billing
          </p>
        </div>

        {/* Plan Cards */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className="relative w-full md:w-1/3">
              <input
                type="radio"
                id={plan.name}
                value={plan.name}
                {...register("plan", { required: "Please select a plan" })}
                className="peer hidden"
              />
              <label
                htmlFor={plan.name}
                className="flex md:flex-col space-x-4 justify-start items-start md:space-x-0 md:space-y-2 cursor-pointer select-none border-[1.5px] border-neutralGray/50 rounded-md h-fit transition-all duration-300 hover:bg-primaryPurple/5 hover:border-primaryPurple peer-checked:border-primaryPurple peer-checked:bg-primaryPurple/10 p-4"
              >
                <img
                  src={`assets/images/icon-${plan.name.toLowerCase()}.svg`}
                  alt={plan.name}
                  className="w-10 h-10 mb-4"
                />
                <div className="flex flex-col">
                  <span className="text-base text-primaryBlue font-semibold transition-all duration-300 peer-checked:text-primaryPurple">
                    {plan.name}
                  </span>
                  <span className="text-sm text-neutralGray font-medium">
                    ${isMonthly ? plan.monthly : plan.yearly}/
                    {isMonthly ? "mo" : "yr"}
                  </span>
                  {!isMonthly && (
                    <span className="text-xs text-primaryBlue font-medium">
                      2 months free
                    </span>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Error message */}
        {errors.plan && (
          <p className="text-error text-sm mt-2">{errors.plan.message}</p>
        )}

        {/* Toggle */}
        <div className="flex justify-center items-center gap-x-4 bg-primaryPurple/5 p-3 w-full rounded-lg mb-6">
          {/* <span
            onClick={() => setMonthly(true)}
            className={`text-sm font-semibold cursor-pointer ${
              monthly ? "text-primaryBlue" : "text-neutralGray"
            }`}
          >
            Monthly
          </span>

          <div
            onClick={() => setMonthly(!monthly)}
            className="relative bg-primaryBlue h-5 w-10 rounded-2xl cursor-pointer"
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 bg-neutralWhite h-4 w-4 rounded-full transition-left duration-300 ${
                monthly ? "left-1" : "left-[calc(100%-1rem-1px)]"
              }`}
            ></span>
          </div>

          <span
            onClick={() => setMonthly(false)}
            className={`text-sm font-semibold cursor-pointer ${
              monthly ? "text-neutralGray" : "text-primaryBlue"
            }`}
          >
            Yearly
          </span> */}
          <span
            onClick={() => setBillingType("monthly")}
            className={`text-sm font-semibold cursor-pointer ${
              isMonthly ? "text-primaryBlue" : "text-neutralGray"
            }`}
          >
            Monthly
          </span>

          <div
            onClick={() => setBillingType(isMonthly ? "yearly" : "monthly")}
            className="relative bg-primaryBlue h-5 w-10 rounded-2xl cursor-pointer"
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 bg-neutralWhite h-4 w-4 rounded-full transition-left duration-300 ${
                isMonthly ? "left-1" : "left-[calc(100%-1rem-1px)]"
              }`}
            ></span>
          </div>

          <span
            onClick={() => setBillingType("yearly")}
            className={`text-sm font-semibold cursor-pointer ${
              isMonthly ? "text-neutralGray" : "text-primaryBlue"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </div>
  );
}
