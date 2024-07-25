import React, { useState } from "react";
import useFetchCategory from "./hooks/useFetchCategory";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];
const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 5 Hours" },
  { title: "5 - 10 Hours" },
  { title: "10 - 15 Hours" },
  { title: "15 - 20 Hours" },
];
const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];
const Filters = () => {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const { data } = useFetchCategory();
  const Filters = [
    {
      value: category,
      onchange: (value: string) => setCategory({ title: value }),
      items: data,
    },
    {
      value: year,
      onchange: (value: string) => setYear({ title: value }),
      items: YearData,
    },
    {
      value: times,
      onchange: (value: string) => setTimes({ title: value }),
      items: TimesData,
    },
    {
      value: rates,
      onchange: (value: string) => setRates({ title: value }),
      items: RatesData,
    },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filters.map((item, index) => (
        <Select key={index} onValueChange={item.onchange}>
          <SelectTrigger className="w-full border border-gray-800 bg-main relative text-white rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
            <SelectValue
              placeholder={item.value.title}
            />
          </SelectTrigger>
          <SelectContent>
            {item.items && item.items.map((iterm, i) => (
              <SelectGroup key={i}>
                <SelectItem
                  value={iterm.title}
                >
                  {iterm.title}
                </SelectItem>
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};

export default Filters;
