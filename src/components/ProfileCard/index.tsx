import Image from "next/image";
import { Circle } from "..";

export const ProfileCard = ({ style }: { style?: object }) => {
  return (
    <div
      style={{
        padding: 23,
        backgroundColor: "#fff",
        width: "fit-content",
        border: "1px solid rgba(111, 111, 111, 0.2)",
        borderRadius: 16,
        ...style
      }}
    >
      <div
        className="flex-col align-center"
        style={{ paddingTop: 40, marginBottom: 21 }}
      >
        <Circle
          style={{
            backgroundColor: "rgba(255,255,0,0.6)",
            marginBottom: 22
          }}
        >
          <Image
            src="/images/avatar.svg"
            alt="avatar"
            width="100%"
            height="100%"
          />
        </Circle>

        <h2 className="f14 fw700 center-text " style={{ marginBottom: 22 }}>
          George Smart
        </h2>
        <h3
          className="center-text f14"
          style={{
            padding: "6px 33px",
            backgroundColor: "rgba(235, 50, 35, 0.25)",
            borderRadius: 100,
            color: "rgba(235, 50, 35, 1)"
          }}
        >
          Premium
        </h3>
      </div>
      <div
        style={{
          paddingTop: 17,
          borderTop: "1px solid rgba(216, 216, 216, 1)"
        }}
      >
        <ul>
          {[
            { title: "Phone", value: "08192308934" },
            { title: "Email", value: "johndoe@gmail.com" },
            { title: "DOB", value: "12/12/2000" },
            { title: "Country", value: "Nigeria" },
            { title: "State", value: "Rivers" },
            { title: "Address", value: "15 Johnson Street" }
          ].map((item, idx) => (
            <li
              className="flex"
              key={idx}
              style={{ marginBottom: 20, padding: "0 8px" }}
            >
              <p
                style={{ width: 80, color: "rgba(111, 111, 111, 1)" }}
                className="f14"
              >
                {item.title} :
              </p>
              <p style={{ color: "rgba(111, 111, 111, 1)" }} className="f14">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
