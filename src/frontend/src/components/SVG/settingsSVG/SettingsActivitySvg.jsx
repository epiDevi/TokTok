import { useTheme } from "../../../context/userContext";
const SettingsActivitySvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="22"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.20845 12.0002C1.20845 20.0933 3.90695 22.7918 12.0001 22.7918C20.0933 22.7918 22.7918 20.0933 22.7918 12.0002C22.7918 3.907 20.0933 1.2085 12.0001 1.2085C3.90695 1.2085 1.20845 3.907 1.20845 12.0002Z"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M15.9552 14.3545L11.9991 11.9943V6.90649"
            stroke={theme === "dark" ? "#9E9E9E" : "#212121"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

export default SettingsActivitySvg;
