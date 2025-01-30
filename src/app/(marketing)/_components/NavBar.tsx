import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background">
      <nav className="flex items-center gap-10 container">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="#pricing" className="mr-auto">
          Pricing
        </Link>
        <Link href="/" className="mr-auto">
          Features
        </Link>
        <Link href="/" className="mr-auto">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
