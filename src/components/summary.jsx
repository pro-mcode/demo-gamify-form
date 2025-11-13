import React from "react";

// Reference lists of plans and add-ons
const plansList = [
  { name: "Arcade", monthly: 9, yearly: 90 },
  { name: "Advanced", monthly: 12, yearly: 120 },
  { name: "Pro", monthly: 15, yearly: 150 },
];

const addOnsList = [
  { id: "online", title: "Online service", monthlyPrice: 1, yearlyPrice: 10 },
  { id: "storage", title: "Larger storage", monthlyPrice: 2, yearlyPrice: 20 },
  {
    id: "profile",
    title: "Customizable profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export default function Summary({ formData, billingType, prevStep }) {
  const { plan, addons } = formData;

  // Map selected plan name to full object
  const selectedPlan = plansList.find((p) => p.name === plan);

  // Map selected add-ons names to full objects
  const selectedAddOns = addons?.map((a) =>
    addOnsList.find((addon) => addon.title === a)
  );

  // Calculate plan price
  const planPrice = selectedPlan
    ? billingType === "monthly"
      ? selectedPlan.monthly
      : selectedPlan.yearly
    : 0;

  // Calculate add-ons total
  const addonsTotal =
    selectedAddOns?.reduce(
      (total, addon) =>
        total +
        (billingType === "monthly" ? addon.monthlyPrice : addon.yearlyPrice),
      0
    ) || 0;

  const totalPrice = planPrice + addonsTotal;

  return (
    <div className="personal-info flex flex-col h-auto px-8 py-10 bg-neutralWhite shadow-md md:bg-transparent rounded-lg md:shadow-none md:rounded-none md:p-0 md:h-full">
      {/* Heading */}
      <div className="component-heading mb-4">
        <h2 className="text-lg font-bold text-primaryBlue">Finishing up</h2>
        <p className="text-sm text-neutralGray">
          Double-check everything looks OK before confirming
        </p>
      </div>

      {/* Summary Box */}
      <div className="bg-primaryPurple/5 p-6 rounded-md">
        {/* Selected Plan */}
        <div className="flex justify-between items-center border-b border-neutralGray/30 pb-2 mb-2">
          <div className="flex flex-col">
            <span className="font-semibold text-primaryBlue">
              {selectedPlan?.name || "No Plan Selected"}{" "}
              <span className="text-sm text-neutralGray ml-2">
                ({billingType})
              </span>
            </span>
            <span
              className="text-sm text-neutralGray underline underline-primaryBlue cursor-pointer"
              onClick={() => prevStep(2)} // Go back to Plans step
            >
              Change
            </span>
          </div>
          <span className="font-semibold text-primaryBlue">
            ${planPrice}/{billingType === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        {/* Selected Add-ons */}
        {selectedAddOns?.length > 0 ? (
          <div className="space-y-2 mb-2">
            {selectedAddOns.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <span className="text-sm text-neutralGray">{addon.title}</span>
                <span className="text-sm font-semibold text-primaryBlue/60 tracking-wider">
                  +$
                  {billingType === "monthly"
                    ? addon.monthlyPrice
                    : addon.yearlyPrice}
                  /{billingType === "monthly" ? "mo" : "yr"}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-neutralGray mb-2">No add-ons selected</p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center border-t border-neutralGray/30 pt-2 mt-4">
        <span className="text-sm font-normal text-neutralGray">
          Total (per {billingType === "monthly" ? "month" : "year"})
        </span>
        <span className="font-bold text-primaryPurple tracking-wider">
          ${totalPrice}/{billingType === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
}
