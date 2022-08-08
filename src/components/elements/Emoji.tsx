import React from "react";

// eslint-disable-next-line react/display-name
const Emoji = React.memo(({ className, label, symbol }:any) => (
  <span className={className} role="img" aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
));

export default Emoji;
