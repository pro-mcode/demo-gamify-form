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
    <div className="summary-component">
      {/* Heading */}
      <div className="component-heading mb-4">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      {/* Summary Box */}
      <div className="summary-box">
        {/* Selected Plan */}
        <div className="summary-plan">
          <div className="flex flex-col">
            <span className="summary-title">
              {selectedPlan?.name || "No Plan Selected"}{" "}
              <span className="summary-name">({billingType})</span>
            </span>
            <span
              className="summary-update-plan"
              onClick={() => prevStep(2)} // Go back to Plans step
            >
              Change
            </span>
          </div>
          <span className="summary-price">
            ${planPrice}/{billingType === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        {/* Selected Add-ons */}
        {selectedAddOns?.length > 0 ? (
          <div className="space-y-2 mb-2">
            {selectedAddOns.map((addon) => (
              <div key={addon.id} className="summary-id">
                <span className="summary-list">{addon.title}</span>
                <span className="summary-list-price">
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
          <p className="summary-empty-list">No add-ons selected</p>
        )}
      </div>

      {/* Total */}
      <div className="summary-total-wrapper">
        <span className="summary-total">
          Total (per {billingType === "monthly" ? "month" : "year"})
        </span>
        <span className="summary-total-price">
          ${totalPrice}/{billingType === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </div>
  );
}
