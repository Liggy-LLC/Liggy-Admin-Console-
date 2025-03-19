export interface UserSession {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: string;
}

export interface StatsData {
  activeUsers: number;
  adminUsers: number;
  totalUsers: number;
  licenseUsage: {
    used: number;
    total: number;
    percentage: number;
  };
  securityAlerts: number;
}

export interface StatusBadgeProps {
  status: 'active' | 'suspended' | 'away' | 'inactive';
}

export interface UserTableItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'suspended' | 'away' | 'inactive';
  avatar?: string;
}

export interface SecurityAlertItem {
  id: number;
  title: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
  status: string;
  createdAt: string;
}

export interface ActivityLogItem {
  id: number;
  action: string;
  description: string;
  performedBy: string;
  timestamp: string;
  category: string;
}

export interface OrganizationInfo {
  id: number;
  name: string;
  orgId: string;
  domain: string;
  status: string;
  licenses: number;
  usedLicenses: number;
}
