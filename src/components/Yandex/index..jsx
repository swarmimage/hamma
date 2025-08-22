import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <YMaps>
      {/* обёртка делает квадрат через padding-bottom */}
      <div style={{
        width: "100%",
        paddingBottom: "100%", // 1:1 -> квадрат
        position: "relative",
        overflow: "hidden",
        borderRadius: 12, // если надо
        boxSizing: "border-box"
      }}>
        <Map
          defaultState={{
            center: [41.311151, 69.279737],
            zoom: 12
          }}
          // убираем height: clamp(...) — делаем абсолютным fill контейнера
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%"
          }}
          width="100%"
        >
          <Placemark geometry={[41.311288, 69.279656]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
  