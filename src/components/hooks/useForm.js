import { useState } from "react";

export const useForm = () => {
  const [info, setInfo] = useState({});

  const onSubmit = (infoForm) => {
    const searchInfo = {
      header: {
        token: "9ca2449d91382adee964b679e98c246d",
        method: "Hotel.Offers",
      },
      request: {
        city_id: 4094,
        date_begin: "2022-06-20", //infoForm.infoForm.checkIn    тут дату в инфоформ надо форматировать чтобы была в формате "2022-06-20"
        date_end: "2022-06-29", //infoForm.infoForm.checkOut     тут дату в инфоформ надо форматировать чтобы была в формате "2022-06-20"
        adult: infoForm.guest,
        //children: [3, 8],
        //meal_code: ["AI", "FB"],
      },
    };
    setInfo(searchInfo);
  };

  return [
    info,
    {
      onSubmit,
    },
  ];
};
