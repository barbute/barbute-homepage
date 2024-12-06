import React from "react";

interface HistoryTableProps {
  // Title is just a simple string
  title: string
  // Content can be anything
  rows: any[]
}

const HistoryTable: React.FC<HistoryTableProps> = ({ title, rows }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="rowspan-2">Title</th>
        </tr>
        <tr>
          Lorem Ipsum
        </tr>
        <tr>
          Dolor sit amet
        </tr>
      </tbody>
    </table>
  )
};

export default HistoryTable;