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

function BookForm() {
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
          maxWidth: "800px",
          width: "90%",
          color: "white",
          mt: 5,
        }}
      >
        <Box sx={{ maxWidth: "640px", width: "100%", mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
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
              lineHeight: 2,
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
                <label style={{ fontSize: "14px" }}>
                  First Name <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Last Name */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Last Name <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Email <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Phone */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Phone<span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Event Date */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Date of Event <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Event Time */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Time of Event <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            {/* Number of Guests */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  Number of Guests <span style={{ color: "#f56c6c" }}>*</span>
                </label>
                <input
                  type="number"
                  name="numGuests"
                  value={formData.numGuests}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
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
                  fontSize: "14px",
                }}
              >
                SELECT WHICH ITEMS YOU’D LIKE TO ORDER FOR YOUR EVENT:{" "}
                <span style={{ color: "#f56c6c" }}>*</span>
              </Typography>
              <Grid container spacing={2}>
                {/* First column of checkboxes */}
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option5"
                          checked={formData.checkedItems.includes("option5")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="BÁNH CỐM"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option6"
                          checked={formData.checkedItems.includes("option6")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="XÔI GẤC"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option7"
                          checked={formData.checkedItems.includes("option7")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="TRẦU CAU (ARTIFICIAL)"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option8"
                          checked={formData.checkedItems.includes("option8")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
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
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option5"
                          checked={formData.checkedItems.includes("option5")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="BÁNH XU-XÊ"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option6"
                          checked={formData.checkedItems.includes("option6")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="XÔI TRÁI TIM"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option7"
                          checked={formData.checkedItems.includes("option7")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
                        />
                      }
                      label="KHAY RƯỢU"
                    />
                    <FormControlLabel
                      sx={{
                        "& .MuiTypography-root": { fontSize: "14px" }, // Adjust label font size
                      }}
                      control={
                        <Checkbox
                          value="option8"
                          checked={formData.checkedItems.includes("option8")}
                          onChange={handleCheckboxChange}
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area (unchecked state)
                            },
                            "&.Mui-checked .MuiSvgIcon-root": {
                              color: "#fff", // Color for the checkbox's inner area when checked
                            },
                          }}
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
                <label style={{ fontSize: "14px" }}>
                  DESCRIBE YOUR EVENT (Are there any additional details you
                  would like us to be aware of?)*{" "}
                </label>
                <textarea
                  rows="5"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    outline: "none",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <label style={{ fontSize: "14px" }}>
                  How Did You Hear About Us?{" "}
                  <span style={{ color: "#f56c6c" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  style={{
                    padding: "10px",
                    marginTop: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
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
                  px: 2,
                  py: 1,
                  backgroundColor: "#e0af4a",
                  color: "black",
                  fontWeight: "bold",
                  mb: 3,
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  textTransform: "capitalize",
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

export default BookForm;
