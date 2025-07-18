import React from "react";
import NotificationManager from "react-hot-toast";

export interface ToastMessage {
  message: string;
}

export type ToastProps = {
  type?: string;
  message: string | ToastMessage[];
  duration?: number;
};

export const Toast: React.FC<ToastProps> = ({
  type = "success",
  message,
  duration = 8000,
}) => {
  if (Array.isArray(message)) {
    for (const item of message) {
      (NotificationManager as any)[type]?.(item.message, { duration });
    }
  } else {
    (NotificationManager as any)[type]?.(message, { duration });
  }

  return null;
};
