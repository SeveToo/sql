// components/TableExample.js
"use client";

export function TableExample({
  before,
  after,
  highlight = -1,
  newTable = false,
  highlightColumns = [],
}) {
  const renderTable = (data, isAfter = false) => (
    <div className="w-full lg:w-1/2">
      <div className="text-xs font-semibold mb-1">Przed:</div>

      <table
        className={`border-collapse border border-blue-400 text-xs w-full ${
          newTable && isAfter ? "bg-green-100" : ""
        }`}
      >
        <thead>
          <tr className="bg-blue-100">
            {data[0].map((header, i) => (
              <th
                key={i}
                className={`border border-blue-400 p-1 ${
                  highlightColumns.includes(header) ? "underline" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i} className={highlight === i ? "bg-yellow-100" : ""}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border border-blue-400 p-1 ${
                    highlightColumns.includes(data[0][j]) ? "underline" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {/* Przed */}

      {/* Po */}
      {after.length > 0 && renderTable(after, true)}
    </>
  );
}
