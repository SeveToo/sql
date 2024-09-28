function Chapter7({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">
        7. Operacje na użytkownikach i uprawnieniach
      </h2>
      {/* Przykłady operacji na użytkownikach */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          {/* Tworzenie użytkownika */}
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">
                CREATE USER
              </span>{" "}
              'nowy_uzytkownik'@'localhost' IDENTIFIED BY 'haslo123';
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["Brak użytkownika"]]}
              after={[["User", "Host", "Authentication"]]}
            />
          </div>
        </div>
      </div>

      {/* Przyznawanie uprawnień */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">GRANT</span>{" "}
              SELECT, INSERT ON pracownicy TO 'nowy_uzytkownik'@'localhost';
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[["User", "Host", "Privileges"]]}
              after={[["nowy_uzytkownik", "localhost", "SELECT, INSERT"]]}
            />
          </div>
        </div>
      </div>

      {/* Odzyskiwanie uprawnień */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">REVOKE</span>{" "}
              INSERT ON pracownicy FROM 'nowy_uzytkownik'@'localhost';
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["User", "Host", "Privileges"],
                ["nowy_uzytkownik", "localhost", "SELECT, INSERT"],
              ]}
              after={[
                ["User", "Host", "Privileges"],
                ["nowy_uzytkownik", "localhost", "SELECT"],
              ]}
            />
          </div>
        </div>
      </div>

      {/* Usuwanie użytkownika */}
      <div className="mb-4">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
            <div className="border-2 border-blue-400 p-2">
              <span className="text-blue-600 text-lg font-bold">DROP USER</span>{" "}
              'nowy_uzytkownik'@'localhost';
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <TableExample
              before={[
                ["User", "Host", "Privileges"],
                ["nowy_uzytkownik", "localhost", "SELECT"],
              ]}
              after={[["Brak użytkownika"]]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chapter7;
