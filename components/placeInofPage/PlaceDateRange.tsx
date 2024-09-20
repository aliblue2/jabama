import { NextPage } from "next";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface DatePickerVars {
  startDate: Date | null;
  endDate: Date | null;
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
          setValue({
            startDate: newValue?.startDate ?? null,
            endDate: newValue?.endDate ?? null,
          })
        }
        useRange={false}
      />
    </div>
  );
};

export default PlaceDateRange;
