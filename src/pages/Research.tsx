
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Research() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Research</h1>
        <Card>
          <CardHeader>
            <CardTitle>Stock Research</CardTitle>
            <CardDescription>In-depth analysis and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Research tools coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}