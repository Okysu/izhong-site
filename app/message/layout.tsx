export default function MessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-enter gap-4 py-8 md:py-10">
      <div className="inline-block text-center justify-center gap-2 p-4">
        {children}
      </div>
    </section>
  );
}
