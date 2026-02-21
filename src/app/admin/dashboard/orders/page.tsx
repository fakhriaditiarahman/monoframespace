"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react"

interface Order {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  service: string
  package: string
  event_date: string
  message: string
  status: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    // In production, fetch from Supabase
    // Mock data for demonstration
    const mockOrders: Order[] = [
      {
        id: "1",
        created_at: "2024-02-20T10:00:00Z",
        name: "Sarah Amelia",
        email: "sarah@example.com",
        phone: "0812-3456-7890",
        service: "monobox",
        package: "Gold Package",
        event_date: "2024-03-15",
        message: "Wedding reception photobooth needed",
        status: "pending",
      },
      {
        id: "2",
        created_at: "2024-02-19T14:30:00Z",
        name: "Budi Santoso",
        email: "budi@example.com",
        phone: "0813-4567-8901",
        service: "studio",
        package: "Premium Session",
        event_date: "2024-03-10",
        message: "Prewedding photo session",
        status: "confirmed",
      },
      {
        id: "3",
        created_at: "2024-02-18T09:15:00Z",
        name: "Dina Kartika",
        email: "dina@example.com",
        phone: "0814-5678-9012",
        service: "monodev",
        package: "Company Profile",
        event_date: "",
        message: "Need company profile website for law firm",
        status: "in_progress",
      },
    ]
    setOrders(mockOrders)
    setLoading(false)
  }, [])

  const filteredOrders = filter === "all" ? orders : orders.filter(o => o.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-blue-100 text-blue-800"
      case "in_progress":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getServiceColor = (service: string) => {
    switch (service) {
      case "monobox":
        return "text-pink-600"
      case "monodev":
        return "text-blue-600"
      case "studio":
        return "text-purple-600"
      default:
        return "text-gray-600"
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading orders...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground mt-1">Manage all bookings and requests</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {order.name}
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span className={getServiceColor(order.service)}>{order.service}</span>
                    <span>•</span>
                    <span>{order.package}</span>
                    <span>•</span>
                    <span>{new Date(order.created_at).toLocaleDateString()}</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${order.email}`} className="hover:underline">{order.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`https://wa.me/${order.phone}`} className="hover:underline">{order.phone}</a>
                  </div>
                  {order.event_date && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Event: {new Date(order.event_date).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
                {order.message && (
                  <div className="flex items-start gap-2 text-sm">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <p className="text-muted-foreground">{order.message}</p>
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <Button size="sm" variant="outline">View Details</Button>
                <Button size="sm">Contact via WA</Button>
                {order.status === "pending" && (
                  <>
                    <Button size="sm" variant="secondary">Confirm</Button>
                    <Button size="sm" variant="destructive">Reject</Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No orders found with the selected filter.
        </div>
      )}
    </div>
  )
}
