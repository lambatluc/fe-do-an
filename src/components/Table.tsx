import { ILiveStream } from "@/types/lives";
import React from "react";
interface IProps {
  data: ILiveStream[] | undefined;
  admin: boolean;
}
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (data: ILiveStream, index: number) => {
  return (
    <tr key={index}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={`/images/livestream/${data.titleImage}`}
            alt={data.streamerName}
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{data.streamerName}</td>
      <td className={`${Text}`}>{data.categories}</td>
      <td className={`${Text}`}>{data.national}</td>
    </tr>
  );
};
const Table = ({ data, admin }: IProps) => {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              National
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data?.map((data, index) => Rows(data, index))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
