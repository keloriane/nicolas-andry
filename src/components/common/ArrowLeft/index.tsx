import React from "react";

import { theme } from "@/styles/theme";

const ArrowLeft: React.FC = () => {
  return (
    <svg
      style={{ transform: "rotate(90deg)" }}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-back"
    >
      {/* Static black stroke */}
      <circle cx="20" cy="20" r="19.5" stroke={theme.colors.black} />

      <path
        d="M19.6851 28.1581C20.0756 28.5486 20.7088 28.5486 21.0993 28.1581L27.4633 21.7941C27.8538 21.4036 27.8538 20.7704 27.4633 20.3799C27.0728 19.9894 26.4396 19.9894 26.0491 20.3799L20.3922 26.0368L14.7354 20.3799C14.3448 19.9894 13.7117 19.9894 13.3211 20.3799C12.9306 20.7704 12.9306 21.4036 13.3211 21.7941L19.6851 28.1581ZM19.3922 14.9019L19.3922 27.451L21.3922 27.451L21.3922 14.9019L19.3922 14.9019Z"
        fill="none"
      />
      {/* Animated orange stroke */}
    </svg>
  );
};

export default ArrowLeft;
