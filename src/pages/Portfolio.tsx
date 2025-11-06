
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
        <Card>
          <CardHeader>
            <CardTitle>Your Holdings</CardTitle>
            <CardDescription>Track your investments and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Portfolio functionality coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}