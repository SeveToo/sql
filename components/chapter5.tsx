function Chapter5({ TableExample }: { TableExample: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">5. Filtrowanie wyników</h2>

      {/* Operatory porównania */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Operatory porównania</h3>

        {/* Miasta o ocenie większej lub równej 3 */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta o ocenie większej lub równej 3</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                ocena {'>='} 3;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                ]}
                after={[
                  ["nazwa"],
                  ["Berlin"],
                  ["Madryt"],
                  ["Warszawa"],
                  ["Paryż"],
                  ["Liverpool"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Miasta, które nie są Berlinem ani Madrytem */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta, które nie są Berlinem ani Madrytem</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                nazwa != 'Berlin' AND nazwa != 'Madryt';
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                ]}
                after={[
                  ["nazwa"],
                  ["Warszawa"],
                  ["Lublin"],
                  ["Paryż"],
                  ["Sydney"],
                  ["Liverpool"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operatory tekstowe */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Operatory tekstowe</h3>

        {/* Miasta zaczynające się na 'P' lub kończące się na 's' */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta zaczynające się na 'P' lub kończące się na 's'</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                nazwa LIKE 'P%' OR nazwa LIKE '%s';
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Paryż"],
                  ["Sydney"],
                  ["Paris"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Miasta zawierające 'ublin' (np. Lublin) */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta zawierające 'ublin' (np. Lublin)</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                nazwa LIKE '_ublin';
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Lublin"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operatory logiczne */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Operatory logiczne</h3>

        {/* Miasta o ocenie >= 3 i populacji > 1 mln */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta o ocenie {'>='} 3 i populacji {'>'} 1 mln</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                ocena {'>='} 3 AND populacja {'>'} 1000000;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Berlin"],
                  ["Madryt"],
                  ["Warszawa"],
                  ["Paryż"],
                  ["Paris"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Miasta o ocenie >= 3 lub populacji > 1 mln */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta o ocenie {'>='} 3 lub populacji {'>'} 1 mln</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                ocena {'>='} 3 OR populacja {'>'} 1000000;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Berlin"],
                  ["Madryt"],
                  ["Warszawa"],
                  ["Paryż"],
                  ["Sydney"],
                  ["Liverpool"],
                  ["Paris"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* Miasta o populacji nie większej niż 1 mln */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta o populacji nie większej niż 1 mln</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                NOT populacja {'>'} 1000000;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Lublin"],
                  ["Liverpool"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operatory IS NOT NULL */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Jeżeli nie jest puste</h3>

        {/* Miasta, które mają ocenę (nie NULL) */}
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-1">Miasta, które mają ocenę (nie NULL)</h4>
          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="border-2 border-blue-400 p-2">
                <span className="text-blue-600 text-lg font-bold">SELECT</span>{" "}
                nazwa <br />
                <span className="text-blue-600 text-lg font-bold">FROM</span>{" "}
                city <br />
                <span className="text-blue-600 text-lg font-bold">WHERE</span>{" "}
                ocena IS NOT NULL;
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <TableExample
                before={[
                  ["nazwa", "ocena", "populacja"],
                  ["Berlin", 4, 3500000],
                  ["Madryt", 3, 3200000],
                  ["Warszawa", 4, 1800000],
                  ["Lublin", 2, 340000],
                  ["Paryż", 5, 2140000],
                  ["Sydney", null, 5312000],
                  ["Liverpool", 3, 494814],
                  ["Paris", 5, 2140000],
                ]}
                after={[
                  ["nazwa"],
                  ["Berlin"],
                  ["Madryt"],
                  ["Warszawa"],
                  ["Lublin"],
                  ["Paryż"],
                  ["Liverpool"],
                  ["Paris"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chapter5;