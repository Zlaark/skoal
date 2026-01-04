
export const metadata = {
    title: "Contact Us - Skoal Solutions",
    description: "Connect with our global operations team in Dubai and Mumbai. Reach out for sales, support, or partnership inquiries.",
    openGraph: {
        title: "Contact Skoal Solutions",
        description: "Connect with our global operations team in Dubai and Mumbai. Reach out for sales, support, or partnership inquiries.",
        images: [
            {
                url: "/contact-og.png",
                width: 1200,
                height: 630,
                alt: "Contact Skoal Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Skoal Solutions",
        description: "Connect with our global operations team in Dubai and Mumbai.",
        images: ["/contact-og.png"],
    },
};

export default function ContactLayout({ children }) {
    return children;
}
