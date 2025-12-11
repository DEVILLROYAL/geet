import Link from "next/link"
import { Mail, CheckCircle, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Music2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">SoundAI</span>
          </Link>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Check your email</h1>
          <p className="text-muted-foreground text-balance">
            We've sent you a confirmation email. Please click the link in the email to verify your account and complete
            your registration.
          </p>
        </div>

        {/* Email Icon */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <p className="text-sm font-medium">Confirmation email sent</p>
          </div>
        </div>

        {/* Tips */}
        <div className="space-y-2 text-left bg-muted/50 rounded-lg p-4">
          <p className="text-sm font-medium">Didn't receive the email?</p>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
            <li>Check your spam or junk folder</li>
            <li>Make sure you entered the correct email address</li>
            <li>Wait a few minutes and refresh your inbox</li>
          </ul>
        </div>

        {/* Back to Home */}
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
