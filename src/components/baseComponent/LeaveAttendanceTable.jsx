import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
import {LeaveUsers} from "../../data/data";

export default function LeaveAttendanceTable() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(LeaveUsers.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return LeaveUsers.slice(start, end);
  }, [page]);



  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {

      case "from_date":
        return (
          <p className="text-bold text-small whitespace-nowrap capitalize m-0">{user?.from_date}</p>
        );

      case "to_date":
        return (
          <p className="text-bold text-small whitespace-nowrap capitalize m-0">{user?.to_date}</p>
        );

      case "reason":
        return (
          <p className="text-bold text-small whitespace-nowrap capitalize m-0">{user?.reason}</p>
        );
      case "typeofleave":
        return (
          <p className="text-bold text-small whitespace-nowrap capitalize m-0">{user?.typeofleave}</p>
        );
      case "status":
        return (
          <p className={`text-bold text-small whitespace-nowrap capitalize m-0 ${user?.status === "Approved" ? "text-green-400" : user?.status === "Rejected" ? "text-red-400" : "text-yellow-400"}`}>{user?.status}</p>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-end">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="from_date">From Date</TableColumn>
        <TableColumn key="to_date">To Date</TableColumn>
        <TableColumn key="reason">Reason</TableColumn>
        <TableColumn key="typeofleave">Type of leave</TableColumn>
        <TableColumn key="status">Status</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
