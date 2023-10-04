import { keyframes, styled } from "../../styles";

export const ToastContainer = styled("div", {
  position: "fixed",
  bottom: "$8",
  right: "$8",
  width: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const ToastCardContainer = styled("div", {
  padding: "$3 $5",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "$1",

  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  position: "relative",
  overflow: "hidden",
});

export const ToastCardTitle = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  svg: {
    cursor: "pointer",
    color: "$gray600",
    width: "20px",
    height: "20px",
  },
});
export const ToastCardProgressBar = styled("div", {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: "2px",
  backgroundColor: "$ignite700",
});
