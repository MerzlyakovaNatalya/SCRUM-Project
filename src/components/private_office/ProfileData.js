import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getProfileData } from "../../store/profileData/action";

// const profileDataSelector = (state) => state.profile_data;

export const ProfileData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile_data);
  const token = useSelector((state) => state.users);
  const [firstName, setFirstName] = useState(`${data.first_name}`);
  const [lastName, setLastName] = useState(`${data.last_name}`);
  console.log(data.email);
  console.log(data);

  async function updateProfileData(event) {
    event.preventDefault();

    const response = await fetch("http://46.17.248.74:58235/api/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: { first_name: firstName, last_name: lastName },
      }),
    });

    const data = await response.json();
    if (data) {
      dispatch(getProfileData(data));
      alert("Данные успешно сохранены");
    }
  }

  return (
    <div>
      <Box
        onSubmit={updateProfileData}
        component="form"
        sx={{
          my: 4,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={data.email}
          disabled
        />
        <TextField
          margin="normal"
          required
          id="last_name"
          label="last_name"
          name="last_name"
          autoComplete="last_name"
          autoFocus
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          id="first_name"
          label="first_name"
          name="first_name"
          autoComplete="first_name"
          autoFocus
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Сохранить изменения
        </Button>
      </Box>
    </div>
  );
};
