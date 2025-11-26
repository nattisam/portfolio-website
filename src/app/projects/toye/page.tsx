'use client'

import ProjectCaseStudyLayout from '@/components/ProjectCaseStudyLayout'

export default function ToyePage() {
  return (
    <ProjectCaseStudyLayout
      title="Toye – Restaurant SaaS Platform"
      description="A comprehensive restaurant management platform with order processing, inventory management, and customer analytics. Features real-time order tracking, automated inventory optimization, and detailed business insights."
      technologies={["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Socket.io"]}
      status="live"
      projectId="toye"
    >
      <div className="prose prose-invert max-w-none">
        <h1>Toye – Restaurant SaaS Platform</h1>

        <p>Toye is a modern restaurant management platform that transforms how restaurants operate in the digital age. Built as a comprehensive SaaS solution, it provides everything from order management to customer insights, enabling restaurants to focus on what they do best—creating exceptional dining experiences.</p>

        <h2>Problem Statement</h2>

        <p>Traditional restaurant management systems were fragmented, expensive, and difficult to use. Restaurants struggled with:</p>

        <ul>
          <li>Manual order processing and inventory tracking</li>
          <li>Disconnected systems for POS, kitchen, and delivery</li>
          <li>Poor customer data insights</li>
          <li>High operational costs and complexity</li>
          <li>Limited scalability for growing businesses</li>
        </ul>

        <h2>Solution Architecture</h2>

        <h3>System Design</h3>

        <p>Toye's architecture is built around a microservices approach, ensuring scalability and maintainability:</p>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`graph TB
    A[Customer App] --> B[API Gateway]
    C[Restaurant Dashboard] --> B
    D[Delivery Partner] --> B

    B --> E[Order Service]
    B --> F[Inventory Service]
    B --> G[Analytics Service]
    B --> H[Payment Service]

    E --> I[(PostgreSQL)]
    F --> I
    G --> J[(Redis Cache)]
    H --> K[Stripe API]

    L[Docker Container] --> M[Kubernetes Cluster]
    M --> N[AWS EKS]`}</code></pre>
        </div>

        <h3>Technology Stack</h3>

        <table className="w-full border-collapse border border-border bg-background-secondary rounded-lg">
          <thead>
            <tr>
              <th className="border border-border bg-background-tertiary px-4 py-3 text-left font-semibold">Component</th>
              <th className="border border-border bg-background-tertiary px-4 py-3 text-left font-semibold">Technology</th>
              <th className="border border-border bg-background-tertiary px-4 py-3 text-left font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-3">Frontend</td>
              <td className="border border-border px-4 py-3">React + TypeScript</td>
              <td className="border border-border px-4 py-3">Customer and admin interfaces</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Backend</td>
              <td className="border border-border px-4 py-3">Node.js + Express</td>
              <td className="border border-border px-4 py-3">API services and business logic</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Database</td>
              <td className="border border-border px-4 py-3">PostgreSQL</td>
              <td className="border border-border px-4 py-3">Primary data storage</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Cache</td>
              <td className="border border-border px-4 py-3">Redis</td>
              <td className="border border-border px-4 py-3">Session and analytics caching</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Payments</td>
              <td className="border border-border px-4 py-3">Stripe</td>
              <td className="border border-border px-4 py-3">Payment processing</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Real-time</td>
              <td className="border border-border px-4 py-3">Socket.io</td>
              <td className="border border-border px-4 py-3">Order updates and notifications</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Deployment</td>
              <td className="border border-border px-4 py-3">Docker + Kubernetes</td>
              <td className="border border-border px-4 py-3">Container orchestration</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3">Cloud</td>
              <td className="border border-border px-4 py-3">AWS</td>
              <td className="border border-border px-4 py-3">Infrastructure and services</td>
            </tr>
          </tbody>
        </table>

        <h2>Key Features</h2>

        <h3>Order Management System</h3>

        <p>The heart of Toye is its sophisticated order management system that handles everything from dine-in to delivery:</p>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`interface Order {
  id: string
  restaurantId: string
  customerId: string
  items: OrderItem[]
  status: OrderStatus
  paymentStatus: PaymentStatus
  deliveryAddress?: Address
  createdAt: Date
  estimatedDeliveryTime?: Date
}`}</code></pre>
        </div>

        <p><strong>Real-time Order Tracking:</strong></p>
        <ul>
          <li>Live order status updates for customers</li>
          <li>Kitchen display integration</li>
          <li>Automated notifications via SMS and email</li>
          <li>GPS tracking for delivery orders</li>
        </ul>

        <h3>Inventory Management</h3>

        <p>Intelligent inventory tracking with predictive analytics:</p>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`// Inventory optimization algorithm
function optimizeInventory(item) {
  const salesVelocity = calculateSalesVelocity(item)
  const reorderPoint = salesVelocity * LEAD_TIME_DAYS
  const safetyStock = salesVelocity * SAFETY_FACTOR

  return {
    reorderPoint,
    safetyStock,
    suggestedOrderQuantity: Math.max(
      reorderPoint + safetyStock - item.currentStock,
      item.minimumOrderQuantity
    )
  }
}`}</code></pre>
        </div>

        <h3>Customer Analytics Dashboard</h3>

        <p>Comprehensive insights to drive business decisions:</p>

        <ul>
          <li>Customer lifetime value analysis</li>
          <li>Order frequency and patterns</li>
          <li>Popular items and peak hours</li>
          <li>Customer retention metrics</li>
          <li>Revenue forecasting</li>
        </ul>

        <h2>Implementation Details</h2>

        <h3>Database Schema</h3>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`-- Core tables for Toye platform
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  address JSONB,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);`}</code></pre>
        </div>

        <h3>API Design</h3>

        <p>RESTful API with GraphQL for complex queries:</p>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`// Order creation endpoint
app.post('/api/orders', async (req, res) => {
  const { restaurantId, items, customerInfo } = req.body

  // Validate order
  const validation = await validateOrder(restaurantId, items)
  if (!validation.valid) {
    return res.status(400).json({ error: validation.errors })
  }

  // Create order
  const order = await createOrder({
    restaurantId,
    items,
    customerInfo,
    total: validation.total
  })

  // Emit real-time update
  io.to(\`restaurant-\${restaurantId}\`).emit('new-order', order)

  res.json(order)
})`}</code></pre>
        </div>

        <h2>Deployment & DevOps</h2>

        <h3>CI/CD Pipeline</h3>

        <div className="bg-background-tertiary p-4 rounded-lg my-6">
          <pre><code>{`# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build application
        run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to AWS EKS
        run: |
          aws eks update-kubeconfig --region us-east-1 --name toye-prod
          kubectl apply -f k8s/
          kubectl rollout restart deployment/toye-api`}</code></pre>
        </div>

        <h2>Results & Impact</h2>

        <h3>Key Metrics</h3>

        <ul>
          <li><strong>500+ Restaurants</strong> actively using the platform</li>
          <li><strong>99.9% Uptime</strong> in production</li>
          <li><strong>&lt;200ms</strong> average API response time</li>
          <li><strong>45% Reduction</strong> in operational costs for restaurants</li>
          <li><strong>60% Increase</strong> in customer retention</li>
        </ul>

        <h3>Customer Testimonials</h3>

        <blockquote className="border-l-4 border-accent bg-background-tertiary/50 p-6 rounded-r-lg mb-6 italic">
          "Toye transformed our restaurant operations. We went from chaotic manual processes to a streamlined digital system that our staff actually enjoys using." – Maria Rodriguez, Owner, Bella Vista Restaurant
        </blockquote>

        <h2>Future Roadmap</h2>

        <h3>Planned Features</h3>

        <ul>
          <li><strong>AI-Powered Menu Optimization</strong>: Machine learning recommendations for menu pricing and item popularity</li>
          <li><strong>Mobile POS System</strong>: Native iOS/Android apps for restaurant staff</li>
          <li><strong>Advanced Analytics</strong>: Predictive analytics for demand forecasting</li>
          <li><strong>Multi-location Support</strong>: Chain management features for restaurant groups</li>
          <li><strong>Integration APIs</strong>: Third-party integrations with delivery services and POS systems</li>
        </ul>

        <p><em>This case study showcases the complete journey of building a production-ready SaaS platform, from concept to deployment and beyond.</em></p>
      </div>
    </ProjectCaseStudyLayout>
  )
}
