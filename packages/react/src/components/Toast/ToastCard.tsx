import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Text } from "../Text";
import { ToastCardContainer, ToastCardTitle } from "./styles";

export interface ToastCardProps {
  title: string;
  description: string;
  timer?: number;
}

export const ToastCard = ({
  title,
  description,
  timer = 5000,
}: ToastCardProps) => {
  const [hide, setHide] = useState(true);

  const closeTime = () => setTimeout(() => setHide(true), timer); //5sec

  useEffect(() => {
    showToast();
  }, []);

  const showToast = () => {
    setHide(false);
    timer > 0 && closeTime();
  };

  const close = () => {
    clearTimeout(closeTime());
    setHide(true);
  };

  const progressBar = () => {};

  return hide ? (
    <></>
  ) : (
    <ToastCardContainer>
      <ToastCardTitle>
        <Text size={"xl"}>{title}</Text> <X onClick={close} />
      </ToastCardTitle>
      <Text size={"sm"} css={{ color: "$gray200" }}>
        {description}
      </Text>
    </ToastCardContainer>
  );
};
