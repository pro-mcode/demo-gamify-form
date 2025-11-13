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
        className="border w-[25rem] h-auto hidden md:block lg:block"
      />
      <img
        src="assets/images/bg-sidebar-mobile.svg"
        alt="Sidebar"
        className="border w-full h-auto md:hidden lg:hidden"
      />

      <div className="absolute inset-0 flex justify-center gap-x-4 md:gap-x-0 md:flex-col md:justify-start p-8">
        {steps.map(({ number, title, subtitle }) => (
          <div
            key={number}
            className="flex justify-start items-center gap-4 step-numbered my-4"
          >
            <span
              className={`flex justify-center items-center h-8 w-8 text-sm font-semibold rounded-full transition-all duration-300
                ${
                  step === number
                    ? "bg-primaryBlue200 text-primaryBlue"
                    : "border border-neutralWhite text-neutralWhite"
                }
              `}
            >
              {number}
            </span>
            <div className="step-info hidden md:block">
              <p className="step-title text-xs text-neutralGray">{subtitle}</p>
              <p className="step-subtitle text-neutralWhite text-sm tracking-widest font-bold">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
