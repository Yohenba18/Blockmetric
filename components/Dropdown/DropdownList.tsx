import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const DropdownList = React.forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return (
      <div className="absolute hidden" ref={ref}>
        <div
          className={
            "transition duration-300 transform translate-y-4 opacity-0 border-2 bg-white p-2 " +
            (props.className ?? "")
          }
        >
          {props.children}
        </div>
      </div>
    );
  }
);
