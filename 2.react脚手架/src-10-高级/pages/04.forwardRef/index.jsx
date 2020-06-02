import React from "react";

export default React.forwardRef(function ForwardRef(props, ref) {
  console.log(props);

  return (
    <div>
      <span ref={ref}>ForwardRef...</span>
      {props.children}
    </div>
  );
});
