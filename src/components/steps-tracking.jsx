export default function StepsTracking({ step }) {
  const steps = [
    { number: 1, title: "YOUR INFO", subtitle: "STEP 1" },
    { number: 2, title: "SELECT PLAN", subtitle: "STEP 2" },
    { number: 3, title: "ADD-ONS", subtitle: "STEP 3" },
    { number: 4, title: "SUMMARY", subtitle: "STEP 4" },
  ];

  return (
    <div className="relative">
      <img
        src="assets/images/bg-sidebar-desktop.svg"
        alt="Sidebar"
        className="desktop-sidebar"
      />
      <img
        src="assets/images/bg-sidebar-mobile.svg"
        alt="Sidebar"
        className="mobile-sidebar"
      />

      <div className="step-tracking-container">
        {steps.map(({ number, title, subtitle }) => (
          <div key={number} className="step-indicator">
            <span
              className={`step-indicator-number
                ${
                  step === number
                    ? "step-circle-active"
                    : "step-circle-inactive"
                }
              `}
            >
              {number}
            </span>
            <div className="step-info">
              <p className="step-title">{subtitle}</p>
              <p className="step-subtitle ">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
