
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ArrowRight, BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const marketMovers = [
    { symbol: "AAPL", name: "Apple Inc.", price: "$182.45", change: "+2.34%", trend: "up" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$378.91", change: "+1.87%", trend: "up" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$141.23", change: "-0.45%", trend: "down" },
    { symbol: "TSLA", name: "Tesla Inc.", price: "$242.84", change: "+3.21%", trend: "up" },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Data",
      description: "Access live market data and charts for informed trading decisions",
    },
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Bank-level security to protect your investments and personal data",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Lightning-fast order execution to capture market opportunities",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05,
          }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">
              Commission-Free Trading
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Invest in Your Future with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Trade US stocks with zero commissions, real-time data, and powerful research tools. 
              Start building your portfolio today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/account">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/markets">
                <Button size="lg" variant="outline">
                  Explore Markets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Movers */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Market Movers</h2>
            <p className="text-muted-foreground">Top performing stocks today</p>
          </div>
          <Link to="/markets">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {marketMovers.map((stock) => (
            <Card key={stock.symbol} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{stock.symbol}</CardTitle>
                    <CardDescription className="text-xs">{stock.name}</CardDescription>
                  </div>
                  {stock.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold">{stock.price}</span>
                  <Badge 
                    variant={stock.trend === "up" ? "default" : "destructive"}
                    className={stock.trend === "up" ? "bg-success hover:bg-success/90" : ""}
                  >
                    {stock.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose StockTrader</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed investment decisions
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center pb-8 pt-12">
            <CardTitle className="text-3xl mb-4">Ready to Start Trading?</CardTitle>
            <CardDescription className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Join thousands of investors who trust StockTrader for their investment needs
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-12">
            <Link to="/account">
              <Button size="lg" variant="secondary" className="gap-2">
                Open Free Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}