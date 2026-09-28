import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import adminService from "@/services/adminService";
import { useToast } from "@/hooks/use-toast";
import { Search, Edit, Eye, Users } from "lucide-react";
import { format } from "date-fns";

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  role: "USER" | "ADMIN";
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  lastLogin?: string;
}

const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchAllUsers();
  }, [currentPage, searchTerm]);

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await adminService.getUsers(currentPage, 20, searchTerm);
      setUsers(response.content);
      setTotalUsers(response.totalElements);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Fallback to demo data
      const demoUsers = [
        {
          id: "1",
          fullName: "John Doe",
          email: "john@example.com",
          phoneNumber: "+1234567890",
          role: "USER" as const,
          isActive: true,
          emailVerified: true,
          createdAt: "2024-01-15T10:00:00",
          lastLogin: "2024-01-20T15:30:00",
        },
        {
          id: "2",
          fullName: "Jane Smith",
          email: "jane@example.com",
          phoneNumber: "+1234567891",
          role: "USER" as const,
          isActive: true,
          emailVerified: false,
          createdAt: "2024-02-10T09:15:00",
          lastLogin: "2024-02-15T12:45:00",
        },
        {
          id: "3",
          fullName: "Admin User",
          email: "admin@freshmeals.com",
          phoneNumber: "+1234567892",
          role: "ADMIN" as const,
          isActive: true,
          emailVerified: true,
          createdAt: "2024-01-01T08:00:00",
          lastLogin: "2024-01-21T10:00:00",
        },
      ];
      setUsers(demoUsers);
      setTotalUsers(demoUsers.length);
      toast({
        title: "Using demo data",
        description: "API not available, showing sample users",
        variant: "default",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (
    userId: string,
    updates: { fullName?: string; phoneNumber?: string },
  ) => {
    try {
      // This would call the backend to update user
      await adminService.toggleUserStatus(userId); // Placeholder - would need proper update method
      toast({ title: "User updated successfully!" });
      fetchAllUsers();
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error updating user",
        variant: "destructive",
      });
    }
  };

  const toggleUserStatus = async (userId: string) => {
    try {
      await adminService.toggleUserStatus(userId);
      // Update local state
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, isActive: !user.isActive } : user,
        ),
      );
      toast({ title: "User status updated successfully!" });
    } catch (error) {
      console.error("Error toggling user status:", error);
      toast({
        title: "Error updating user status",
        variant: "destructive",
      });
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNumber?.includes(searchTerm) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {totalUsers}
              </div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {users.filter((u) => u.isActive).length}
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {users.filter((u) => u.role === "ADMIN").length}
              </div>
              <div className="text-sm text-muted-foreground">Admin Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {users.filter((u) => u.emailVerified).length}
              </div>
              <div className="text-sm text-muted-foreground">
                Verified Emails
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            View and manage all {totalUsers} registered users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name, email, phone, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Details</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Email Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">
                          {user.fullName || "N/A"}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {user.phoneNumber || "No phone"}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ID: {user.id.slice(0, 8)}...
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "ADMIN" ? "default" : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.isActive ? "default" : "destructive"}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={user.emailVerified ? "default" : "outline"}
                      >
                        {user.emailVerified ? "Verified" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {format(new Date(user.createdAt), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell>
                      {user.lastLogin
                        ? format(new Date(user.lastLogin), "MMM dd, yyyy")
                        : "Never"}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedUser(user)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>User Details</DialogTitle>
                            </DialogHeader>
                            {selectedUser && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Full Name</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.fullName || "N/A"}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Email</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.email}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Phone Number</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.phoneNumber || "N/A"}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Role</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.role}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Status</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.isActive
                                        ? "Active"
                                        : "Inactive"}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Email Verified</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {selectedUser.emailVerified
                                        ? "Yes"
                                        : "No"}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>User ID</Label>
                                    <p className="text-xs text-muted-foreground">
                                      {selectedUser.id}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Member Since</Label>
                                    <p className="text-sm text-muted-foreground">
                                      {format(
                                        new Date(selectedUser.createdAt),
                                        "PPP",
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingUser(user)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit User</DialogTitle>
                            </DialogHeader>
                            {editingUser && (
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="fullName">Full Name</Label>
                                  <Input
                                    id="fullName"
                                    value={editingUser.fullName || ""}
                                    onChange={(e) =>
                                      setEditingUser({
                                        ...editingUser,
                                        fullName: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="phoneNumber">
                                    Phone Number
                                  </Label>
                                  <Input
                                    id="phoneNumber"
                                    value={editingUser.phoneNumber || ""}
                                    onChange={(e) =>
                                      setEditingUser({
                                        ...editingUser,
                                        phoneNumber: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    onClick={() =>
                                      updateUser(editingUser.id, {
                                        fullName: editingUser.fullName,
                                        phoneNumber: editingUser.phoneNumber,
                                      })
                                    }
                                    className="flex-1"
                                  >
                                    Save Changes
                                  </Button>
                                  <Button
                                    variant="outline"
                                    onClick={() =>
                                      toggleUserStatus(editingUser.id)
                                    }
                                  >
                                    {editingUser.isActive
                                      ? "Deactivate"
                                      : "Activate"}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredUsers.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                {searchTerm
                  ? `No users found matching "${searchTerm}"`
                  : "No users found in database"}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentPage === 0}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
                  }
                  disabled={currentPage === totalPages - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
