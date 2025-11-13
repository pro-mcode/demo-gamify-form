export default function CompleteState() {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <img
        src="assets/images/icon-thank-you.svg"
        alt=""
        className="w-20 h-20 mb-4"
      />
      <h3 className="text-primaryBlue text-3xl font-bold">Thank you!</h3>
      <p className="text-neutralGray text-base text-center font-medium">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a href="mailto:promcode01@gmail.com">support@gamify.com</a>
      </p>
    </div>
  );
}
