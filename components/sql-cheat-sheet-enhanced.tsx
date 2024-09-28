"use client";

import Chapter1 from "./chapter1";
import Chapter2 from "./chapter2";
import Chapter3 from "./chapter3";
import Chapter4 from "./chapter4";
import Chapter5 from "./chapter5";
import Chapter6 from "./chapter6";
import Chapter7 from "./chapter7";

export function SqlCheatSheetEnhanced() {
  const TableExample = ({
    before,
    after,
    highlight = -1,
    newTable = false,
  }: {
    before: string[][];
    after: string[][];
    highlight?: number;
    newTable?: boolean;
  }) => (
    <div className="mt-2 flex space-x-4">
      <div className="w-1/2">
        <div className="text-xs font-semibold mb-1">Przed:</div>
        <table className="border-collapse border border-blue-400 text-xs w-full">
          <thead>
            <tr className="bg-blue-100">
              {before[0].map((header, i) => (
                <th key={i} className="border border-blue-400 p-1">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {before.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border border-blue-400 p-1">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/2">
        <div className="text-xs font-semibold mb-1">Po:</div>
        <table
          className={`border-collapse border border-blue-400 text-xs w-full ${
            newTable ? "bg-green-100" : ""
          }`}
        >
          <thead>
            <tr className="bg-blue-100">
              {after[0].map((header, i) => (
                <th key={i} className="border border-blue-400 p-1">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {after.slice(1).map((row, i) => (
              <tr key={i} className={highlight === i ? "bg-yellow-100" : ""}>
                {row.map((cell, j) => (
                  <td key={j} className="border border-blue-400 p-1">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="font-mono text-sm max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SQL Cheat Sheet for EE09 Exam</h1>

      {/* 1. Podstawowe operacje na bazach danych */}
      <Chapter1 TableExample={TableExample} />
      <Chapter2 TableExample={TableExample} />
      <Chapter3 TableExample={TableExample} />
      <Chapter4 TableExample={TableExample} />
      <Chapter5 TableExample={TableExample} />
      <Chapter6 TableExample={TableExample} />
      <Chapter7 TableExample={TableExample} />
    </div>
  );
}
