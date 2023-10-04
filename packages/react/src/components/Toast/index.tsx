import { ComponentProps } from "react";
import { ToastContainer } from "./styles";
import { ToastCard, ToastCardProps } from "./ToastCard";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  toasts: ToastCardProps[];
}

export function Toast({ toasts, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      {toasts.map((t) => (
        <ToastCard
          key={t.title + t.description}
          title={t.title}
          description={t.description}
          timer={t.timer || 0}
        />
      ))}
    </ToastContainer>
  );
}
