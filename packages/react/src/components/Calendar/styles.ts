import { styled } from "../../styles";

export const CalendarContainer = styled("div", {
  padding: "$6",
  gap: "$6",
  display: "flex",
  flexDirection: "column",
});

export const MonthYearContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const MonthContainer = styled("p", {
  display: "flex",
  gap: "$1",
  fontFamily: "$default",
  fontWeight: "$medium",
  lineHeight: "$short",
  fontSize: "$md",
  color: "$white",
  textTransform: "capitalize",
  span: {
    color: "$gray200",
  },
});

export const ChanceMonth = styled("p", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$gray200",
  gap: "$2",
  svg: {
    cursor: "pointer",
  },
});

export const DailyContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gap: "$1",

  color: "$white",
  fontFamily: "$default",
  fontSize: "$md",
  fontWeight: "$medium",
  lineHeight: "$base",
});

export const WeekNames = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gap: "$2",
});

export const WeekName = styled("p", {
  textTransform: "uppercase",
  color: "$gray200",
  fontSize: "$sm",
  fontFamily: "$default",
  fontWeight: "$medium",
});

export const DayContainer = styled("div", {
  textAlign: "center",
  padding: "$4 $6",
  borderRadius: "$sm",
  cursor: "pointer",

  "&.inactiveDay": {},

  "&.selectedDay": {
    backgroundColor: "$gray600",
    "&:before": {
      content: "",
      width: "4px",
      height: "4px",
      borderRadius: "$sm",
      backgroundColor: "$white",
      position: "absolute",
      left: "50%",
      bottom: "20%",
      transform: "translate(-50%,0)",
    },
  },
});

export const Container = styled("div", {
  display: "flex",
  maxHeight: "500px",
  backgroundColor: "$gray800",
  border: "solid 1px $gray600",
  borderRadius: "$sm",

  /* width */
  "::-webkit-scrollbar": {
    width: "5px",
  },

  /* Track */
  "::-webkit-scrollbar-track": {
    background: "#1A1A1A",
  },
  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "#41B19B",
    borderRadius: "5px",
  },
  /* Handle on hover */
  "::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

export const SelectTimeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const TimeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  padding: "$6",
  flex: 1,
  overflowY: "scroll",
});
