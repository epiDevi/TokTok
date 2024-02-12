const SearchSvg = (props) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.selectedIcon ? "fill-primary" : ""}
      >
        <circle
          cx="11.8916"
          cy="11.7666"
          r="8.98856"
          stroke="#9E9E9E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={props.selectedIcon ? "stroke-primary" : ""}
        />
        <path
          d="M18.1433 18.4851L21.6673 22"
          stroke="#9E9E9E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={props.selectedIcon ? "stroke-primary" : ""}
        />
      </svg>
    </>
  );
};

export default SearchSvg;
