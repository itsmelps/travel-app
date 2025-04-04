import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme file

const DateSelector = () => {
  const [selection, setSelection] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Select Your Dates</h3>
      <DateRange
        ranges={selection}
        onChange={(item) => setSelection([item.selection])}
        moveRangeOnFirstSelection={false}
        rangeColors={["#1e88e5"]}
        showDateDisplay={false} // Hide unnecessary date input fields
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
    margin: "auto",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
};

export default DateSelector;
