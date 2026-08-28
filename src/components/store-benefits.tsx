import { CreditCard, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your order delivered quickly and reliably.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free returns when something isn't right.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your payment information is always protected.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Choose from multiple convenient payment options.",
  },
];

export function StoreBenefits() {
  return (
    <section className="border-y bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center px-4 py-6 text-center md:px-6"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
                  <Icon className="size-5" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-tight">
                  {benefit.title}
                </h3>

                <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
