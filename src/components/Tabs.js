import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid';
import Singers from "./singers";
import Albums from "./albums";
import Songs from "./songs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TabsWrapper = () => {
  
  const [value, setValue] = useState(0);

  
  
  const handleChange = (event, newValue) => {
    setValue(parseInt(newValue));
  };

  return (
     
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Singers" {...a11yProps(0)} />
                  <Tab label="Albums" {...a11yProps(1)} />
                  <Tab label="Songs" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Singers value={value} handleChange={handleChange} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <Albums value={value} handleChange={handleChange} />
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <Songs value={value} handleChange={handleChange} />
                </TabPanel>
              </>
           
          </Box>
        </Box>

     
  );
};

export default TabsWrapper