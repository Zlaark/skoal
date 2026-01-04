
export const metadata = {
    title: "Global Payroll & HR Services | Skoal Solutions",
    description: "Comprehensive global payroll, statutory compliance, and HRMS solutions tailored for modern enterprises.",
    openGraph: {
        title: "Global Payroll & HR Services",
        description: "Comprehensive global payroll, statutory compliance, and HRMS solutions tailored for modern enterprises.",
        images: [
            {
                url: "/services-og.png",
                width: 1200,
                height: 630,
                alt: "Skoal Solutions Services Overview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Global Payroll & HR Services | Skoal Solutions",
        description: "Comprehensive global payroll, statutory compliance, and HRMS solutions tailored for modern enterprises.",
        images: ["/services-og.png"],
    },
};

export default function ServicesLayout({ children }) {
    return children;
}
