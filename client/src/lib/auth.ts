import { apiRequest } from "./queryClient";
import { UserSession } from "./types";

export async function loginUser(email: string, password: string): Promise<UserSession> {
  const response = await apiRequest("POST", "/api/auth/login", { email, password });
  return response.json();
}

export async function logoutUser(): Promise<void> {
  await apiRequest("POST", "/api/auth/logout");
}

export async function getCurrentUser(): Promise<UserSession> {
  const response = await apiRequest("GET", "/api/auth/me");
  return response.json();
}

export function validateEmail(email: string): boolean {
  // Check if email ends with @liggy.com
  return email.endsWith("@liggy.com");
}

export function isDomainValid(email: string): boolean {
  return email.endsWith('@liggy.com');
}
