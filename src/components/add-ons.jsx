export default function AddOns({ billingType, register }) {
  const monthly = billingType === "monthly";

  const addOns = [
    {
      id: "online",
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: "storage",
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: "profile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  return (
    <div className="personal-info flex flex-col justify-beween h-auto px-6 py-10 bg-neutralWhite shadow-md md:bg-transparent rounded-lg md:shadow-none md:rounded-none md:p-0 md:h-full">
      {/* Heading */}
      <div className="component-heading mb-4">
        <h2 className="text-lg font-bold text-primaryBlue">Pick add-ons</h2>
        <p className="text-sm text-neutralGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      {/* Add-on Options */}
      <div className="flex flex-col space-y-3">
        {addOns.map((item) => (
          <label
            key={item.id}
            htmlFor={item.id}
            className="relative flex items-center space-x-4 p-4 border border-neutralGray/30 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primaryPurple/5 hover:border-primaryPurple peer-checked:border-primaryPurple peer-checked:bg-primaryPurple/5"
          >
            {/* Hidden checkbox */}
            <input
              type="checkbox"
              id={item.id}
              value={item.title}
              {...register("addons")}
              className="peer hidden"
            />

            {/* Custom checkbox style */}
            <span className="flex items-center justify-center w-5 h-5 border-2 border-neutralGray/40 rounded-md transition-all duration-300 peer-checked:border-primaryPurple peer-checked:bg-primaryPurple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="w-3 h-3 opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8.5 12.086 5.707 9.293a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l7.5-7.5a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            {/* Add-on Text & Price */}
            <div className="flex justify-between items-center flex-1">
              <div className="flex flex-col">
                <span className="text-base text-primaryBlue font-semibold transition-all duration-300 peer-checked:text-primaryPurple">
                  {item.title}
                </span>
                <span className="text-sm text-neutralGray font-medium transition-all duration-300 peer-checked:text-primaryPurple">
                  {item.description}
                </span>
              </div>
              <span className="text-primaryPurple text-sm font-semibold tracking-wide">
                +${monthly ? item.monthlyPrice : item.yearlyPrice}/
                {monthly ? "mo" : "yr"}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
