export default function InfoPage({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 px-4 md:px-8 text-white">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">{title}</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
