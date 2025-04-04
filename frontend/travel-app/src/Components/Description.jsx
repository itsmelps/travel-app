import React from "react";

const PackageCard = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Secret Hiking Trails in Bali</h2>
      <p style={styles.description}>
        Discover the lesser-known side of Bali through tranquil jungle paths and serene waterfalls. This package is designed for those seeking solitude and natural beauty, far from the typical tourist crowd.
      </p>

      <h3 style={styles.subtitle}>Highlights:</h3>
      <ul style={styles.list}>
        <li>
          <strong>Scenic Jungle Walks:</strong> Peaceful trails surrounded by lush greenery, ideal for nature lovers.
        </li>
        <li>
          <strong>Hidden Waterfalls:</strong> Swim and relax in secluded waterfalls known only to locals.
        </li>
        <li>
          <strong>Mountain Views:</strong> Enjoy panoramic views from quiet ridges, perfect for morning hikes.
        </li>
        <li>
          <strong>Guided Experience:</strong> Led by local experts who share stories, culture, and insights.
        </li>
      </ul>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "0px",
    maxWidth: "700px",
    margin: "auto",
    color: "#111",
    fontFamily: "poppins",
  },
  title: {
    marginBottom: "12px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#3B3B3B"
  },
  subtitle: {
    marginTop: "16px",
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#3B3B3B"
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#404040"
  },
  list: {
    paddingLeft: "18px",
    lineHeight: "1.8",
    color: "#404040"
  },
};

export default PackageCard;
