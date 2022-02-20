import { useState, useEffect } from "react";

const dataForSell = [
  {
    price: '1.84',
    size: 123
  },
  {
    price: '22.3',
    size: 12372
  },
  {
    price: '1123.84',
    size: 10
  },
  {
    price: '0.2',
    size: 1234
  },
  {
    price: '11.24',
    size: 31
  }
],
  dataForBuy = [
    {
      price: '1.84',
      size: 123
    },
    {
      price: '22.3',
      size: 12372
    },
    {
      price: '1123.84',
      size: 10
    },
    {
      price: '0.2',
      size: 1234
    },
    {
      price: '11.24',
      size: 31
    }
  ];

export default function useData(type) {
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (type) {
      case 'buy':
        setData(dataForBuy)
        break;
      case 'sell':
        setData(dataForSell)
      default:
        break;
    }
  })

  return data;
};