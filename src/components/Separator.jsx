const Separator = ({ title, id }) => {
  return (
    <div
      id={id}
      className="relative my-8 flex items-center justify-center scroll-mt-24"
    >
      {/* Left Line */}
      <div className="flex-grow border-2 border-orange-600"></div>

      {/* Optional Title */}
      {title && (
        <span className="mx-6 text-md uppercase tracking-widest text-white">
          {title}
        </span>
      )}

      {/* Right Line */}
      <div className="flex-grow border-2 border-orange-600"></div>
    </div>
  );
};

export default Separator;
