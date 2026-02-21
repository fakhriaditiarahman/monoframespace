"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText } from "lucide-react"

export default function ContentPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Content saved")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Page Content</h1>
        <p className="text-muted-foreground mt-1">Manage static content for each page</p>
      </div>

      {/* Home Page Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Home Page</CardTitle>
          </div>
          <CardDescription>Edit content for the landing page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="home-hero-title">Hero Title</Label>
            <Input
              id="home-hero-title"
              defaultValue="Welcome to Monoframe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="home-hero-description">Hero Description</Label>
            <Textarea
              id="home-hero-description"
              rows={3}
              defaultValue="Creative brand yang menaungi tiga lini usaha: Photobooth, Web Development, dan Photography Studio."
            />
          </div>
        </CardContent>
      </Card>

      {/* Monobox Page Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Monobox Page</CardTitle>
          </div>
          <CardDescription>Edit content for Monobox photobooth page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monobox-description">Service Description</Label>
            <Textarea
              id="monobox-description"
              rows={3}
              defaultValue="Layanan photobooth profesional untuk wedding, ulang tahun, corporate event, dan berbagai acara spesial lainnya."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monobox-packages">Packages Description</Label>
            <Textarea
              id="monobox-packages"
              rows={3}
              defaultValue="Pilih paket photobooth yang sesuai dengan kebutuhan acara Anda."
            />
          </div>
        </CardContent>
      </Card>

      {/* Monodev Page Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Monodev Page</CardTitle>
          </div>
          <CardDescription>Edit content for Monodev web development page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monodev-description">Service Description</Label>
            <Textarea
              id="monodev-description"
              rows={3}
              defaultValue="Jasa pembuatan website profesional untuk UMKM, landing page, dan company profile."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="monodev-disclaimer">Assignment Help Disclaimer</Label>
            <Textarea
              id="monodev-disclaimer"
              rows={3}
              defaultValue="Layanan joki tugas kami bersifat bimbingan dan pembelajaran. Kami membantu Anda memahami konsep dan implementasi."
            />
          </div>
        </CardContent>
      </Card>

      {/* Studio Page Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Studio Page</CardTitle>
          </div>
          <CardDescription>Edit content for Monoframe Studio page</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="studio-description">Studio Description</Label>
            <Textarea
              id="studio-description"
              rows={3}
              defaultValue="Studio foto profesional dengan peralatan lengkap dan tim berpengalaman."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studio-facilities">Facilities Description</Label>
            <Textarea
              id="studio-facilities"
              rows={3}
              defaultValue="Kami menyediakan peralatan dan fasilitas lengkap untuk hasil foto terbaik."
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save All Changes</Button>
      </div>
    </div>
  )
}
