import { NextPage } from "next";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DatePickerVars {
  startDate: Date;
  endDate: Date;
}

const PlaceDateRange: NextPage = ({}) => {
  const nextMounth = new Date();
  nextMounth.setMonth(nextMounth.getMonth() + 1);
  const [value, setValue] = useState<DatePickerVars>({
    startDate: new Date(),
    endDate: nextMounth,
  });

  return (
    <div className="bg-white mt-5">
      <Datepicker
        placeholder="تاریخ ورود / تاریخ خروج"
        primaryColor="amber"
        i18n="fa"
        value={value}
        startWeekOn="sat"
        onChange={(newValue) =>
          setValue(() => {
            return {
              startDate: newValue?.startDate,
              endDate: newValue?.endDate,
            };
          })
        }
        useRange={false}
      />
    </div>
  );
};

export default PlaceDateRange;
