import React, { useState } from "react";
import {
  Checkbox,
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  Typography,
  Box,
} from "@mui/material";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    numGuests: "",
    checkedItems: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updatedCheckedItems = [...prev.checkedItems];
      if (checked) {
        updatedCheckedItems.push(value);
      } else {
        updatedCheckedItems = updatedCheckedItems.filter(
          (item) => item !== value
        );
      }
      return { ...prev, checkedItems: updatedCheckedItems };
    });
  };

  const handleSubmit = () => {
    console.log("Form Submitted: ", formData);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#283341",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "1240px",
          width: "70%",
          color: "white",
          mt: 5,
        }}
      >
        <Box sx={{ maxWidth: "640px", width: "100%", mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 2,
            }}
          >
            BOOK YOUR VIETNAMESE TEA CEREMONY WITH US!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              textAlign: "center",
              px: 2,
            }}
          >
            At Đông Hưng Viên Bakery, we specialize in bringing to life the
            sweetness of your engagement (Đám Hỏi) and wedding day with our
            bespoke cakes and personalized service.
          </Typography>
        </Box>

        <form>
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Last Name */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Phone */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Event Date */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>Date of Event *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Event Time */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>Time of Event *</label>
                <input
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Number of Guests */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>Number of Guests *</label>
                <input
                  type="number"
                  name="numGuests"
                  value={formData.numGuests}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.6,
                }}
              >
                SELECT WHICH ITEMS YOU’D LIKE TO ORDER FOR YOUR EVENT:
              </Typography>
              <Grid container spacing={2}>
                {/* First column of checkboxes */}
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option1"
                          checked={formData.checkedItems.includes("option1")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="BÁNH CỐM"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option2"
                          checked={formData.checkedItems.includes("option2")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="XÔI GẤC"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option3"
                          checked={formData.checkedItems.includes("option3")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="TRẦU CAU (ARTIFICIAL)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option4"
                          checked={formData.checkedItems.includes("option4")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="TEA (JASMINE OR OOLONG)"
                    />
                  </FormControl>
                </Grid>

                {/* Second column of checkboxes */}
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option5"
                          checked={formData.checkedItems.includes("option5")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="BÁNH XU-XÊ"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option6"
                          checked={formData.checkedItems.includes("option6")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="XÔI TRÁI TIM"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option7"
                          checked={formData.checkedItems.includes("option7")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="KHAY RƯỢU"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="option8"
                          checked={formData.checkedItems.includes("option8")}
                          onChange={handleCheckboxChange}
                        />
                      }
                      label="MÂM QUẢ"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>
                  DESCRIBE YOUR EVENT (Are there any additional details you
                  would like us to be aware of?)*{" "}
                </label>
                <textarea
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <label>How Did You Hear About Us? * </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                sx={{
                  px: 4,
                  py: 1,
                  backgroundColor: "#e0af4a",
                  color: "black",
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
}

export default App;
