import { TextField } from "@mui/material";
import styled from "styled-components";
import { RootCss } from "../../ui/RootCss";

export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: `${RootCss.colors.primaryColor}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${RootCss.colors.primaryColor}`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${RootCss.colors.neutralColor}`,
      },
      '&:hover fieldset': {
        borderColor: `${RootCss.colors.primaryColor}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${RootCss.colors.primaryColor}`,
      },
    },
})