import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { branches } from "@/data/branches";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// 🔥 Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Enter valid 10 digit phone number"),
  email: z.string().email("Enter valid email"),
  address: z.string().min(5, "Address is required"),
  branch: z.string().min(1, "Select a branch"),
});

type FormData = z.infer<typeof schema>;

// 🔥 Generate Member ID
const generateMemberId = () => {
  return "GMKV-" + Math.floor(1000 + Math.random() * 9000);
};

const Membership = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const branchName =
        branches.find((b) => b.id === data.branch)?.name[language] ||
        data.branch;

      const memberId = generateMemberId();

      // ✅ Save in Firebase
      await addDoc(collection(db, "members"), {
        ...data,
        branch: branchName,
        memberId,
        createdAt: new Date(),
      });

      // ✅ Send Email
      await emailjs.send(
        "service_gmkvtoc",
        "template_9ol01gg",
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          branch: branchName,
          memberId: memberId,
        },
        "V_l-M-C1sPzH6ZOwo"
      );

      // ✅ Success
      toast({
        title: "Registration Successful 🎉",
        description: `Your Member ID: ${memberId}`,
      });

      navigate(`/profile/${memberId}`);

      reset();
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <main className="py-10 md:py-12">
      <div className="container mx-auto px-4 max-w-lg">

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-saffron mb-2"
          style={{ fontFamily: "'Crimson Text', serif" }}
        >
          {t("membership.title")}
        </h1>

        <p className="text-center text-muted-foreground mb-8 text-sm md:text-base">
          {t("membership.subtitle")}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card border border-border rounded-xl p-6 space-y-5 shadow-sm"
        >

          {/* Name */}
          <div className="space-y-1.5">
            <Label>{t("membership.name")}</Label>
            <Input
              {...register("name")}
              placeholder={
                language === "ta"
                  ? "உங்கள் பெயரை உள்ளிடவும்"
                  : "Enter your name"
              }
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label>{t("membership.phone")}</Label>
            <Input
              type="tel"
              {...register("phone")}
              placeholder="xxxxx xxxxx"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label>{t("membership.email")}</Label>
            <Input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-1.5">
            <Label>{t("membership.address")}</Label>
            <Textarea
              rows={3}
              {...register("address")}
              placeholder={
                language === "ta"
                  ? "உங்கள் முழு முகவரியை உள்ளிடவும்..."
                  : "Enter your full address..."
              }
              className={`w-full rounded-lg border px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-saffron ${
                errors.address ? "border-red-500" : "border-input"
              }`}
            />
            {errors.address && (
              <p className="text-xs text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Branch */}
          <div className="space-y-1.5">
            <Label>{t("membership.branch")}</Label>
            <select
              {...register("branch")}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">{t("membership.branch")}</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name[language]}
                </option>
              ))}
            </select>

            {errors.branch && (
              <p className="text-xs text-red-500">
                {errors.branch.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-11 text-base bg-saffron text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : t("membership.submit")}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Membership;