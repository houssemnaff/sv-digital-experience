import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, ArrowRight, Send, CheckCircle } from "lucide-react";
import { sendEmail } from "@/utils/sendEmail";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    try {
      const res = await sendEmail({ name, email, subject, message });
      if (res && res.status === 200) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        // fallback to mailto if the API fails
        const mailto = `mailto:contact@svdigitalstudio.com?from=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email} (${name})\n\n${message}`)}`;
        window.location.href = mailto;
      }
    } catch (err) {
      const mailto = `mailto:contact@svdigitalstudio.com?from=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email} (${name})\n\n${message}`)}`;
      window.location.href = mailto;
    }
  };

  const inputClass =
    "w-full bg-background/40 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200 backdrop-blur-sm";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-medium tracking-widest uppercase text-primary mb-3 block">
          Let's Work Together
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-gradient-gold">Elevate</span> Your Brand?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Get in touch and let's discuss how we can bring your vision to life with
          stunning design and strategic marketing.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="text-left mb-10 space-y-4 rounded-2xl border border-border bg-background/20 backdrop-blur-sm p-6 md:p-8"
        >
          {/* Email + Subject row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and timeline..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="pt-1">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-base px-8 group"
            >
              {sent ? (
                <>
                  <CheckCircle className="mr-2" size={18} />
                  Message sent — thank you!
                </>
              ) : (
                <>
                  <Send className="mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
                  Send Message
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Social CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button variant="ghost-light" size="lg" className="text-base px-8" asChild>
            <a href="https://www.instagram.com/sv.digitalstudio?igsh=NzNnejcwZWphcW9k" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={18} /> Follow Us on Instagram
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SV Digital Studio. All rights reserved. — Tunisia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;