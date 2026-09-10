"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { title } from "process";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isLoading, setIsLoading] = useState(false);

  const accessKey = process.env.WEB3FORM_ACCESS_KEY;

  const { toast } = useToast();

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     // Replace with your actual form submission endpoint
  //     // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
  //     console.log("Form submitted:", formData)

  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     setSubmitStatus("success")
  //     setFormData({ name: "", email: "", message: "" })

  //     // Reset status after 3 seconds
  //     setTimeout(() => setSubmitStatus("idle"), 3000)
  //   } catch (error) {
  //     console.error("Error submitting form:", error)
  //     setSubmitStatus("error")
  //     setTimeout(() => setSubmitStatus("idle"), 3000)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  async function handleSubmit(event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    if (!accessKey) {
      toast({
        title: "Missing variable",
        description: "Missing Web3Forms access key in environment variables.",
      });
    } else {
      formData.append("access_key", accessKey);
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Checks if any field is an empty string, null, or undefined
    const hasEmptyField = Object.values(object).some(
      (value) => value === "" || value === null || value === undefined,
    );

    if (hasEmptyField) {
      toast({
        title: "Empty fields",
        description: "Please fill in all required fields.",
      });
      setIsLoading(false);
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      toast({
        title: "Success",
        description: "Message sent successfully! I'll get back to you soon.",
        // description: "Your message has been sent successfully!",
      });
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12 flex-wrap">
          <a
            href="mailto:kingsleyigbokwe909@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            <Mail size={20} className="text-white" /> Email Me
          </a>
          <a
            href="https://github.com/U-kings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/uchenna-igbokwe-773266105"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors font-medium"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} className="text-white" /> Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {/* {true && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-center">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 text-center">
              ✗ Error sending message. Please try again or email me directly.
            </div>
          )} */}
        </form>
      </div>
    </section>
  );
}
