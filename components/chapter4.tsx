function Chapter4({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">4. Zapytania SELECT</h2>

      {/* Podstawowe zapytanie SELECT */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          Podstawowe zapytanie SELECT
        </h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              kolumna1, kolumna2 <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              nazwa_tabeli;
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
                ["kolumna1", "kolumna2"],
                ["A", "10"],
                ["nowa_wartość", "20"],
                ["wartość1", "wartość2"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Zapytanie z warunkiem (WHERE) */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">
          Zapytanie z warunkiem (WHERE)
        </h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              kolumna1, kolumna2 <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              nazwa_tabeli <br />
              <span className="text-blue-600 text-lg font-bold">
                WHERE
              </span>{" "}
              kolumna1 = 'A';
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
                ["kolumna1", "kolumna2"],
                ["A", "10"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Sortowanie wyników */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Sortowanie wyników</h3>
        <h4 className="text-md font-semibold mb-1">(ASC - rosnąco)</h4>
        <div className="flex flex-wrap items-start">
          {/* ASC */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              kolumna1, kolumna2 <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              nazwa_tabeli <br />
              <span className="text-blue-600 text-lg font-bold">
                ORDER BY
              </span>{" "}
              kolumna1{" "}
              <span className="text-blue-600 text-lg font-bold">ASC</span>;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["3", "wartość1", "wartość2"],
                ["1", "A", "10"],
                ["2", "nowa_wartość", "20"],
              ]}
              after={[
                ["kolumna1", "kolumna2"],
                ["A", "10"],
                ["nowa_wartość", "20"],
                ["wartość1", "wartość2"],
              ]}
            />
          </div>
        </div>
        <h4 className="text-md font-semibold mb-1">(DESC - malejąco)</h4>
        <div className="flex flex-wrap items-start mt-4">
          {/* DESC */}

          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              kolumna1, kolumna2 <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              nazwa_tabeli <br />
              <span className="text-blue-600 text-lg font-bold">
                ORDER BY
              </span>{" "}
              kolumna1{" "}
              <span className="text-blue-600 text-lg font-bold">DESC</span>;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["3", "wartość1", "wartość2"],
                ["1", "A", "10"],
                ["2", "nowa_wartość", "20"],
              ]}
              after={[
                ["kolumna1", "kolumna2"],
                ["wartość1", "wartość2"],
                ["nowa_wartość", "20"],
                ["A", "10"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Grupowanie wyników */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Grupowanie wyników</h3>
        <h4 className="text-md font-semibold mb-1">
          Grupowanie wyników przy użyciu funkcji agregujących
        </h4>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              kolumna1, COUNT(*) <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              nazwa_tabeli <br />
              <span className="text-blue-600 text-lg font-bold">
                GROUP BY
              </span>{" "}
              kolumna1;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "kolumna1", "kolumna2"],
                ["1", "A", "10"],
                ["2", "B", "20"],
                ["3", "A", "30"],
                ["4", "B", "40"],
                ["5", "C", "50"],
              ]}
              after={[
                ["kolumna1", "COUNT(*)"],
                ["A", "2"],
                ["B", "2"],
                ["C", "1"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Łączenie tabel (JOIN) */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Łączenie tabel (JOIN)</h3>
        <h4 className="text-md font-semibold mb-1">
          Łączenie tabel (JOIN) - INNER JOIN (domyślne)
        </h4>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              a.kolumna1, b.kolumna2 <br />
              <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
              tabela1 a <br />
              <span className="text-blue-600 text-lg font-bold">JOIN</span>{" "}
              tabela2 b <br />
              <span className="text-blue-600 text-lg font-bold">ON</span> a.id =
              b.id;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["tabela1"],
                ["id", "kolumna1"],
                ["1", "A"],
                ["2", "B"],
                ["3", "C"],
                ["tabela2"],
                ["id", "kolumna2"],
                ["1", "10"],
                ["2", "20"],
                ["4", "40"],
              ]}
              after={[
                ["kolumna1", "kolumna2"],
                ["A", "10"],
                ["B", "20"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter4;
