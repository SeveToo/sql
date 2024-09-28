"use client";
function Chapter1({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6  ">
      <h2 className="text-xl font-semibold mb-2">
        1. Podstawowe operacje na bazach danych
      </h2>
      {/* Tworzenie bazy danych */}
      <div className="mb-4 ">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Tworzenie bazy danych
            </h3>
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                CREATE DATABASE
              </span>{" "}
              nazwa_bazy;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["Bazy Danych"],
                // Brak baz danych przed utworzeniem
              ]}
              after={[["Bazy Danych"], ["nazwa_bazy"]]}
              newTable={true}
            />
          </div>
        </div>
      </div>

      {/* Usuwanie bazy danych */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">Usuwanie bazy danych</h3>
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                DROP DATABASE
              </span>{" "}
              nazwa_bazy;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["Bazy Danych"], ["nazwa_bazy"]]}
              after={[
                ["Bazy Danych"],
                // Brak baz danych po usunięciu
              ]}
            />
          </div>
        </div>
      </div>

      {/* Wybór bazy danych do użycia */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Wybór bazy danych do użycia
            </h3>
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">USE</span>{" "}
              nazwa_bazy;
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["Aktualnie Wybrana Baza"], ["brak"]]}
              after={[["Aktualnie Wybrana Baza"], ["nazwa_bazy"]]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter1;
