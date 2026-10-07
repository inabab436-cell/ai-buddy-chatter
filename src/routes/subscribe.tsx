import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, Copy, Crown, ExternalLink, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { PageShell, PageHero, SurfaceCard } from "@/components/layout/page-shell";

const INSTAPAY_URL = "https://ipn.eg/S/cupai/instapay/9AjTZi";
const AMOUNT = "299";

export const Route = createFileRoute("/subscribe")({
  head: () => ({ meta: [
    { title: "الاشتراك · cupai" },
    { name: "description", content: "ادفع 299 جنيهًا عبر انستا باي لتفعيل اشتراكك." },
    { property: "og:title", content: "الاشتراك · cupai" },
    { property: "og:description", content: "ادفع عبر انستا باي وسيتم تفعيل اشتراكك." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: SubscribePage,
});

function SubscribePage() {
  const copyLink = () => {
    void navigator.clipboard?.writeText(INSTAPAY_URL);
    toast.success("تم نسخ رابط الدفع");
  };

  return (
    <PageShell>
      <PageHero eyebrow="الاشتراك" icon={<Crown className="h-3.5 w-3.5" />} title="ابدأ الآن بـ 299 جنيهًا" description="متاح الدفع الآن على انستا باي." />

      <div className="hub-dashboard space-y-5">
        <SurfaceCard>
          <div className="space-y-4 p-5 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Crown className="h-8 w-8" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">قيمة الاشتراك</p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight">
                {AMOUNT} <span className="text-lg font-bold text-muted-foreground">جنيه مصري</span>
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              أرسل المبلغ عبر انستا باي وسيتم ترقية حسابك.
              <br />
              التأكيد خلال 15 دقيقة.
            </p>

            <a
              href={INSTAPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              ادفع الآن عبر انستا باي
            </a>

            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-bold hover:bg-muted"
            >
              <Copy className="h-4 w-4" />
              نسخ رابط الدفع
            </button>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <div className="divide-y divide-border">
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-dashboard-green-soft text-dashboard-green"><CheckCircle2 className="h-4 w-4" /></span>
              <span className="text-sm font-semibold">أرسل 299 جنيهًا فقط — لا تُرسل أي مبلغ آخر.</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-dashboard-amber-soft text-dashboard-amber"><Clock className="h-4 w-4" /></span>
              <span className="text-sm font-semibold">بعد الدفع، يتم تأكيد اشتراكك خلال 15 دقيقة.</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><ShieldCheck className="h-4 w-4" /></span>
              <span className="text-sm font-semibold">ادفع فقط عبر الرابط الرسمي في هذه الصفحة.</span>
            </div>
          </div>
        </SurfaceCard>

        <Link to="/account" className="flex items-center justify-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowRight className="h-4 w-4" />
          العودة إلى حسابي
        </Link>
      </div>
    </PageShell>
  );
}
