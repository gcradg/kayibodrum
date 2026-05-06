import Image from "next/image";

type KayiLogoProps = {
  size?: "header" | "footer" | "admin";
  tone?: "dark" | "light" | "bronze";
  showBodrum?: boolean;
  className?: string;
};

const sizeClasses = {
  header: "w-[128px] sm:w-[168px]",
  footer: "w-[172px]",
  admin: "w-[138px]"
};

export function KayiMonogram({
  className = ""
}: {
  className?: string;
  tone?: "dark" | "light" | "bronze";
}) {
  return (
    <Image
      src="/brand/kayi-monogram-clean.png"
      alt="KAYI monogram"
      width={110}
      height={110}
      className={`block object-contain ${className}`}
      draggable={false}
      priority
    />
  );
}

export default function KayiLogo({
  size = "header",
  tone = "bronze",
  className = ""
}: KayiLogoProps) {
  const classes = sizeClasses[size];
  const src = tone === "dark" ? "/brand/kayi-logo-transparent-dark.png" : "/brand/kayi-logo-transparent-light.png";

  return (
    <Image
      src={src}
      alt="KAYI Bodrum"
      width={497}
      height={185}
      className={`${classes} block object-contain ${className}`}
      draggable={false}
      priority={size === "header"}
    />
  );
}
