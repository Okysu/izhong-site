export default function ImagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block text-center justify-center p-4">
				{children}
			</div>
		</section>
	);
}
