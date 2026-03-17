import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
  try {
    await emailjs.send(
      "service_gmkvtoc",        // your EmailJS service ID
      "template_0tn57wn",      // your EmailJS template ID
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      "V_l-M-C1sPzH6ZOwo"      // your EmailJS public key
    );

    toast({
      title: t("contact.form.success"),
    });

    reset();
  } catch (error) {
    toast({
      title: "Error",
      description: "Message sending failed",
      variant: "destructive",
    });
  }
};

  const contactInfo = [
    { icon: "📍", label: t("contact.address"), value: t("contact.address.value") },
    { icon: "📞", label: t("contact.phone"), value: t("contact.phone.value"), href: `tel:${t("contact.phone.value")}` },
    { icon: "✉️", label: t("contact.email"), value: t("contact.email.value"), href: `mailto:${t("contact.email.value")}` },
  ];

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>{t("contact.title")}</h1>
        <p className="text-center text-muted-foreground mb-10 md:mb-12 text-sm md:text-base px-2">{t("contact.subtitle")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3 md:gap-4 bg-card border border-border rounded-xl p-4 md:p-5">
                <span className="text-2xl md:text-3xl shrink-0">{icon}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-saffron text-sm md:text-base">{label}</p>
                  {href ? (
                    <a href={href} className="text-muted-foreground mt-0.5 text-sm md:text-base hover:text-saffron transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground mt-0.5 text-sm md:text-base">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-52 md:h-64">
              <iframe
                title="Gudiyatham Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.9521653903525!2d78.89738957358841!3d12.939084015593318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad6d00fbb1426b%3A0xbba90d408601719b!2sGUDIYATTAM%20Arivu%20Thirukoil%20-%20MVKM%20TRUST%20Vazhga%20Valamudan%20SKY%20YOGA%20CENTER!5e1!3m2!1sen!2sin!4v1773651833951!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-xl p-5 md:p-8 space-y-4 md:space-y-5 shadow-sm h-fit">
            <div className="space-y-1.5">
              <Label>{t("contact.form.name")}</Label>
              <Input {...register("name")} autoComplete="name" placeholder="yyyyy" />
            </div>
            <div className="space-y-1.5">
              <Label>{t("contact.form.email")}</Label>
              <Input type="email" inputMode="email" {...register("email")} autoComplete="email" placeholder="example@gmail.com" />
            </div>
            <div className="space-y-1.5">
              <Label>{t("contact.form.message")}</Label>
              <Textarea rows={5} {...register("message")} />
            </div>
            <Button type="submit" className="w-full h-11 text-base touch-manipulation" disabled={isSubmitting}>
              {isSubmitting ? "..." : t("contact.form.send")}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
