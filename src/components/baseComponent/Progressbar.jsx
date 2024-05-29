import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressBar({ value, classNames = {
  base: "max-w-full",
  track: "bg-[#D9D9D9] h-[8px]",
  indicator: "bg-[#6B45BC]",
  label: "tracking-wider font-medium text-default-600",
  value: "text-foreground/60"
} }) {

  return (
    <Progress
      aria-label="Downloading..."
      size="sm"
      value={value}
      color="success"
      showValueLabel={false}
      classNames={{
        base: `${classNames?.base}`,
        track: `${classNames?.track}`,
        indicator: `${classNames?.indicator}`,
        label: `${classNames?.label}`,
        value: `${classNames?.value}`,
      }}
    />
  );
}
