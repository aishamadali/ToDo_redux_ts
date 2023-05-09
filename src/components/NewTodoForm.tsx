import { Box, Button, TextField } from "@mui/material";

interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <Box mt={7} sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        placeholder="Type new ToDo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        id="outlined-basic"
        label="New todo"
        variant="outlined"
        fullWidth
        sx={{marginLeft: 31.5}}
      />
      <Button
        variant="outlined"
        sx={{ color: "purple", marginRight: 31.5, marginLeft: 5 }}
        onClick={handleAction}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewTodoForm;
