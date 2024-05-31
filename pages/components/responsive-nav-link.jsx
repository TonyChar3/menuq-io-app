import Link from "next/link";

export default function ResponsiveNavLink({ icon, text, link }) {
  return (
    <>
      <Link
        href={link}
        className="mx-[-0.65rem] font-medium px-4 py-2 my-2 w-full font-medium md:text-xl lg:mx-0 flex items-center gap-6 lg:gap-3 rounded-xl"
      >
        {icon}
        {text}
      </Link>
    </>
  );
}
