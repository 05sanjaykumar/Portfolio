// app/components/sections/Footer.tsx

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground space-y-2">
      <p>© {currentYear} Sanjay Builds. All Rights Reserved.</p>
      <div className="space-x-4">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/refund-policy" className="hover:underline">
          Refund Policy
        </Link>
      </div>
    </footer>
  );
}
