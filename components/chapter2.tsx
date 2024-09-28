function Chapter2({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">2. Operacje na tabelach</h2>

      {/* Tworzenie tabeli */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Tworzenie tabeli</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                CREATE TABLE
              </span>{" "}
              nazwa_tabeli (
              <br />
              <span className="ml-4">id INT AUTO_INCREMENT PRIMARY KEY,</span>
              <br />
              <span className="ml-4">pole1 VARCHAR(255),</span>
              <br />
              <span className="ml-4">pole2 INT,</span>
              <br />
              <span className="ml-4">pole3 DATE</span>
              <br />
              );
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["Tabele"],
                // Brak tabel przed utworzeniem
              ]}
              after={[["Tabele"], ["nazwa_tabeli"]]}
              newTable={true}
            />
          </div>
        </div>
      </div>

      {/* Usuwanie tabeli */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Usuwanie tabeli</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                DROP TABLE
              </span>{" "}
              nazwa_tabeli;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["Tabele"], ["nazwa_tabeli"]]}
              after={[
                ["Tabele"],
                // Brak tabeli po usunięciu
              ]}
            />
          </div>
        </div>
      </div>

      {/* Zmiana nazwy tabeli */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Zmiana nazwy tabeli</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                ALTER TABLE
              </span>{" "}
              nazwa_tabeli
              <br />
              <span className="text-blue-600 text-lg font-bold">
                RENAME TO
              </span>{" "}
              nowa_nazwa_tabeli;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["Tabele"], ["nazwa_tabeli"]]}
              after={[["Tabele"], ["nowa_nazwa_tabeli"]]}
            />
          </div>
        </div>
      </div>

      {/* Dodawanie kolumny */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Dodawanie kolumny</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                ALTER TABLE
              </span>{" "}
              nazwa_tabeli
              <br />
              <span className="text-blue-600 text-lg font-bold">ADD</span>{" "}
              nazwa_kolumny VARCHAR(255);
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["nazwa_tabeli"], ["id", "pole1", "pole2", "pole3"]]}
              after={[
                ["nazwa_tabeli"],
                ["id", "pole1", "pole2", "pole3", "nazwa_kolumny"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Usuwanie kolumny */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Usuwanie kolumny</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                ALTER TABLE
              </span>{" "}
              nazwa_tabeli
              <br />
              <span className="text-blue-600 text-lg font-bold">
                DROP COLUMN
              </span>{" "}
              nazwa_kolumny;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "pole1", "pole2", "pole3", "nazwa_kolumny"],
              ]}
              after={[["nazwa_tabeli"], ["id", "pole1", "pole2", "pole3"]]}
            />
          </div>
        </div>
      </div>

      {/* Modyfikacja kolumny */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Modyfikacja kolumny</h3>
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                ALTER TABLE
              </span>{" "}
              nazwa_tabeli
              <br />
              <span className="text-blue-600 text-lg font-bold">
                MODIFY COLUMN
              </span>{" "}
              nazwa_kolumny NOWY_TYP_DANYCH;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["nazwa_tabeli"],
                ["id", "pole1", "pole2", "pole3", "nazwa_kolumny"],
              ]}
              after={[
                ["nazwa_tabeli"],
                [
                  "id",
                  "pole1",
                  "pole2",
                  "pole3",
                  "nazwa_kolumny (NOWY_TYP_DANYCH)",
                ],
              ]}
              highlight={-1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter2;
