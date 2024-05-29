import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    balance: "Casual Leave",
    used: 4,
    available: 10,
    allowance: 14,
  },
  {
    key: "2",
    balance: "Work from home",
    used: 2,
    available: 10,
    allowance: 12,
  },
  {
    key: "3",
    balance: "Special Leave",
    used: 1,
    available: 1,
    allowance: 1,
  },
  {
    key: "4",
    balance: "Optional Leave",
    used: 0,
    available: 1,
    allowance: 1,
  },
  {
    key: "4",
    balance: "Loss of pay",
    used: 3,
    available: 0,
    allowance: 0,
  },
];

const columns = [
  {
    key: "balance",
    label: "Balance",
  },
  {
    key: "used",
    label: "Used",
  },
  {
    key: "available",
    label: "Available",
  },
  {
    key: "allowance",
    label: "Allowance",
  },
];

export default function LeaveBalance() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
