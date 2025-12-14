import { redirect } from "next/navigation"
import { Music2, Disc3, Clock, TrendingUp, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {

  const user = [
    {
      name:"deepak",
      email:"deepak@gmail.com",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Music2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SoundAI</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="text-sm">
                <p className="text-muted-foreground">Welcome back,</p>
                <p className="font-medium">{user.user_metadata?.name || user.email}</p>
              </div>
              <form action="/auth/signout" method="post">
                <Button type="submit" variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Welcome to your AI music creation studio. Start generating amazing tracks today!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Tracks Created</p>
                <Disc3 className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Start creating your first track</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Hours Generated</p>
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Total music generated</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Plan</p>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <p className="text-3xl font-bold">Free</p>
              <p className="text-xs text-muted-foreground">Upgrade for more features</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-lg p-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold">Ready to create?</h2>
              <p className="text-muted-foreground">
                Use our AI-powered music generator to create unique tracks in seconds. Choose from various genres,
                moods, and instruments.
              </p>
              <Button size="lg" className="mt-4">
                <Music2 className="w-5 h-5 mr-2" />
                Create New Track
              </Button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">No activity yet. Start creating to see your history here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
