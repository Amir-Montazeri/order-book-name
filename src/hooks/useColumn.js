import { useEffect, useState } from "react";

export default function useColumn(type, column, amount) {
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [amounts, setAmounts] = useState([{ 0: 0 }]);

  useEffect(() => {
    switch (type) {
      case 'column':
        setSelectedColumn(column)
        break;
      case 'amount':
        setAmounts([...amount, {
          [column]: amount
        }]);
        break;
      default:
        break;
    }
  });

  return { selectedColumn, amounts };
};