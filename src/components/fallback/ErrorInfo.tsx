import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";

export type ErrorInfoProps = {
  status: "error" | "info" | "success" | "warning";
  title: string;
  description: string;
};

export default function ErrorInfo({
  status,
  title,
  description,
}: ErrorInfoProps) {
  return (
    <Alert status={status} variant="subtle">
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
}
