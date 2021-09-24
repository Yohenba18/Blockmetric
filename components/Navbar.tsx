import React from "react";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const dropRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="inline-flex">
      <h1>Navbar</h1>
      <div>
        <Dropdown.Anchor listRef={dropRef}>Dropdown</Dropdown.Anchor>
        <Dropdown.List ref={dropRef}>
          <div>Sign out</div>
        </Dropdown.List>
      </div>
    </div>
  );
};

export default Navbar;
