import {ThemeProviders} from "../components/providers";

export default function RootLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>iamn</title>
        </head>
        <body>
        <ThemeProviders>
            {children}
        </ThemeProviders></body>
        </html>
    );
}