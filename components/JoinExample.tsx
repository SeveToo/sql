// components/chapters/JoinExample.tsx
"use client";

import { TableExample } from "./TableExample";

/**
 * JoinExample Component
 *
 * Props:
 * - joinType: string (e.g., 'INNER JOIN')
 * - sqlQuery: string
 * - table1: { name: string, headers: string[], data: string[][], joinColumn: string }
 * - table2: { name: string, headers: string[], data: string[][], joinColumn: string }
 * - result: { headers: string[], data: string[][] }
 * - description: string (optional)
 */
export function JoinExample({
  joinType,
  sqlQuery,
  table1,
  table2,
  result,
  description = "",
}) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{joinType}</h3>
      {description && (
        <p className="mb-2 text-sm text-gray-700">{description}</p>
      )}
      <div className="mb-2">
        <div className="border-2 border-blue-400 p-2 bg-gray-50 rounded">
          <code className="whitespace-pre-wrap">{sqlQuery}</code>
        </div>
      </div>
      <div className="flex flex-wrap space-x-4 mb-2">
        {/* Tabela Pierwotna */}
        <div className="w-full lg:w-1/3">
          <h4 className="text-sm font-semibold mb-1">{table1.name}</h4>
          <TableExample
            before={[table1.headers, ...table1.data]}
            after={[table1.headers, ...table1.data]}
            highlightColumns={[table1.joinColumn]}
          />
        </div>
        {/* Tabela Dołączona */}
        <div className="w-full lg:w-1/3">
          <h4 className="text-sm font-semibold mb-1">{table2.name}</h4>
          <TableExample
            before={[table2.headers, ...table2.data]}
            after={[table2.headers, ...table2.data]}
            highlightColumns={[table2.joinColumn]}
          />
        </div>
        {/* Tabela Wynikowa */}
        <div className="w-full lg:w-1/3">
          <h4 className="text-sm font-semibold mb-1">Wynik</h4>
          <TableExample
            before={[]} // Brak "Przed" dla wyniku
            after={[result.headers, ...result.data]}
            newTable={true}
            highlightColumns={[]} // Możesz dodać kolumny do podkreślenia w wyniku, jeśli potrzebujesz
          />
        </div>
      </div>
    </div>
  );
}
