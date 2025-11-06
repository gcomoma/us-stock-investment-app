
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Watchlist() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Watchlist</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Watchlist</CardTitle>
            <CardDescription>Monitor stocks you're interested in</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Watchlist functionality coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}