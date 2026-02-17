import { Button } from "@/components/ui/button";
import { Mail, Instagram, ArrowRight } from "lucide-react";

const Contact = () => {
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button variant="gold" size="lg" className="text-base px-8" asChild>
            <a href="mailto:contact@svdigitalstudio.com">
              <Mail className="mr-2" size={18} /> Book a Consultation <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="ghost-light" size="lg" className="text-base px-8" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={18} /> Follow Us
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
