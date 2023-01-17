import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signInAction } from "../../state/actions/signIn";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signInAction(email, password, dispatch);
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Hasło"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Zaloguj się
      </Button>
    </Box>
  );
}

export default LoginPage;
