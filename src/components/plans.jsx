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
    <div className="plans-component">
      {/* Contents */}
      <div className="space-y-6">
        {/* Heading */}
        <div className="component-heading mb-4">
          <h2>Select your plan</h2>
          <p>You have the option of monthly or yearly billing</p>
        </div>

        {/* Plan Cards */}
        <div className="plan-card">
          {plans.map((plan) => (
            <div key={plan.name} className="plan-card-wrapper">
              <input
                type="radio"
                id={plan.name}
                value={plan.name}
                {...register("plan", { required: "Please select a plan" })}
                className="plan-input peer"
              />
              <label htmlFor={plan.name} className="plan-label">
                <img
                  src={`assets/images/icon-${plan.name.toLowerCase()}.svg`}
                  alt={plan.name}
                  className="w-10 h-10 mb-4"
                />
                <div className="flex flex-col">
                  <span className="plan-name">{plan.name}</span>
                  <span className="plan-option">
                    ${isMonthly ? plan.monthly : plan.yearly}/
                    {isMonthly ? "mo" : "yr"}
                  </span>
                  {!isMonthly && (
                    <span className="plan-freebie">2 months free</span>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Error message */}
        {errors.plan && <p className="error-message">{errors.plan.message}</p>}

        {/* Toggle */}
        <div className="plan-toggle-wrapper">
          <span
            onClick={() => setBillingType("monthly")}
            className={` plan-toggle-option ${
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
              className={` plan-toggle-selector transition-left ${
                isMonthly ? "left-1" : "left-[calc(100%-1rem-1px)]"
              }`}
            ></span>
          </div>

          <span
            onClick={() => setBillingType("yearly")}
            className={`plan-toggle-option ${
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
