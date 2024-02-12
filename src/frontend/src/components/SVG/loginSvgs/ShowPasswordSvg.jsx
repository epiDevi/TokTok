import { useTheme } from "../../../context/userContext";

const ShowPasswordSvg = () => {
  const { theme } = useTheme();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 -960 960 960"
        width="20"
      >
        <path
          fill={theme === "dark" ? "black" : "#9E9E9E"}
          d="M480.091-304.924q72.985 0 123.985-51.09 51-51.091 51-124.077 0-72.985-51.09-123.985-51.091-51-124.077-51-72.985 0-123.985 51.09-51 51.091-51 124.077 0 72.985 51.09 123.985 51.091 51 124.077 51ZM479.882-382Q439-382 410.5-410.618q-28.5-28.617-28.5-69.5Q382-521 410.618-549.5q28.617-28.5 69.5-28.5Q521-578 549.5-549.382q28.5 28.617 28.5 69.5Q578-439 549.382-410.5q-28.617 28.5-69.5 28.5Zm.173 199.999q-148.573 0-269.236-81.615Q90.155-345.231 33.54-480q56.615-134.769 177.224-216.384 120.608-81.615 269.181-81.615 148.573 0 269.236 81.615Q869.845-614.769 926.46-480q-56.615 134.769-177.224 216.384-120.608 81.615-269.181 81.615ZM480-480Zm0 220q114 0 211.372-59.082Q788.745-378.164 841-480q-52.255-101.836-149.628-160.918Q594-700 480-700q-114 0-211.372 59.082Q171.255-581.836 119-480q52.255 101.836 149.628 160.918Q366-260 480-260Z"
        />
      </svg>
    </>
  );
};

export default ShowPasswordSvg;
