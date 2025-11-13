export default function PersonalInfo({ register, errors }) {
  return (
    <div className="personal-info-component">
      <div className="component-heading">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="space-y-4">
        <div className="">
          <label className="personal-info-label" htmlFor="name">
            Name
          </label>
          <input
            className="personal-info-input"
            id="name"
            type="text"
            placeholder="e.g Adedamola Maxwell"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        <div className="">
          <label className="personal-info-label" htmlFor="name">
            Email
          </label>
          <input
            className="personal-info-input"
            id="email"
            type="email"
            placeholder="e.g adedamolamaxwell@gamify.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="">
          <label className="personal-info-label" htmlFor="name">
            Phone Number
          </label>
          <input
            className="personal-info-input"
            id="number"
            type="tel"
            placeholder="e.g +1 234 567 890"
            {...register("number", { required: "Phone number is required" })}
          />
          {errors.number && (
            <p className="error-message">{errors.number.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
