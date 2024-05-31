export default function ErrorMessage({ message = "error message" }) {
  return (
    <>
      <p className="text-sm font-bold text-red-500">{message}</p>
    </>
  );
}
