import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";

const Settings = () => {
  const { error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const allowedCategories = [
    { id: 9, name: "General Knowledge" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
  ];

  // const limitedCategories = response.trivia_categories.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField fullWidth size="small" id="outlined-basic" label="Name" variant="outlined" />
      <SelectField options={allowedCategories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit" color="success">
          Start
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
