import React from "react";

export const DropdownAnchor: React.FC<{
  listRef: React.RefObject<HTMLDivElement>;
}> = (props) => {
  const viewDropdown = () => {
    ["translate-y-14", "opacity-0"].forEach((value) =>
      props.listRef.current?.children[0].classList.toggle(value)
    );
  };

  const toggleDropdownContainer = () => {
    if (props.listRef.current?.classList.contains("hidden")) {
      props.listRef.current?.classList.toggle("hidden");
      setTimeout(() => viewDropdown());
    } else {
      viewDropdown();
      setTimeout(() => props.listRef.current?.classList.toggle("hidden"), 300);
    }
  };

  return <button onClick={toggleDropdownContainer}>{props.children}</button>;
};
