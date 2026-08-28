import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CategoryCardProps = {
  name: string;
  href: string;
  image: string;
  className?: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  href,
  image,
  className,
}) => {
  return (
    <>
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-xl ${className}`}
      >
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
          <h3 className="text-2xl font-bold uppercase tracking-tight">
            {name}
          </h3>

          <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="size-5" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
