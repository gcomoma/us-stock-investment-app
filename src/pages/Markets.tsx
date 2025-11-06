
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Markets() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Markets</h1>
        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>Real-time market data and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Market data functionality coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}