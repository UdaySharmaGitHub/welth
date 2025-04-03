import HeroSection from "@/components/Hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white pt-32  min-h-screen">
    <HeroSection/>
    
    {/* Stats Data */}
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid place-items-center md:grid-cols-4 gap-8 grid-cols-2">
          {statsData.map((stat,index)=>(
            <div key={index} className="text-center">
              <div className="text-4xl md-2 text-blue-500 font-bold">{stat.value}</div>
              <div className=" text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* Features Section */}
    <section className="py-10">
      <div className="mx-auto container px-4">
        <h1 className="text-3xl md:text-4xl gradient-title font-bold text-center mb-12">Everything you need to manage your finanaces</h1>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {featuresData.map((data,index)=>(
            <Card key={index} className="p-6">
            <CardContent className="space-y-4 pt-4"> 
              {data.icon}
              <h3 className="text-xl font-semibold">{data.title}</h3>
              <p className="text-gray-600">{data.description}</p>
            </CardContent>
          </Card>          
))}
        </div>
      </div>
    </section>

    {/* How its Work Section  */}
    <section className="py-10 bg-blue-50">
      <div className="mx-auto container px-4">
        <h1 className="text-3xl md:text-4xl gradient-title font-bold text-center mb-12">How it Works</h1>
        <div className="grid place-items-center grid-cols-1 gap-8 md:grid-cols-3">
          {howItWorksData.map((data,index)=>(
            <div key={index} className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full grid place-items-center mx-auto mb-4">{data.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
              <p className="text-gray-600">{data.description}</p>
          </div>          
))}
        </div>
      </div>
    </section>

  {/* What our User say Section */}
  {/* Geeting user from random user API */}
  <section className="py-10">
      <div className="mx-auto container px-4">
        <h1 className="text-3xl md:text-4xl gradient-title font-bold text-center mb-12">Everything you need to manage your finanaces</h1>
        <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-3">
          {testimonialsData.map((testimonial,index)=>(
            <Card key={index} className="p-6">
            <CardContent className="pt-4"> 
              <div className="flex gap-4 items-center mb-4">
                <Image src={testimonial.image} alt="Testimonial image"
                width={40}
                height={40}
                className="rounded-full"
                />
                <div className="ml-4">
                <div className="font-semibold">{testimonial.role}</div>
                <div className="text-gray-600 text-sm">{testimonial.name}</div>
              </div>
              </div>
              
              <p className="text-gray-600 line-clamp-3">{testimonial.quote}</p>
            </CardContent>
          </Card>          
))}
        </div>
      </div>
    </section>

{/* CTA Section */}
<section className="py-10 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
