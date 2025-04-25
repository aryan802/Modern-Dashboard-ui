import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white dark:bg-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl">Dashboard</div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Settings</Button>
          <Button variant="ghost" size="sm">Profile</Button>
          <Button size="sm">Upgrade</Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here's an overview of your dashboard.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+201 since last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>View your analytics data across all projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-md">
                  <p className="text-muted-foreground">Analytics Chart Placeholder</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>You have 12 active projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">Project {item}</div>
                        <div className="text-sm text-muted-foreground">Updated 2 days ago</div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Projects</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>You have 5 tasks due today.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2 border rounded-md">
                      <div className="h-4 w-4 rounded-full border border-primary"></div>
                      <div className="flex-1 text-sm">Task {item}</div>
                      <div className="text-xs text-muted-foreground">2h</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Add New Task</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>You have 12 team members.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-200"></div>
                      <div>
                        <div className="text-sm font-medium">Team Member {item}</div>
                        <div className="text-xs text-muted-foreground">Designer</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 