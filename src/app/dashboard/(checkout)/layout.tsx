export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            {children}
        </div>
    );
}
