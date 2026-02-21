"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Image as ImageIcon, Plus, Pencil, Trash2 } from "lucide-react"

interface Portfolio {
  id: string
  service: string
  title: string
  description: string
  image_url: string
  created_at: string
}

export default function PortfoliosPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    service: "",
    title: "",
    description: "",
    image_url: "",
  })

  // Mock data
  const portfolios: Portfolio[] = [
    {
      id: "1",
      service: "monobox",
      title: "Wedding Photobooth - Sarah & John",
      description: "Photobooth setup for wedding reception",
      image_url: "",
      created_at: "2024-02-15",
    },
    {
      id: "2",
      service: "monodev",
      title: "UMKM Website - Coffee Shop",
      description: "E-commerce website for local coffee shop",
      image_url: "",
      created_at: "2024-02-10",
    },
    {
      id: "3",
      service: "studio",
      title: "Prewedding Session - Andi & Rina",
      description: "Studio prewedding photoshoot",
      image_url: "",
      created_at: "2024-02-05",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setShowForm(false)
    setFormData({ service: "", title: "", description: "", image_url: "" })
  }

  const handleEdit = (portfolio: Portfolio) => {
    setFormData({
      service: portfolio.service,
      title: portfolio.title,
      description: portfolio.description,
      image_url: portfolio.image_url,
    })
    setEditingId(portfolio.id)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this portfolio?")) {
      console.log("Delete:", id)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portfolios</h1>
          <p className="text-muted-foreground mt-1">Showcase your best work</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Portfolio
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Portfolio" : "Add New Portfolio"}</CardTitle>
            <CardDescription>
              {editingId ? "Update portfolio information" : "Add a new portfolio item to showcase"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monobox">Monobox</SelectItem>
                      <SelectItem value="monodev">Monodev</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Portfolio title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the project"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingId ? "Update" : "Save"}</Button>
                <Button type="button" variant="outline" onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData({ service: "", title: "", description: "", image_url: "" })
                }}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardHeader className="pb-2">
              <div className="text-xs font-medium text-muted-foreground mb-1 capitalize">{portfolio.service}</div>
              <CardTitle className="text-lg">{portfolio.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{portfolio.description}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => handleEdit(portfolio)}>
                  <Pencil className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleDelete(portfolio.id)}>
                  <Trash2 className="h-3 w-3 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
