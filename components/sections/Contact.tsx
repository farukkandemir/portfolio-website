"use client";

import { useRef, useState } from "react";
import Container from "../layout/Container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      await emailjs.sendForm(
        "service_7hrnpo2",
        "template_qeka9eb",
        formRef.current,
        "G0ATFLIquX2Cic_SH"
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
      setShowForm(false);
    } catch (error) {
      toast.error("Failed to send message");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-emerald-500/10 blur-3xl rounded-full" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <p className="text-emerald-400 font-mono text-sm tracking-wider">
            06. GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold text-zinc-100">Let's Connect</h2>
          <div className="w-16 h-1 bg-emerald-500/20 rounded-full" />
        </div>

        {/* Contact Content */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Main Contact Card */}
            <div className="relative overflow-hidden p-8 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
              <div className="space-y-6">
                {!showForm ? (
                  <>
                    <p className="text-lg text-zinc-300 text-center">
                      Currently open for new opportunities and interesting
                      projects. Feel free to reach out if you'd like to discuss
                      potential collaboration.
                    </p>

                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        onClick={() => setShowForm(true)}
                        className="group bg-emerald-600 hover:bg-emerald-700 text-zinc-100"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="user_name">Name</Label>
                      <Input
                        id="user_name"
                        name="user_name"
                        required
                        className="bg-zinc-800/50 border-zinc-700/50 focus-visible:ring-emerald-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="user_email">Email</Label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        className="bg-zinc-800/50 border-zinc-700/50 focus-visible:ring-emerald-500/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="bg-zinc-800/50 border-zinc-700/50 focus-visible:ring-emerald-500/50 resize-none"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-zinc-100 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="border-zinc-700/50 hover:bg-zinc-800/50"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="https://www.linkedin.com/in/farukkandemir"
                target="_blank"
                className="group relative overflow-hidden p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50 transition-colors hover:border-emerald-500/50 flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-sm text-zinc-300 group-hover:text-emerald-300 transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </Link>

              <Link
                href="https://github.com/farukkandemir"
                target="_blank"
                className="group relative overflow-hidden p-4 bg-zinc-900/30 rounded-xl border border-zinc-800/50 transition-colors hover:border-emerald-500/50 flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Github className="h-5 w-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-sm text-zinc-300 group-hover:text-emerald-300 transition-colors">
                    GitHub Profile
                  </span>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </Link>
            </div>

            {/* Location Info */}
            <div className="text-center space-y-2">
              <p className="text-sm text-zinc-400">Based in</p>
              <p className="text-zinc-300">Denver, CO • Mountain Timezone</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
