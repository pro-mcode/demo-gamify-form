import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BillingForm from "./components/form";
import StepsTracking from "./components/steps-tracking";
import "./input.css";

function App() {
  const [step, setStep] = useState(1);
  const [billingType, setBillingType] = useState("monthly");
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = (targetStep) => {
    if (targetStep) {
      setStep(targetStep); // jump to specific step
    } else {
      setStep((prev) => Math.max(prev - 1, 1)); // go back 1 step
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      plan: null,
      addons: [],
    },
  });
  const onSubmit = (data) => {
    // console.log("Final Submission:", data);
    // alert("Form submitted! Check console for details.");
    setFormData(data);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
        reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, reset]);

  return (
    <div className="app-component">
      {/* Step tracker */}
      <StepsTracking step={step} />

      {/* Form */}
      <BillingForm
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        step={step} // 👈 step controlled by App
        nextStep={nextStep} // 👈 passed down
        prevStep={prevStep} // 👈 passed down
        billingType={billingType}
        setBillingType={setBillingType}
        formData={formData}
        setFormData={setFormData}
        getValues={getValues}
        isSubmitted={isSubmitted}
        isValid={isValid}
      />
    </div>
  );
}

export default App;
