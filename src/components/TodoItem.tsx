import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch } from "../hook";
import { toggleComplete, removeTodo } from "../store/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <Box width={"75%"} margin={"auto"}>
      <Box
        sx={{
          width: "100%",
          height: 50,
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgb(186, 186, 236)",
          borderColor: "black",
          border: "solid",
          borderRadius: 1.5,
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
        <span>{title}</span>
        <Button onClick={() => dispatch(removeTodo(id))}>
          <DeleteIcon sx={{ color: "red" }}></DeleteIcon>
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
