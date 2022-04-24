import { Button } from "@mui/material";
import "./cardHotel.scss";
import { Link } from "react-router-dom";

export const CardHotel = ({ hotel }) => {
  return (
    <>
      <div className="card-wrp">
        <div className="card-wrp__image">
          <p>{hotel.id}</p>
          <img
            src={hotel.images[0]}
            alt="image"
            style={{ width: 250, height: 250 }}
          />
        </div>
        <div className="card-wrp__desc">
          <h2 className="card-wrp__title">
            {hotel.name}{" "}
            {hotel.desc["Звёздность"]
              ? `(${hotel.desc["Звёздность"]} звезды)`
              : "(нет звёзд)"}
          </h2>
          <p className="card-wrp__address">{hotel.desc["Адрес"]}</p>
          <p className="card-wrp__address">{hotel.id}</p>
          <Button
            component={Link}
            to={`${hotel.id}`}
            color="secondary"
            sx={{
              width: 200,
              height: 61,
              marginTop: 10,
              borderRadius: 3,
              bgcolor: "background.purple",
            }}
            size="large"
            variant="contained"
            className="card-wrp__btn"
          >
            Показать номера
          </Button>
        </div>
      </div>
    </>
  );
};
