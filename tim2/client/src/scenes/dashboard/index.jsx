const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.grid3}>
        <div style={styles.colSpan}>
          <div style={[styles.scoreCard, { backgroundColor: "#ffb275" }]}></div>
        </div>
        <div style={styles.colSpan}>
          <div style={[styles.scoreCard, { backgroundColor: "#1388fc" }]}></div>
        </div>
        <div style={styles.colSpan}>
          <div style={[styles.scoreCard, { backgroundColor: "#52ec96" }]}></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    paddingBlock: "20px",
    paddingInline: "20px",
    height: "90vh",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "20px",
    height: "100%",
  },
  colSpan: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  scoreCard: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
  },
};

export default Dashboard;
