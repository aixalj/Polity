import React from "react";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="onboarding-layout">
      {/* Add any onboarding-specific layout elements here */}
      <main>{children}</main>
    </div>
  );
}
