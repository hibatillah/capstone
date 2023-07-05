/* eslint-disable react/style-prop-object */
const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.grid3}>
        <div style={styles.colSpan}>
          <div
            className="text-center text-white flex flex-col justify-center items-center"
            style={styles.scoreCard1}
          >
            <h1>123</h1>
            <p>Total Pengiriman</p>
          </div>
          <div className="card">
            <h3>loremipsum</h3>
          </div>
        </div>
        <div style={styles.colSpan}>
          <div
            className="text-center text-white flex flex-col justify-center items-center"
            style={styles.scoreCard2}
          >
            <h1>123</h1>
            <p>Total Pengiriman</p>
          </div>
          <div className="card">
            <h3>loremipsum</h3>
          </div>
        </div>
        <div style={styles.colSpan}>
          <div
            className="text-center text-white flex flex-col justify-center items-center"
            style={styles.scoreCard3}
          >
            <h1>Rp 123 juta</h1>
            <p>Total Pendapatan</p>
          </div>
          <div className="card h-[400px]">
            <h3>Aktivita Terbaru</h3>
             <table className="mt-5">
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loremipsum</td>
                  <td>
                    <div className="status">
                      Process
                    </div>
                  </td>
                    <div className="status">
                      View
                    </div>
                  <td>
                  </td>
                </tr>
              </tbody>
             </table>
          </div>
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
  scoreCard1: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "#ffb275",
  },
  scoreCard2: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "#1388fc",
  },
  scoreCard3: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    padding: "12px",
    backgroundColor: "#52ec96",
  },
};

export default Dashboard;
