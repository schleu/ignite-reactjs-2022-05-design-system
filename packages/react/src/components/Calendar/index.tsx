import {
  addDays,
  addMonths,
  format,
  startOfWeek,
  subMonths,
  setDefaultOptions,
  startOfMonth,
  endOfMonth,
  compareAsc,
  endOfWeek,
  isSameMonth,
  isSameDay,
  add,
  isEqual,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { Tooltip } from "../Tooltip";
import {
  CalendarContainer,
  ChanceMonth,
  Container,
  DailyContainer,
  DayContainer,
  MonthContainer,
  MonthYearContainer,
  TimeContainer,
  WeekName,
  WeekNames,
} from "./styles";
import { Text } from "../Text";
import { Box } from "../Box";

export interface CalendarProps {
  selectedDates: Date[];
}

export function Calendar({ selectedDates }: CalendarProps) {
  const today = new Date();
  const [activeDate, setActiveDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  setDefaultOptions({ locale: ptBR });

  const changeSelectedDate = (date: Date) => {
    setSelectedDate(
      selectedDate === undefined || !isEqual(date, selectedDate)
        ? date
        : undefined
    );
  };

  const generateDatesForCurrentWeek = (
    date: Date,
    selectedDate: Date,
    activeDate: Date
  ) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        isSameMonth(currentDate, activeDate) ? (
          <Tooltip text={`${day} - Indisponivel`}>
            <DayContainer
              onClick={() => changeSelectedDate(cloneDate)}
              className={` ${
                isSameDay(currentDate, selectedDate) ? "selectedDay" : ""
              }
           ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
            >
              {format(currentDate, "d")}
            </DayContainer>
          </Tooltip>
        ) : (
          <div />
        )
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDaysOfMonth = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;
    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(
          currentDate,
          selectedDate as Date,
          activeDate
        )
      );
      currentDate = addDays(currentDate, 7);
    }

    return allWeeks;
  };

  const startTime = 9;
  const endTime = 18;

  const timeAvailable: number[] = Array(endTime - startTime).fill("");

  return (
    <Container>
      <CalendarContainer>
        <MonthYearContainer>
          <MonthContainer>
            {format(activeDate, "MMMM")}
            <span>{format(activeDate, "yyyy")}</span>
          </MonthContainer>
          <ChanceMonth>
            <CaretLeft onClick={() => setActiveDate((e) => subMonths(e, 1))} />
            <CaretRight onClick={() => setActiveDate((e) => addMonths(e, 1))} />
          </ChanceMonth>
        </MonthYearContainer>

        <WeekNames>
          {Array(7)
            .fill("")
            .map((_, i) => (
              <WeekName key={i}>
                {format(addDays(startOfWeek(activeDate), i), "E.")}
              </WeekName>
            ))}
        </WeekNames>
        <DailyContainer>{getDaysOfMonth()}</DailyContainer>
      </CalendarContainer>

      {selectedDate !== undefined ? (
        <Box
          css={{
            overflowY: "hidden",
            width: "280px",
            border: 0,
            borderLeft: "solid 1px",
            borderRadius: 0,
          }}
        >
          <Text>{format(selectedDate, "E, dd 'de' MMMM")}</Text>

          <TimeContainer>
            {timeAvailable.map((e) => (
              <Box css={{ cursor: "pointer" }}>
                <Text>
                  {format(add(selectedDate, { hours: e }), "H:mm'h'")}
                </Text>
              </Box>
            ))}
          </TimeContainer>
        </Box>
      ) : (
        <></>
      )}
    </Container>
  );
}
