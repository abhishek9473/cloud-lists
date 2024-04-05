export default function UseIndicator({ bgcolor, totalStorage, usedStorage }) {
  const usedData = (usedStorage * 100) / totalStorage;

  const [red, green, blue] = bgcolor.match(/\d+/g);

  return (
    <div
      style={{
        height: "8px",
        width: "180px",
        backgroundColor: `rgba(${red},${green},${blue},0.3)`,
        borderRadius: 40,
      }}
    >
      <div
        className="rela"
        style={{
          position: "relative",
          height: "100%",
          width: `${usedData}%`,
          backgroundColor: bgcolor,
          opacity: 1,
          borderRadius: 40,
          textAlign: "right",
        }}
      />
    </div>
  );
}
