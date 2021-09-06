let input = [
  1446, 1893, 1827, 1565, 1728, 497, 1406, 1960, 1986, 1945, 1731, 1925, 1550,
  1841, 1789, 1952, 1610, 1601, 1776, 1808, 1812, 1834, 1454, 1729, 514, 1894,
  1703, 1587, 1788, 1690, 1655, 1473, 1822, 1437, 1626, 1447, 1400, 1396, 1715,
  1720, 1469, 1388, 1874, 1641, 518, 1664, 1552, 1800, 512, 1506, 1806, 1857,
  1802, 1843, 1956, 1678, 1560, 1971, 1940, 1847, 1902, 1500, 1383, 1386, 1398,
  1535, 1713, 1931, 1619, 1519, 1897, 1767, 1548, 1976, 1984, 1426, 914, 2000,
  1585, 1634, 1832, 1849, 1665, 1609, 1670, 1520, 1490, 1746, 1608, 1829, 1431,
  1762, 1384, 1504, 1434, 1356, 1654, 1719, 1599, 1686, 1489, 1377, 1531, 1912,
  145, 1875, 1532, 1439, 1482, 1420, 1529, 1554, 1826, 1546, 1589, 1993, 1518,
  1708, 1733, 1876, 1953, 1741, 1689, 773, 1455, 1613, 2004, 1819, 1725, 1617,
  1498, 1651, 2007, 1402, 728, 1475, 1928, 1904, 1969, 1851, 1296, 1558, 1817,
  1663, 1750, 1780, 1501, 1443, 1734, 1977, 1901, 1547, 1631, 1644, 1815, 1949,
  1586, 1697, 1435, 1783, 1772, 1987, 1483, 1372, 1999, 1848, 1512, 1541, 1861,
  2008, 1607, 1622, 1629, 1763, 1656, 1661, 1581, 1968, 1985, 1974, 1882, 995,
  1704, 1896, 1611, 2021, 1773, 1810, 1650, 1712, 1410, 1796, 1691, 1671, 1947,
  1775, 1593, 651, 1530, 1743,
];

for (let i = 0; i < input.length; i++) {
  if (input[i] == 2021) console.log(input[i], i);
}

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] == 2021)
      console.log(input[i] * input[j], input[i], input[j]);
  }
}

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    for (let k = j + 1; k < input.length; k++) {
      if (input[i] + input[j] + input[k] == 2021)
        console.log(
          input[i] * input[j] * input[k],
          input[i],
          input[j],
          input[k]
        );
    }
  }
}
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    for (let k = j + 1; k < input.length; k++) {
      for (let l = k + 1; l < input.length; l++) {
        if (input[i] + input[j] + input[k] + input[l] == 2021)
          console.log(
            input[i] * input[j] * input[k] * input[l],
            input[i],
            input[j],
            input[k],
            input[l]
          );
      }
    }
  }
}

//Part 1 break down the list and find the index of 2021
//Part 2 go through the list and find the 2 numbers that add to 2021
//and multiply them
//Part 3 go through the list and find the 3 numbers that add to 2021 and mulitply them
//Part 4 go through the list and find the 4 numbers that add to 2021 and mulitply them


