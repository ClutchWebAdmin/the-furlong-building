export default function Curve({ variant }) {
  const rotations = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)",
  };

  return (
    <div
      style={{ width: "24px", height: "24px", transform: rotations[variant] }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0H0V24C0 10.7452 10.7452 0 24 0Z"
          fill={`var(--primaryWhite)`}
        />
      </svg>
    </div>
  );
}
