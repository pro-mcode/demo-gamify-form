export default function PersonalInfo({ register, errors }) {
  return (
    <div className="personal-info-component">
      <div className="component-heading">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="space-y-4">
        <div>
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
        <div>
          <label className="personal-info-label" htmlFor="email">
            Email
          </label>
          <input
            className="personal-info-input"
            id="email"
            type="email"
            placeholder="e.g adedamolamaxwell@gamify.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="personal-info-label" htmlFor="number">
            Phone Number
          </label>
          <input
            className="personal-info-input"
            id="number"
            type="tel"
            placeholder="e.g +1 234 567 890"
            {...register("number", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9\s-]{7,15}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.number && (
            <p className="error-message">{errors.number.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
