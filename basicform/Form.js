import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Grid,
} from '@mui/material';
import './style.css';

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    email: '',
    phone: '',
    password: '',
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
  };

  return (
    <Box className="container">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Contact</InputLabel>
              <Select
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              >
                <MenuItem value="">Options</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {formData.contact === 'email' && (
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
          )}
          {formData.contact === 'phone' && (
            <Grid item xs={6}>
              <TextField
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </Grid>
          )}
        </Grid>
        <Button variant="contained" color="primary" type="submit"  >
          Submit
        </Button>
      </form>

      <div>
        {data.map((item, index) => (
          <ul key={index}>
            <li>{item.username}</li>
            {item.contact === 'email' && <li>{item.email}</li>}
            {item.contact === 'phone' && <li>{item.phone}</li>}
            <li>{item.password}</li>
          </ul>
        ))}
      </div>
    </Box>
  );
}

export default Form;
