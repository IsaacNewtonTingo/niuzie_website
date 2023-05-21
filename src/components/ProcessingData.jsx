import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ProcessingData() {
  return (
    <div
      style={styles.backdrop}
      className="fp-container flex items-center justify-center"
    >
      <div style={styles.container}>
        <ClipLoader
          color="white"
          loading={true}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  backdrop: {
    backgroundColor: "rgba(0,0,0,0.6",
    position: "absolute",
  },
};
