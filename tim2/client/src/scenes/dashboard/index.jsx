import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { ScoreCard } from "../../components/Card";


const Dashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
       {/* score card */}
       <div className="col-start-3 col-span-1 row-span-2 space-y-4 pt-9">
        <ScoreCard title="5000" desc="Produk Terjual" />
        <ScoreCard title="250" desc="Total Ulasan" />
        <ScoreCard title="20" desc="Stok Frozen Food" />
        <ScoreCard title="10" desc="Pesanan Tersedia" />
      </div>
      {/* riwayat pesanan */}
    </Box>
  );
};


export default Dashboard;