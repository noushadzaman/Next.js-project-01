"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomLink({ path, prefetch = true, children }) {
    const pathname = usePathname();
    const active = pathname === path;

    return (
        <Link
            href={path}
            className={active ? "text-rose-400" : "text-gray-400"}
            scroll={false} //default
            prefetch={prefetch}
        >
            {children}
        </Link>
    );
}
