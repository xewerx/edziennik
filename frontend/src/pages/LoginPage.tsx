import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { SyntheticEvent } from "react";

function LoginPage() {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate maxWidth={600}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Adres e-mail"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Hasło"
        type="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Zaloguj się
      </Button>
    </Box>
  );
}

export default LoginPage;
