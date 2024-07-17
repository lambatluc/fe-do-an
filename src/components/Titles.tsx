import { LucideProps } from "lucide-react";
import React from "react";
interface IProps {
  title: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}
const Titles = ({ title, Icon }: IProps) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />
      <h2 className="sm:text-xl font-bold text-lg">{title}</h2>
    </div>
  );
};

export default Titles;
