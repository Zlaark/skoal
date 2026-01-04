
export const metadata = {
    title: "About Skoal Solutions - People First, Always",
    description: "Learn about our mission to revolutionize global payroll with a human-centric approach.",
    openGraph: {
        title: "About Skoal Solutions",
        description: "Learn about our mission to revolutionize global payroll with a human-centric approach.",
        images: [
            {
                url: "/about-og.png",
                width: 1200,
                height: 630,
                alt: "Skoal Solutions About Page Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Skoal Solutions",
        description: "Learn about our mission to revolutionize global payroll with a human-centric approach.",
        images: ["/about-og.png"],
    },
};

export default function AboutLayout({ children }) {
    return children;
}
