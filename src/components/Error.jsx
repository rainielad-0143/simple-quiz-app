import React from "react";

export default function Error({ error }) {
  return (
    <>
      {error && (
        <p style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
          {error}
        </p>
      )}
    </>
  );
}
