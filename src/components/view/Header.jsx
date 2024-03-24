import React from "react";

function Header({ viewportWidth, threshold, setShouldShow, shouldShow }) {
  return (
    <header>
      <h1 className="pageHeading"> ABRIO SHOP DEMO       </h1>
      {viewportWidth < threshold ? (
        <div className="filterDropdown">
          <h1>Filters</h1>
          <button onClick={() => setShouldShow(!shouldShow)}>
            {shouldShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            )}
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
