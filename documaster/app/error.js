"use client";

import React from "react";

export default function error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
