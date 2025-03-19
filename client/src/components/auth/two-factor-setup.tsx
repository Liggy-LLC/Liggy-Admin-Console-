
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";

export default function TwoFactorSetup() {
  const [qrCode, setQrCode] = useState("");
  const [token, setToken] = useState("");

  const setupMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/2fa/setup", {
        method: "POST",
      });
      return response.json();
    },
    onSuccess: (data) => {
      setQrCode(data.qrCode);
    },
  });

  const verifyMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/auth/2fa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!response.ok) throw new Error("Invalid token");
      return response.json();
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="material-icons text-[#1A73E8]">security</span>
          Two-Factor Authentication
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!qrCode ? (
          <Button onClick={() => setupMutation.mutate()}>Setup 2FA</Button>
        ) : (
          <>
            <img src={qrCode} alt="2FA QR Code" className="mx-auto" />
            <Input
              type="text"
              placeholder="Enter verification code"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button 
              onClick={() => verifyMutation.mutate()}
              disabled={verifyMutation.isPending}
              className="w-full"
            >
              Verify Code
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
