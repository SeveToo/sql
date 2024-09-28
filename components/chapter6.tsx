function Chapter6({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6 space-y-10">
      <h2 className="text-xl font-semibold mb-2">
        6. Zapytania na wielu tabelach
      </h2>

      {/* INNER JOIN */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          {/* SQL */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              INNER JOIN (domyślnie JOIN)
            </h3>
            <div className="border-2 border-blue-400 p-2 ">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              city.nazwa AS Miasto, country.nazwa AS Kraj <br />
              <span className="text-blue-600 text-lg font-bold">
                FROM
              </span> city <br />
              <span className="text-blue-600 text-lg font-bold">
                INNER JOIN
              </span>{" "}
              country <br />
              <span className="text-blue-600 text-lg font-bold">ON</span>{" "}
              city.country_id = country.id;
            </div>
          </div>
          {/* Tabela Przed i Po */}
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["city"],
                ["id", "nazwa", "country_id", "ocena", "populacja"],
                ["1", "Berlin", "1", "4", "3500000"],
                ["2", "Madryt", "2", "3", "3200000"],
                ["3", "Warszawa", "3", "4", "1800000"],
                ["4", "Lublin", "3", "2", "340000"],
                ["5", "Paryż", "4", "5", "2140000"],
                ["6", "Sydney", "5", null, "5312000"],
                ["7", "Liverpool", "1", "3", "494814"],
                ["8", "Paris", "4", "5", "2140000"],
                ["country"],
                ["id", "nazwa"],
                ["1", "Niemcy"],
                ["2", "Hiszpania"],
                ["3", "Polska"],
                ["4", "Francja"],
                ["5", "Australia"],
              ]}
              after={[
                ["Miasto", "Kraj"],
                ["Berlin", "Niemcy"],
                ["Madryt", "Hiszpania"],
                ["Warszawa", "Polska"],
                ["Lublin", "Polska"],
                ["Paryż", "Francja"],
                ["Liverpool", "Niemcy"],
                ["Paris", "Francja"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* LEFT JOIN */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          {/* SQL */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">LEFT JOIN</h3>
            <div className="border-2 border-blue-400 p-2 ">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              city.nazwa AS Miasto, country.nazwa AS Kraj <br />
              <span className="text-blue-600 text-lg font-bold">
                FROM
              </span> city <br />
              <span className="text-blue-600 text-lg font-bold">
                LEFT JOIN
              </span>{" "}
              country <br />
              <span className="text-blue-600 text-lg font-bold">ON</span>{" "}
              city.country_id = country.id;
            </div>
          </div>
          {/* Tabela Przed i Po */}
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["city"],
                ["id", "nazwa", "country_id", "ocena", "populacja"],
                ["1", "Berlin", "1", "4", "3500000"],
                ["2", "Madryt", "2", "3", "3200000"],
                ["3", "Warszawa", "3", "4", "1800000"],
                ["4", "Lublin", "3", "2", "340000"],
                ["5", "Paryż", "4", "5", "2140000"],
                ["6", "Sydney", "5", null, "5312000"],
                ["7", "Liverpool", "1", "3", "494814"],
                ["8", "Paris", "4", "5", "2140000"],
                ["country"],
                ["id", "nazwa"],
                ["1", "Niemcy"],
                ["2", "Hiszpania"],
                ["3", "Polska"],
                ["4", "Francja"],
                ["5", "Australia"],
                ["6", "Wielka Brytania"],
              ]}
              after={[
                ["Miasto", "Kraj"],
                ["Berlin", "Niemcy"],
                ["Madryt", "Hiszpania"],
                ["Warszawa", "Polska"],
                ["Lublin", "Polska"],
                ["Paryż", "Francja"],
                ["Sydney", "Australia"],
                ["Liverpool", "Niemcy"],
                ["Paris", "Francja"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* RIGHT JOIN */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          {/* SQL */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">RIGHT JOIN</h3>
            <div className="border-2 border-blue-400 p-2 ">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              city.nazwa AS Miasto, country.nazwa AS Kraj <br />
              <span className="text-blue-600 text-lg font-bold">
                FROM
              </span> city <br />
              <span className="text-blue-600 text-lg font-bold">
                RIGHT JOIN
              </span>{" "}
              country <br />
              <span className="text-blue-600 text-lg font-bold">ON</span>{" "}
              city.country_id = country.id;
            </div>
          </div>
          {/* Tabela Przed i Po */}
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["city"],
                ["id", "nazwa", "country_id", "ocena", "populacja"],
                ["1", "Berlin", "1", "4", "3500000"],
                ["2", "Madryt", "2", "3", "3200000"],
                ["3", "Warszawa", "3", "4", "1800000"],
                ["4", "Lublin", "3", "2", "340000"],
                ["5", "Paryż", "4", "5", "2140000"],
                ["6", "Sydney", "5", null, "5312000"],
                ["7", "Liverpool", "1", "3", "494814"],
                ["8", "Paris", "4", "5", "2140000"],
                ["country"],
                ["id", "nazwa"],
                ["1", "Niemcy"],
                ["2", "Hiszpania"],
                ["3", "Polska"],
                ["4", "Francja"],
                ["5", "Australia"],
                ["6", "Wielka Brytania"],
              ]}
              after={[
                ["Miasto", "Kraj"],
                ["Berlin", "Niemcy"],
                ["Madryt", "Hiszpania"],
                ["Warszawa", "Polska"],
                ["Lublin", "Polska"],
                ["Paryż", "Francja"],
                ["Sydney", "Australia"],
                ["Liverpool", "Niemcy"],
                ["Paris", "Francja"],
                [null, "Wielka Brytania"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* FULL JOIN */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          {/* SQL */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">FULL JOIN</h3>
            <div className="border-2 border-blue-400 p-2 ">
              <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
              city.nazwa AS Miasto, country.nazwa AS Kraj <br />
              <span className="text-blue-600 text-lg font-bold">
                FROM
              </span> city <br />
              <span className="text-blue-600 text-lg font-bold">
                FULL JOIN
              </span>{" "}
              country <br />
              <span className="text-blue-600 text-lg font-bold">ON</span>{" "}
              city.country_id = country.id;
            </div>
          </div>
          {/* Tabela Przed i Po */}
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["city"],
                ["id", "nazwa", "country_id", "ocena", "populacja"],
                ["1", "Berlin", "1", "4", "3500000"],
                ["2", "Madryt", "2", "3", "3200000"],
                ["3", "Warszawa", "3", "4", "1800000"],
                ["4", "Lublin", "3", "2", "340000"],
                ["5", "Paryż", "4", "5", "2140000"],
                ["6", "Sydney", "5", null, "5312000"],
                ["7", "Liverpool", "1", "3", "494814"],
                ["8", "Paris", "4", "5", "2140000"],
                ["country"],
                ["id", "nazwa"],
                ["1", "Niemcy"],
                ["2", "Hiszpania"],
                ["3", "Polska"],
                ["4", "Francja"],
                ["5", "Australia"],
                ["6", "Wielka Brytania"],
                ["7", "Kanada"],
              ]}
              after={[
                ["Miasto", "Kraj"],
                ["Berlin", "Niemcy"],
                ["Madryt", "Hiszpania"],
                ["Warszawa", "Polska"],
                ["Lublin", "Polska"],
                ["Paryż", "Francja"],
                ["Sydney", "Australia"],
                ["Liverpool", "Niemcy"],
                ["Paris", "Francja"],
                [null, "Wielka Brytania"],
                [null, "Kanada"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter6;
