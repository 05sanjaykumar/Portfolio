// app/components/sections/Footer.tsx

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Sanjay Builds. All Rights Reserved.</p>
            {/* Optional: Add Privacy Policy / Terms links here */}
        </footer>
    )
}