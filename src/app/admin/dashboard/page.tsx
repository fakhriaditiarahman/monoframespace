"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    trend: "+12%",
    trendUp: true,
    description: "Compared to last month",
    icon: "shopping_bag",
  },
  {
    title: "Pending Requests",
    value: "12",
    trend: "Action Needed",
    trendUp: false,
    description: "Requires attention within 24h",
    icon: "pending_actions",
    trendColor: "text-amber-500",
  },
  {
    title: "Active Portfolios",
    value: "85",
    trend: "3 New",
    trendUp: true,
    description: "Across all sub-brands",
    icon: "photo_library",
  },
]

const recentOrders = [
  {
    id: "#ORD-001",
    client: "Acme Corp",
    initials: "AC",
    service: "Monobox Event",
    serviceColor: "bg-blue-500",
    date: "Oct 24, 2023",
    amount: "Rp 12.000.000",
    status: "Completed",
    statusColor: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  },
  {
    id: "#ORD-002",
    client: "Globex Systems",
    initials: "GS",
    service: "Monodev Website",
    serviceColor: "bg-purple-500",
    date: "Oct 22, 2023",
    amount: "Rp 45.000.000",
    status: "In Progress",
    statusColor: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  },
  {
    id: "#ORD-003",
    client: "Sarah Jenkins",
    initials: "SJ",
    service: "Studio Portrait",
    serviceColor: "bg-pink-500",
    date: "Oct 21, 2023",
    amount: "Rp 3.500.000",
    status: "Pending",
    statusColor: "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400",
  },
  {
    id: "#ORD-004",
    client: "Tech Innovations",
    initials: "TI",
    service: "Monobox Rental",
    serviceColor: "bg-blue-500",
    date: "Oct 20, 2023",
    amount: "Rp 8.500.000",
    status: "Completed",
    statusColor: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400",
  },
  {
    id: "#ORD-005",
    client: "Macro Media",
    initials: "MM",
    service: "Monodev Maintenance",
    serviceColor: "bg-purple-500",
    date: "Oct 19, 2023",
    amount: "Rp 2.500.000",
    status: "In Progress",
    statusColor: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  },
]

const activities = [
  { text: "New order received from Acme Corp", time: "2 hours ago", color: "bg-blue-500" },
  { text: "Sarah Jenkins updated portfolio images", time: "5 hours ago", color: "bg-slate-300 dark:bg-slate-600" },
  { text: "System backup completed", time: "12 hours ago", color: "bg-slate-300 dark:bg-slate-600" },
]

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back! Here's what's happening with your brands today.</p>
        </div>
        <div className="mt-4 flex gap-3 sm:mt-0">
          <Button variant="outline" className="border-slate-200 dark:border-slate-700">
            <span className="material-symbols-outlined mr-2 text-[18px]">download</span>
            Export
          </Button>
          <Button className="bg-primary hover:bg-blue-600">
            <span className="material-symbols-outlined mr-2 text-[18px]">add</span>
            New Order
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</h3>
              <span className="material-symbols-outlined text-slate-400">{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
              <span className={`text-sm font-medium flex items-center ${stat.trendColor || (stat.trendUp ? 'text-green-600' : 'text-amber-500')}`}>
                <span className="material-symbols-outlined text-[16px] mr-1">{stat.trendUp ? 'trending_up' : 'priority_high'}</span>
                {stat.trend}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.description}</p>
          </Card>
        ))}
      </div>

      {/* Recent Orders Table */}
      <Card className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Orders</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage and track your latest service requests.</p>
          </div>
          <div className="flex gap-2">
            <input
              className="h-9 rounded-md border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-1 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-[200px]"
              placeholder="Filter orders..."
              type="text"
            />
            <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined mr-2 text-[18px]">filter_list</span>
              Filter
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Order ID</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {recentOrders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-xs`}>
                        {order.initials}
                      </div>
                      <span className="font-medium">{order.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${order.serviceColor}`}></div>
                      <span>{order.service}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{order.date}</td>
                  <td className="px-6 py-4 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                      <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 p-4 px-6">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Showing <strong>1-5</strong> of <strong>24</strong> orders
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700">Previous</Button>
            <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700">Next</Button>
          </div>
        </div>
      </Card>

      {/* Bottom Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activities */}
        <Card className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Recent Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className={`mt-1 h-2 w-2 rounded-full ${activity.color}`}></div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.text}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Quick Actions</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Common tasks you perform often.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary">add_photo_alternate</span>
              <span className="text-sm font-medium">Upload Media</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10">
              <span className="material-symbols-outlined text-primary">post_add</span>
              <span className="text-sm font-medium">New Post</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
