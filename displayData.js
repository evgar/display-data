
const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

const displayData = (data) => {
    if (!data) return;

    const tableData = data.split('\n')
        .slice(1)
        .map((line) => line.split(','));

    const sortedTableData = tableData?.sort((a, b) => b[3] - a[3]);
    const maxDensity = sortedTableData[0][3];

    sortedTableData?.forEach((row) => {
        const densityRatio = Math.round((row[3] / maxDensity) * 100).toString();

        let s = row[0].padEnd(18);
        s += row[1].padStart(10);
        s += row[2].padStart(8);
        s += row[3].padStart(8);
        s += row[4].padStart(18);
        s += densityRatio.padStart(6);

        console.log(s);
    });


}

displayData(data);