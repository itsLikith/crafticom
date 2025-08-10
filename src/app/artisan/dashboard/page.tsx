'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Package,
  Clipboard,
  MessagesSquare,
  ChartNoAxesCombined,
} from 'lucide-react';

export default function Page() {
  // Mock data for demonstration
  const [stats] = useState({
    totalProducts: 24,
    activeOrders: 8,
    monthlyRevenue: 2450,
    totalViews: 1240,
    rating: 4.8,
    totalReviews: 156,
  });

  const [recentOrders] = useState([
    {
      id: 'ORD-001',
      customerName: 'Sarah Johnson',
      product: 'Handwoven Ceramic Bowl',
      amount: 89.99,
      status: 'pending',
      date: '2024-08-09',
    },
    {
      id: 'ORD-002',
      customerName: 'Michael Chen',
      product: 'Artisan Leather Wallet',
      amount: 65.0,
      status: 'completed',
      date: '2024-08-08',
    },
    {
      id: 'ORD-003',
      customerName: 'Emma Davis',
      product: 'Custom Wooden Sculpture',
      amount: 245.0,
      status: 'in-progress',
      date: '2024-08-07',
    },
    {
      id: 'ORD-004',
      customerName: 'David Wilson',
      product: 'Hand-knitted Scarf',
      amount: 45.0,
      status: 'pending',
      date: '2024-08-06',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Artisan Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back! Here&apos;s what&apos;s happening with your craft business.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Add Product</Button>
              <Button>View Shop</Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stats.totalProducts}
              </div>
              <p className="text-xs text-green-600 mt-1">+2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stats.activeOrders}
              </div>
              <p className="text-xs text-blue-600 mt-1">3 pending review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                ${stats.monthlyRevenue}
              </div>
              <p className="text-xs text-green-600 mt-1">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Profile Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">
                {stats.totalViews}
              </div>
              <p className="text-xs text-purple-600 mt-1">+8% this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Orders */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Your latest customer orders and their status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="font-medium text-gray-900">
                          {order.customerName}
                        </div>
                        <div className="text-sm text-gray-600">
                          {order.product}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">
                          ${order.amount}
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="ghost">View All Orders</Button>
              </div>
            </CardContent>
          </Card>

          {/* Artist Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>How customers see you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="/assets/defaults/defaultpfp.png"
                    alt="Artisan"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-600">Ceramic Artist</div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{stats.rating}</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Reviews</span>
                  <span className="font-semibold">{stats.totalReviews}</span>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to manage your craft business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <div className="text-lg">
                  <Package />
                </div>
                <span className="text-sm">Add Product</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <div className="text-lg">
                  <Clipboard />
                </div>
                <span className="text-sm">Manage Orders</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <div className="text-lg">
                  <MessagesSquare />
                </div>
                <span className="text-sm">Customer Messages</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <div className="text-lg">
                  <ChartNoAxesCombined />
                </div>
                <span className="text-sm">View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
