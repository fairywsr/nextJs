import "./globals.css";
export const metadata = {
  title: {
    template: "%s | Faria Dev",
    default: "Faria Dev",
  },
};

export default function RootLayout({ children }) {
  // console.log(children, "in layout file");
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
