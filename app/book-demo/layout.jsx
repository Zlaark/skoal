
export const metadata = {
    title: "Book a Demo - Skoal Solutions",
    description: "Schedule a personalized demo of our global payroll and HRMS platform. See how we can transform your workforce operations.",
    openGraph: {
        title: "Book a Demo - Skoal Solutions",
        description: "Schedule a personalized demo of our global payroll and HRMS platform.",
        images: [
            {
                url: "/book-demo-og.png",
                width: 1200,
                height: 630,
                alt: "Book a Skoal Solutions Demo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book a Demo - Skoal Solutions",
        description: "Schedule a personalized demo of our global payroll and HRMS platform.",
        images: ["/book-demo-og.png"],
    },
};

export default function BookDemoLayout({ children }) {
    return children;
}
