function Chapter3({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">3. Operacje na danych</h2>

      {/* Wstawianie danych */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Wstawianie danych</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                INSERT INTO
              </span>{" "}
              nazwa_tabeli (kolumna1, kolumna2) VALUES ('wartość1', 'wartość2');
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "B", "20"],
              ]}
              after={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "B", "20"],
                ["3", "wartość1", "wartość2"],
              ]}
              highlight={2}
            />
          </div>
        </div>
      </div>

      {/* Aktualizowanie danych */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Aktualizowanie danych</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">UPDATE</span>{" "}
              nazwa_tabeli SET kolumna1 = 'nowa_wartość' WHERE id = 2;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "B", "20"],
                ["3", "wartość1", "wartość2"],
              ]}
              after={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "nowa_wartość", "20"],
                ["3", "wartość1", "wartość2"],
              ]}
              highlight={1}
            />
          </div>
        </div>
      </div>

      {/* Usuwanie danych */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Usuwanie danych</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                DELETE FROM
              </span>{" "}
              nazwa_tabeli WHERE id = 1;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "nowa_wartość", "20"],
                ["3", "wartość1", "wartość2"],
              ]}
              after={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["2", "nowa_wartość", "20"],
                ["3", "wartość1", "wartość2"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter3;
