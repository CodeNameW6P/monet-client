"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";

interface NewsletterDialogProps {
  buttonTitle?: string;
}

export default function NewsletterDialog({
  buttonTitle = "Join the Monet Cult",
}: NewsletterDialogProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      setEmail("");
      setError("");
      setSuccess(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("Newsletter service is not configured.");
      }

      const response = await fetch(
        `${apiUrl.replace(/\/+$/, "")}/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to subscribe. Please try again.",
        );
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger>
        <Button
          type="button"
          className="bg-accent font-semibold text-accent-foreground hover:bg-accent/80"
        >
          {buttonTitle}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md border-0 bg-background p-0 sm:rounded-2xl">
        <div className="relative overflow-hidden rounded-lg">
          {/* Custom close button */}
          <button
            type="button"
            onClick={() => handleOpenChange(false)}
            aria-label="Close newsletter dialog"
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="bg-black px-6 py-10 text-center text-white sm:px-9">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
              The Monet Newsletter
            </p>

            <DialogHeader className="space-y-3 text-center">
              <DialogTitle className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Stay in the loop.
              </DialogTitle>

              <DialogDescription className="mx-auto max-w-xs text-sm leading-6 text-white/70">
                New drops. Bold designs. Updates worth opening your inbox for.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-6 py-7 sm:px-9">
            {success ? (
              <div
                className="flex flex-col items-center py-4 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="mb-4 h-10 w-10" />

                <h3 className="text-xl font-semibold">Welcome to the cult.</h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Check your inbox for a welcome email from Monet. Can't find
                  it? Check your spam folder. We wouldn't want you to miss out.
                </p>

                <Button
                  className="mt-6 w-full"
                  onClick={() => handleOpenChange(false)}
                >
                  Continue exploring
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="newsletter-email"
                    className="text-sm font-medium"
                  >
                    Email address
                  </label>

                  <Input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={loading}
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading || !email.trim()}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join the cult
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  By subscribing, you agree to receive news and marketing emails
                  from Monet. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
