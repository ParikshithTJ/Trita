import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"
import CountryDropdown, { countries } from "../components/CountryDropdown"

export default function ContactPage() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = React.useState<string | null>(null)
  const [phoneError, setPhoneError] = React.useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = React.useState(countries.find(c => c.code === "+91") || countries[0])
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  })

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "")
    return digits
  }

  const validatePhoneNumber = (phone: string, country: typeof countries[0]): boolean => {
    if (!phone.trim()) return true
    
    const digits = phone.replace(/\D/g, "")
    return digits.length >= country.minLength && digits.length <= country.maxLength
  }

  const getPlaceholder = (country: typeof countries[0]): string => {
    if (country.code === "+91") return "98765 43210"
    if (country.code === "+1") return "234 567 8900"
    if (country.code === "+44") return "7911 123456"
    if (country.code === "+61") return "412 345 678"
    if (country.code === "+49") return "1512 3456789"
    if (country.code === "+33") return "6 12 34 56 78"
    if (country.code === "+81") return "090 1234 5678"
    return "123 456 789"
  }

  const getErrorMessage = (country: typeof countries[0]): string => {
    if (country.minLength === country.maxLength) {
      return `Please enter a valid ${country.minLength}-digit phone number`
    }
    return `Please enter a valid phone number (${country.minLength}-${country.maxLength} digits)`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setValues(v => ({ ...v, phone: formatted }))
    
    if (formatted && !validatePhoneNumber(formatted, selectedCountry)) {
      setPhoneError(getErrorMessage(selectedCountry))
    } else {
      setPhoneError(null)
    }
  }

  const handleCountryChange = (country: typeof countries[0]) => {
    setSelectedCountry(country)
    if (values.phone) {
      const isValid = validatePhoneNumber(values.phone, country)
      setPhoneError(isValid ? null : getErrorMessage(country))
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setStatus("sending")

    const name = values.name.trim()
    const email = values.email.trim()
    const phone = values.phone.trim()
    const message = values.message.trim()
    const fullPhone = phone ? `${selectedCountry.code}${phone}` : undefined

    if (!name || !email || !message) {
      setStatus("error")
      setError("Please fill in name, email, and message.")
      return
    }

    if (phone && !validatePhoneNumber(phone, selectedCountry)) {
      setStatus("error")
      setError(getErrorMessage(selectedCountry))
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phone: fullPhone, message, company: values.company }),
      })
      const data = (await res.json().catch(() => null)) as null | { ok?: boolean; error?: string }

      if (!res.ok || !data?.ok) {
        setStatus("error")
        setError(data?.error ?? "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setValues({ name: "", email: "", phone: "", message: "", company: "" })
    } catch {
      setStatus("error")
      setError("Network error. Please try again.")
    }
  }

  const inputCls =
    "h-11 w-full rounded-2xl border border-border bg-surface-warm px-4 font-body text-base text-foreground outline-none transition-all duration-200 focus:border-primary/60 focus:bg-background focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/30"

  return (
    <SiteLayout>

      <header className="space-y-4 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground">Contact</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Reach out for collaborations, programs, or media inquiries.
        </p>
      </header>

      <section className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="border-b border-border px-8 py-6 bg-muted/5">
            <div className="font-heading text-xl font-bold text-foreground">Send a message</div>
            <p className="mt-1 font-body text-sm text-muted-foreground">We usually respond within 1–2 working days.</p>
          </div>

          <form className="space-y-6 p-8" onSubmit={onSubmit}>
            <label className="hidden" aria-hidden="true">
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                value={values.company}
                onChange={e => setValues(v => ({ ...v, company: e.target.value }))}
              />
            </label>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-body text-sm font-bold text-foreground">Name</span>
                <input
                  className={inputCls}
                  value={values.name}
                  onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="font-body text-sm font-bold text-foreground">Email</span>
                <input
                  type="email"
                  className={inputCls}
                  value={values.email}
                  onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                  required
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="font-body text-sm font-bold text-foreground">Phone (optional)</span>
              <div className="flex gap-2">
                <div className="w-56 flex-shrink-0">
                  <CountryDropdown value={selectedCountry} onChange={handleCountryChange} />
                </div>
                <input
                  type="tel"
                  inputMode="tel"
                  className={`flex-1 ${inputCls} ${phoneError ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                  value={values.phone}
                  onChange={handlePhoneChange}
                  placeholder={getPlaceholder(selectedCountry)}
                />
              </div>
              {phoneError && (
                <p className="font-body text-xs font-bold text-destructive">{phoneError}</p>
              )}
            </label>

            <label className="grid gap-2">
              <span className="font-body text-sm font-bold text-foreground">Message</span>
              <textarea
                className={`${inputCls} h-32 py-3 resize-none`}
                value={values.message}
                onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
                required
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="submit"
                className="px-10 py-3 text-base rounded-full"
                disabled={status === "sending" || !!phoneError}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="font-body text-sm font-bold text-forest">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="font-body text-sm font-bold text-destructive">{error || "Error sending message."}</p>
              )}
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-heading text-lg font-bold text-foreground">Office</h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              1 Floor, "Samputa", 8th Cross,<br />
              Adipampa Road, V V Mohalla,<br />
              Mysore 570002
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-heading text-lg font-bold text-foreground">Direct Contact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex flex-col gap-1">
                <span className="font-display text-[10px] uppercase tracking-widest font-bold">Email</span>
                <a href="mailto:namaste@trita.in" className="font-body text-base font-bold text-primary hover:opacity-80">
                  namaste@trita.in
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-[10px] uppercase tracking-widest font-bold">Phone</span>
                <a href="tel:+919342184698" className="font-body text-base font-bold text-primary hover:opacity-80">
                  +91 93421 84698
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Contact" pathname="/contact" />
