export default function CardsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-10 justify-items-center items-stretch">
      {children}
    </ul>
  );
}
