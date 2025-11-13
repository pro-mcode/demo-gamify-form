export default function PersonalInfo({ register, errors }) {
  return (
    <div className="personal-info flex flex-col h-full">
      <div className="component-heading">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="space-y-4">
        <div className="">
          <label
            className="block text-base text-primaryBlue font-normal mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="text-base border rounded-md w-full p-4 h-12 font-normal tracking-wider text-primaryBlue outline-none focus:border-primaryPurple placeholder:font-normal"
            id="name"
            type="text"
            placeholder="e.g Adedamola Maxwell"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-error text-sm mt-2">{errors.name.message}</p>
          )}
        </div>
        <div className="">
          <label
            className="block text-base text-primaryBlue font-normal mb-2"
            htmlFor="name"
          >
            Email
          </label>
          <input
            className="text-base border rounded-md w-full p-4 h-12 font-normal tracking-wider text-primaryBlue outline-none focus:border-primaryPurple placeholder:font-normal"
            id="email"
            type="email"
            placeholder="e.g adedamolamaxwell@gamify.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-error text-sm mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="">
          <label
            className="block text-base text-primaryBlue font-normal mb-2"
            htmlFor="name"
          >
            Phone Number
          </label>
          <input
            className="text-base border rounded-md w-full p-4 h-12 font-normal tracking-wider text-primaryBlue outline-none focus:border-primaryPurple placeholder:font-normal"
            id="number"
            type="tel"
            placeholder="e.g +1 234 567 890"
            {...register("number", { required: "Phone number is required" })}
          />
          {errors.number && (
            <p className="text-error text-sm mt-2">{errors.number.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
